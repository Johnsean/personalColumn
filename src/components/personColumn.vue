<template>
<!-- 某个人的专栏展示界面 -->
  <div class="percolmain" v-if="user">
    <div class="head clearfix">
      <img :src="user.csrc||'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a21c305b1070f455204.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'" alt="头像">
      <div class="right">
        <h4>{{user.cname||"用户"+user.username}}的专栏</h4>
        <p class="gray">{{user.cintro||"这个人没有简介"}}</p>
      </div>
    </div>
    <div v-if="articles">
      <div class="art-container" v-for="article in articles" :key="article.id" >
        <div class="article borderShadow">
          <h4>
            <router-link :to="'/post/'+ article.id" class="black">{{article.title}}</router-link>
          </h4>
          <div class="middle">
            <div v-if="article.artImgSrc"><img :src="article.artImgSrc" alt=""></div>
            <p class="gray text-overflows tal">
              {{article.context}}
            </p>
          </div>
          <span class="gray">{{article.stamp}}</span>
        </div>
      </div>
       <loader-more :pageSize="pageSize" :total="total" @isclick="loaded"></loader-more>
    </div>
    <div v-else>
      <p class="lblue gray">没有文章</p>
    </div>
  </div>
</template>

<script>
import LoaderMore from '@/components/LoaderMore'
export default {
  data(){
    return {
      userId:'',
      pageSize:4, //每次加载6个
      total:0,
      currentPage:1
    }
  },
  components:{ LoaderMore },
  // 通过id 拿到该用户的所有信息
  // ①专栏信息 ②文章： 循环articles把 article 弄出来
  computed: {
    user() { // 返回vuex getters 定义的该id的 用户的数据
      let ifuser = this.$store.getters.filterUser(this.userId)
      if(ifuser){
        return ifuser
      }
    },
    articles(){  //返回专栏文章合集
      if(this.user && this.user.articles){
        let reArr = JSON.parse(JSON.stringify(this.user.articles)).reverse() //数据倒叙 显示
        let arr = []
        if(reArr && reArr.length){
          this.total = reArr.length
          let i = 1
          arr = reArr.filter((c)=>{ //分页
            if( (i <= this.pageSize*this.currentPage ) && !!c){
              i++
              return c
            }
          })
          return arr;
        }
        return arr;
      }
    }
  },
  created(){  // created生命周期，在实例已经创建完成，页面还没渲染时调用 获取路由中 id值
    this.userId = this.$route.params.id
    this.$store.dispatch('getUsers')
  },
  methods:{
    loaded (count) {
      this.currentPage = count
    }
  }
}
</script>

<style lang="">
.black{
  color:#000;
}
.lblue{
  background: lightblue;
}

/* 该组件页面整体样式 */
.percolmain{
  display: flex;
  flex-direction: column;
  width: 690px;
  margin: auto;
}
.head{
  display: flex;
  align-items: center;
  text-align: left;
  padding-bottom: 24px;
  margin-bottom: 23px;
  border-bottom: 1px solid #dee2e6!important;
}
.head img{
  width: 150px;
  height: 150px;
  /* padding-bottom: 1.5rem!important; */
  /* margin-bottom: 1.5rem!important; */
  border-radius:50% ;
}
div.right{
  padding: 12px;
  padding-left: 24px;
}

.art-container{
  margin-bottom: 16px;
}
.article{
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.article>h4{
  margin-bottom: 8px;
  text-align: left;
}
.article>h4>a:hover{
  color: #0d6efd;
}

.middle{
  display: flex;
  margin: 16px -12px;
  flex-wrap: wrap;
}
.middle img{
  vertical-align: middle;
  width: 200px;
  height: 110px;
  border-radius: 4%;
}
.middle>div{
  width: 33.333333%;
  flex: 0 0 auto;
  box-sizing: border-box;
  padding: 0 12px;
}
.middle>p {
  flex: 0 0 auto;
  width: 66.666667%;
  margin-bottom: 16px;
  padding: 0 12px;
  -webkit-line-clamp: 5;
  line-height: 24px;
  box-sizing: border-box;
  max-height: 120px; /**兼容ie ie不是webkit 不支持多行省略css */
}
div.article > span.gray{
  text-align: left;
}

</style>
