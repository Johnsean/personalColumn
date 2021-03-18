<template>
  <div>
    <h2>{{head}}文章</h2>
    <input class="upload" type="file" @change="uploadImg" accept="image/*">
    <div><img class="photo" :src="img"></div>
    <div>
      文章标题：<input  v-model="title" type="text" placeholder="请输入文章标题" required>
    </div>
    <div>
      文章详情：<textarea v-model="context" name="" id="" cols="30" rows="10" placeholder="请输入文章详情"></textarea>
    </div>
    <div>
      <button @click="postArticle">
        {{post}}文章
      </button>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      //初始值
      head:"新建",
      img: "点击上传头图",
      title: "",
      context:"",
      post:"发表",
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
    uploadImg(e){   //上传,显示要上传图片 的操作
      if(e.target.files){
        let file = e.target.files[0]
        if(!/image\/\w+/.test(file.type)){
          alert("请传入图片")
          return false;  //如果满足if 后面就不执行了
        }
        if(file.size >1024*1024){
          alert("这个文件大于1M！请重新选择！")
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);  //// img 转Base64 传入url
        reader.onload = (e)=>{  //加载成功：
          this.img = e.target.result;
        }
      }
    },
    postArticle(){  // 点击提交的操作：
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
.photo{
  width: 500px;
  height: 200px;
  background: rgb(218, 218, 218);
}
.upload{
    opacity: 0.8;
}
</style>
