<template>
  <div class="input-card w-330">
    <h4>登录到简单专栏</h4>
    <div class="anLabel">
      <label>用户名</label>
      <div class="span-father">
        <input type="text" placeholder="请输入用户名" v-model.trim="username" @blur="username===undefined?username='':1">
        <span class="warn" :class="{hidden:username===undefined||username!==''}">用户名不能为空</span>
      </div>
    </div>
    <div class="anLabel">
      <label>密码</label>
      <div class="span-father">
        <input type="text" placeholder="请输入密码" v-model="password" @blur="password===undefined?password='':1">
        <span class="warn" :class="{hidden:password===undefined||password!==''}">密码不能为空</span>
      </div>
      <router-link to="/register">还没有账户？去注册一个新的吧！</router-link>
    </div>
    <div>
      <button class="bbtn" @click="logining">登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:undefined,
      password:undefined
    }
  },
  methods:{
    logining(){
      if(!this.username||!this.password){
        alert("提交失败，不要提交空内容")
        return false
      }
      // let body = {username:this.username,password:this.password}
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
