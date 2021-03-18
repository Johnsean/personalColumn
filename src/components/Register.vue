<template>
  <div>
    <h3>注册到知乎</h3>
    <div>
      <p>用户名</p>
      <input type="text" placeholder="请输入用户名" v-model.trim="username">
    </div>
    <div>
      <p>密码</p>
      <input type="text" placeholder="请输入密码" v-model="password" required>
    </div>
     <div>
      <p>重复密码</p>
      <input type="text" placeholder="请再次输入密码" v-model="vpwd">
    </div>
    <div>
      <router-link to="/login">已经有账户？去登陆</router-link>
      <button class="bbtn" @click="register">注册新用户</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:"",
      password:"",
      vpwd:""
    }
  },
  methods:{
    register(){
      if(this.vpwd === this.password && this.password && this.username){
        let body = {"username":this.username,"password":this.password,
          csrc:"http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a21c305b1070f455204.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
          psrc:"http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a21c305b1070f455204.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
          cname:this.username,pname:"用户"+this.username,
          cintro:"无简介",pintro:"该用户什么也没说"
        }
        let oldArray = setLocal.get("login")//取出操作前的本地注册users信息

        //检测是否重复用户名：
        if(oldArray.some(user=>{return user.username===this.username})){
          alert("该用户名已存在")
        }else{
          let oldId =oldArray[oldArray.length-1].id
          body.id = oldId + 1

          oldArray.push(body)
          setLocal.save("login", oldArray)  //调用全局方法 信息保存进login表中
          alert("注册成功")
          window.location.href = '/'
        }
      }else{
        alert("密码输入错误，请重新输入")
      }
    }
  }
}
</script>

<style lang="">

</style>
