<template>
  <div class="input-card">
    <ul class="perinfo">
      <li @click="select('p',true)">
        <a href="javascript:void(0);" :class="{active:sign}">更新个人资料</a>
      </li>
      <li @click="select('c',false)">
        <a href="javascript:void(0);" :class="{active:!sign}"> 更新专栏信息</a>
      </li>
    </ul>
    <h2>编辑:</h2>
    <uploadfile class="img-user" :img="src" @imgChange="imgChange"></uploadfile>
    <div class="span-father spaClear">
      <input v-model="name">
      <span class="warn" :class="{hidden:name!==''}">不能为空</span>
    </div>
    <div class="span-father spaClear">
      <textarea v-model="intro" rows="10"></textarea>
      <span class="warn" :class="{hidden:intro!==''}">不能为空</span>
    </div>
    <button class="bbtn w-90" @click=post >提交修改</button>
  </div>
</template>

<script>
import uploadfile from '@/components/Uploadfile'
export default {
  components:{uploadfile},
  data(){
    return {
      src: '',
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
    imgChange(data){
      this.src = data
    },
    select(first,boo){  //判断是改哪个信息
      this.src = this.imUser[first+"src"]
      this.name = this.imUser[first+"name"]
      this.intro = this.imUser[first+"intro"]
      this.sign = boo
    },
    post(){
      if(!this.name||!this.intro){
        alert("提交失败，不要提交空内容")
        return false
      }
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
.perinfo{
  display: flex;
  margin: 24px 0;
  border-bottom: 1px solid #dee2e6;
}
.perinfo a{
  display: block;
  padding: 8px 16px;
  border: 1px solid transparent;
  margin-bottom: -1px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

}
.perinfo a.active{
  color: #495057;
  border-color: #dee2e6 #dee2e6 #fff;
}
.img-user {
  background: #fff!important;
  padding: 16px 0;
}
.img-user  img{
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
input,textarea{
  margin-bottom: 16px;
}
.input-card span.warn {
 bottom: 11px;
}
@media screen and (min-width: 360px) and (max-width: 680px) {
 div.img-user  img{
    width: 150px;
    object-fit: cover;
  }
  .spaClear {
    padding-bottom: 1px!important;
  }
  .spaClear > span {
    bottom: -1px!important;
  }
}
</style>
