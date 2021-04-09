<template>
<!-- 某文章 ：-->
  <div v-if="user" class="postCard">
    <div class="navurl">
      <router-link to="/">首页</router-link>
      <router-link :to="'/column/'+ user.id">专栏首页</router-link>
      <span class="gray">{{article.title||""}}</span>
    </div>
    <div class="page" v-if="article">
      <img v-if="article.artImgSrc" :src="article.artImgSrc" alt="头图">
      <h4>{{article.title||""}} </h4>
      <div class="author">
        <div class="left">
          <img :src="user.psrc||'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e3a21c305b1070f455204.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'" alt="头像">
          <div class="intro">
            <h4> {{user.pname ||"无名氏"}} </h4>
            <span class="gray"> {{user.pintro||"无简介"}} </span>
          </div>
        </div>
        <span class="right gray">
          发表于： {{article.stamp}}
        </span>
      </div>
      <pre>{{article.context}}</pre>
      <div class="post-btn" v-if="user.isOwn">
        <router-link :to="'/edit?id='+ article.id">编辑</router-link>
        <button type="button" @click="delMeg">删除</button>
      </div>
      <div class="shadowAll"  v-if = "isVisible">
        <div class="modalMeg">
          <div>
            <h4>是否确认删除</h4>
          </div>
          <div class="btnContainer"><button class="bbtn" @click="delArt">确定</button><button class="bbtn" @click="delMeg">取消</button></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
 data(){
    return {
      articleId:'', //默认展示的文章Id
      isVisible: false
    }
  },
  computed: {
    user() { // 返回vuex getters 定义的该id的 用户的数据
      return this.$store.getters.getArticle(this.articleId)  //返回的是 {userinfo...,articles:{该文章信息}}
    },
    article(){  //返回专栏文章合集
      if(this.user.articles){
        return this.user.articles
      }
    }
  },
  created(){ //创建组件的时候获取值：初始化
    this.articleId = this.$route.params.id
    this.$store.dispatch('getUsers')
  },
  methods:{
    delMeg(){
      this.isVisible = !this.isVisible
    },
    delArt(){
      this.$store.commit("delArticle",this.$route.params.id)
      alert("删除成功，2秒后自动跳转", setTimeout(() => {
        this.$router.push('/column/' + this.$store.state.imUser.id)
      }, 2000))
    }
  }
}
</script>
<style lang="">
/* postCard */
.postCard{
  display: flex;
  flex-direction: column;
  margin: 0 63px;
}
.navurl{
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: #e9ecef;
  text-align: left;
  border-radius: 4px;
}
.navurl a{
  color: #0d6efd;
  text-decoration: underline;
  padding-right: 8px;
}
.navurl a::after{
  display: inline-block;
    padding-left: 8px;
    color: #6c757d;
    content: "/";
}
/* page */
.page{
  text-align: left;
  padding-bottom: 16px;
  margin-bottom: 48px;
  position: relative;
}
.page>img{
  margin: 24px 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: .3rem!important;
  width: 690px;
  max-height: 294px;
}
.page>h4{
  margin-bottom: 24px;
  font-size: 25px;
}
div.author{
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 48px;
  border-bottom: 1px solid #dee2e6!important;
  border-top: 1px solid #dee2e6!important;
}
div.author > div.left{
  display: flex;
  align-content: center;

}
div.author > div.left>img{
  width: 50px;
  height: 50px;
  padding: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 50%
}
div.left > .intro{
  margin-left: 8px;
  font-size: 16px;
  line-height: 24px;
}
div.left > .intro>h4{
  line-height: 24px;
  font-size: 16px;
  margin: 0;
}
div.author > span.right{
  font-style: italic;
  line-height: 50px;
}
/* post-btn */
.post-btn{
  margin-top: 48px;
  display: inline-flex;
  width: 115px;
  vertical-align: middle;
}
.post-btn>*{
  flex: 1 1 auto;
  padding: 6px 12px;
  border-radius: 5%;
  box-sizing: border-box;
  font-size: 16px;line-height :24px;
  vertical-align: middle;
}
.post-btn>a{
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}
.post-btn>a:hover{
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
.post-btn>button{
  margin-left: -1px;
  cursor: pointer;
  color: #fff;
  background-color: #dc3545;
  border: 0;
}
.post-btn>button:hover{
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

/* modalMeg */
.shadowAll {
  position: absolute;
  left: -20%;
  top: -100%;
  width: 140%;
  height: 1000%;
  z-index: 99;
  background: rgba(255,255,255,.8);
}
.modalMeg {
  position: fixed;
  left:15%;
  top: 40%;
  width: 70vw;
  height: 20vh;
  display: flex;
  border:1px solid skyblue;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px;
  background: rgba(130, 238, 220,.7);
  border-radius: 4px;
}
.modalMeg h4 {
  padding: 8px;
  font-weight: 550;
}
.modalMeg .btnContainer{
  display: flex;
  justify-content: flex-end;
}
</style>
