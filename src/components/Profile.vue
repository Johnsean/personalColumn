<template>
  <div>
    <ul>
      <li @click="select('p',true)"> 更新个人资料
      </li>
      <li @click="select('c',false)">更新专栏信息</li>
    </ul>
    编辑个人资料
    <div><img :src="src" alt="头像"></div>
    <input v-model="name">
    <textarea v-model="intro" name="" id="" cols="30" rows="10"></textarea>
    <button @click=post >提交修改</button>
  </div>
</template>

<script>

export default {
  data(){
    return {
      src: '无图片',
      name: '我的名字',
      intro: '我的个人信息',
      sign :true // 默认值为 p开头属性信息
    }
  },
  computed: {
    imUser(){
      return this.$store.state.imUser
    }
  },
  created(){
    this.select('p',true)
  },
  methods:{
    select(first,boo){  //判断是改哪个信息
      this.src = this.imUser[first+"src"]
      this.name = this.imUser[first+"name"]
      this.intro = this.imUser[first+"intro"]
      this.sign = boo
    },
    post(){
      // 更新信息
      let first = this.sign?"p":"c"
      let obj = {}
        obj[first+"src"] = this.src
        obj[first+"name"]=this.name
        obj[first+"intro"]=this.intro

      this.$store.commit('updateInfo',obj)
      alert("修改成功！")
    }
  }
}
</script>

<style lang="">

</style>
