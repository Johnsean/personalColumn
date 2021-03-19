<template>
  <div class="input-card w-330">
    <h4>注册到简单专栏</h4>
      <div class="anLabel">
      <label>邮箱</label>
      <div class="span-father">
        <input type="text" placeholder="请输入邮箱" v-model.trim="email" @blur="flag=/^\w+(@+\w+\.c+(om|n))$/.test(email)">
        <span class="warn" :class="{hidden:email===undefined||flag}">邮箱格式不正确</span>
      </div>
    </div>
    <div class="anLabel">
      <label>用户名</label>
      <div class="span-father">
        <input type="text" placeholder="请输入用户名" v-model.trim="username">
        <span class="warn" :class="{hidden:username===undefined||username!==''}">用户名不能为空</span>
      </div>
    </div>
    <div class="anLabel">
      <label>密码</label>
      <div class="span-father">
        <input type="password" placeholder="请输入密码" v-model="password">
        <span class="warn" :class="{hidden:password===undefined||password!==''}">密码不能为空</span>
      </div>
    </div>
    <div class="anLabel">
      <label>重复密码</label>
      <div class="span-father">
          <input type="password" placeholder="请再次输入密码" v-model="vpwd">
          <span class="warn" :class="{hidden:vpwd===''||password===vpwd?1:false}">两次密码输入不一致</span>
      </div>
      <router-link to="/login">已经有账户？去登陆</router-link>
    </div>
    <div>
      <button class="bbtn" @click="register">注册新用户</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: undefined,
      username:undefined,
      password:undefined,
      vpwd:"",
      flag:true
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
