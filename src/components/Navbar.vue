<template>
   <!--导航标题 -->
   <div class="top" @click = "yes=false">
     <div class="container">
       <router-link to="/" class="title">简单专栏</router-link>
       <div class="user">
         <div class="unenter" v-if="!loginSignItem">
           <router-link to="/login" class="login">登陆</router-link>
           <router-link to="/register" class="register">注册</router-link>
         </div>
         <div class="enter" v-else @click.stop = "yes=!yes">
           <a  href="javascript:void(0);" >你好 {{imUser.cname}} 👇</a>
           <ul v-show="yes" @blur="aaaa()">
             <router-link to="/edit"> 新建文章</router-link>
             <router-link :to="'/column/'+ imUser.id">我的专栏</router-link>
             <router-link to="/profile"> 编辑资料</router-link>
             <a @click= "logout" href="javascript:void(0);">
              退出登陆
              </a>
           </ul>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  data(){
    return {
      yes: false, //显示隐藏菜单：　登陆成功 & 显示　=》 true
      loginSignItem: loginSignItem  //值为 全局静态参数  ：初始化的 检测是否登陆了
    }
  },
  computed: {
    isLogin(){
      return this.$store.state.isLogin;
    },
    imUser(){
      return this.$store.state.imUser
    }
  },
  watch:{
    isLogin(){
      if(this.isLogin){ //登陆成功跳转
        alert("登陆成功")
        window.location.href="/"
      }
    }
  },
  methods:{
    logout(){  //登出代码
    // 登出时 update 本地userlis数据
      let oldArray = setLocal.get("login")//取出操作前的本地注册users信息
      var onuser = JSON.parse(JSON.stringify(this.imUser)) //目前登陆的用户信息
      for(let i=0 ;i< oldArray.length;i++){  //替换数据
        if(oldArray[i].id -0 === onuser.id - 0) {
          oldArray[i] = '' //先清空
          oldArray[i] = onuser
          break //找到了就退出for 循环
        }
      }
      setLocal.save("login",oldArray)
      this.$store.commit('signLogin','')
      alert("正在登出")
      window.location.href = '/'
    }
  }
}

</script>

<style lang="">
/* 全局 */
.gray {
  color: #6c757d!important;
}

/* .top */
.top{
  background: #0D6EFD;
  margin-bottom: 30px;
}
.top a{
  color: #fff;
}
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
  padding: 30px 5%;
  color:white;
}
.container .title{
  flex-flow: 1;
  font-size: 20px;
}
.container .user{
  flex-flow: 1;
}
.container .user a:hover{
  background: #fff;
  color: #000;
}
.container .user a{
  font-size: 16px;
  padding: 6px 12px;
  border: 1px solid #fff;
  border-radius: 10%;
}

/* user>enter */
.container .user{
  position: relative;
}
.container .user ul{
  position: absolute;
  padding: 8px 0;
  top:36px;
  background: #fff;
  color: #000;

  border:1px solid #eee;
  border-radius: .25rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;

}
.container .user ul a{
  display: block;
  text-align: left;
  color: #000;
  width: 126px;
  padding: 4px 16px;
  border:0;
  border-radius: 0;
}



.container .user ul a:hover{
  background-color: #f8f9fa;
}
.container .user ul a:active{
  color: #fff;
  background-color: #0d6efd;
}


</style>
