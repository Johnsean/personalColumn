<template>
  <div class="input-card w-720">
    <h2>{{head}}文章</h2>
    <uploadfile :img="img" @imgChange="imgChange"></uploadfile>
    <div class="anLabel">
      <label>文章标题：</label>
      <div class="span-father">
        <input v-model="title" type="text" placeholder="请输入文章标题" @blur="title===undefined?title='':1">
        <span class="warn" :class="{hidden:title===undefined||title!==''}">文章标题不能为空</span>
      </div>
    </div>
    <div class="anLabel">
      <label>文章详情：</label>
      <div class="span-father">
        <textarea v-model="context" @blur="context===undefined?context='':1"
         cols="30" rows="10" placeholder="请输入文章详情"></textarea>
        <span class="warn" :class="{hidden:context===undefined||context!==''}">文章详情不能为空</span>
      </div>
    </div>
    <button class="bbtn w-90" @click="postArticle">{{post}}文章</button>
  </div>
</template>

<script>
import uploadfile from '@/components/Uploadfile'
export default {
  components:{uploadfile},
  data(){
    return {
      //初始值
      head:"新建",
      img: "",
      title: undefined,
      context:undefined,
      post:"发表"
    }
  },
  computed:{
    article(){ // 返回vuex getters 定义的该id的 用户的数据
      if(this.$route.query.id){
        return this.$store.getters.getArticle(this.$route.query.id).articles
      }else{
        return {}
      }
    }
  },
  created(){
    if(this.$route.query.id){ //判断： 是更新文章进行操作：
      let article = this.article
      this.head = "编辑"
      this.post = "更新"

      this.img = article.artImgSrc
      this.title = article.title
      this.context = article.context
    }
  },
  methods:{
    imgChange(data){
      this.img = data
    },
    postArticle(){  // 点击提交的操作：
      if(!this.title||!this.context){
        alert("提交失败，不要提交空内容")
        return false
      }
      if(this.$route.query.id){
        //更新文章代码  artocle= xxxx
        let newArticle = JSON.parse(JSON.stringify(this.article))
        newArticle.artImgSrc = this.img
        newArticle.title = this.title
        newArticle.context = this.context

        this.$store.commit('updateArticle', newArticle)
        alert("更新成功，2秒后自动跳转",setTimeout(()=>{this.$router.push('/post/'+this.$route.query.id)},2000))
      }else{
        //发表文章代码
        let anArticle ={}
        anArticle.artImgSrc = this.img
        anArticle.title = this.title
        anArticle.context = this.context
         // 插入时间戳
        let myDate=new Date()
        anArticle.stamp = myDate.toLocaleString()

        this.$store.commit('newArticle', anArticle)
        alert("发表成功，2秒后自动跳转",setTimeout(()=>{this.$router.push('/column/'+this.$store.state.imUser.id)},2000))
      }
    }
  }
}
</script>

<style lang="">

</style>
