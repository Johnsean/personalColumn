<template>
  <div>
    <h3>登录到知乎</h3>
    <div>
      <p>用户名</p>
      <input type="text" placeholder="请输入用户名" v-model.trim="username">
    </div>
    <div>
      <p>密码</p>
      <input type="text" placeholder="请输入密码" v-model="password">
    </div>
    <div>
      <router-link to="/register">还没有账户？去注册一个新的吧！</router-link>
      <button class="bbtn" @click="logining">登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods:{
    logining(){
      let body = {username:this.username,password:this.password}
      //1 .异步方式  先关闭。与2一起逻辑重合一部分 且要并行麻烦
      // this.$store.dispatch('updateLogin',body)
      //2. 进行本地验证：
      let oldArray = setLocal.get("login")//取出操作前的本地注册users信息

      //检测是否重复用户名：
      var onuser={} //目前登陆的用户信息
      onuser = oldArray.filter(user=>{return (user.username===this.username)&&(user.password===this.password)})[0]
      if(onuser){
        this.$store.commit('loginIn',onuser)
        setLocal.save("signLogin", onuser) //将登陆信息 记录在sign表中
      }else{
        alert("帐号或密码输入错误！")
      }
    }
  }
}
</script>

<style lang="">

</style>
