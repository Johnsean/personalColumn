<template>
<!-- 首页(不包括导航栏) -->
   <!-- 路由切换 -->
   <div class="main">
     <div class="img"><img src="../assets/photo.svg" width="33%"></div>
     <h2 class="tac"> 随心写作，自由表达 </h2>
     <div >
        <button class="bbtn" @click="isEdit">开始写文章</button>
     </div>
   <!-- 展示一些专栏 -->
      <div class="footer">
        <h2 class="tac">发现精彩</h2>
        <!-- 一排三个 循环组件 -->
        <div class="content" >
          <div class="column" v-for="user in users" :key="user.uid">
            <columns :user="user">
            <!-- 推荐的其他人的专栏 -->
            </columns>
          </div>
        </div>
        <loader-more :pageSize="pageSize" :total="total" @isclick="loaded"></loader-more>
      </div>
   </div>
</template>

<script>
import columns from '@/components/Columns'
import LoaderMore from '@/components/LoaderMore'

export default {
  data(){
    return {
      pageSize:4, //每次加载6个
      total:0,
      currentPage:1
    }
  },
  components:{
    columns,LoaderMore
  },
  computed:{
    users(){ //同步更新
      if(this.$store.state.users && this.$store.state.users.length){
        this.total = this.$store.state.users.length
        let arr = [],curUsers = this.$store.state.users
        let i = 1
        arr = curUsers.filter((c)=>{ //分页
            if( (i <= this.pageSize*this.currentPage ) && !!c){
              i++
            return c
          }
        })
        return arr
        // return this.$store.state.users
      }
    },
    isLogin(){  //标记登陆状态
      return this.$store.state.isLogin
    }
  },
  created(){  //拉取用户组 信息
    this.$store.dispatch('getUsers')
  },
  methods:{
    loaded(count){
      this.currentPage = count
    },
    isEdit(){
      if(this.isLogin){ //根据Login 值判断跳转哪个页面
        this.$router.push("/edit")
      }else{
        this.$router.push("/login")
      }
    }
  }
}
</script>

<style lang="">
/* .main */
.main h2{
  margin-bottom: 15px;
}
.bbtn a{
  color: #fff;
}

/* .footer */
.footer{
  margin-top: 18px;
}
.footer h2{
  margin-bottom: 18px;
}

.footer .content{
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
}
.footer .column{
  box-sizing: border-box;
  padding: 16px 5px;
  margin-bottom: 24px;
  width: 28%;
  border:1px solid #eee;
  border-radius: .25rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
</style>
