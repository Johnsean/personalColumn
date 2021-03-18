import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    users:'',
    imUser: loginSignItem, ///默认值为 表中 当前'我'的信息
    isLogin: !!loginSignItem //默认值为 表中是否登记了 登陆
  },
  getters:{
    //传入id 筛选出该id用户的信息对象
    filterUser: (state)=>(id)=>{
      if(state.imUser && state.imUser.id-0 === id-0){  // 验证是否是用户自己的专栏 id都转换为数字型比较
        return state.imUser
      }else{  //当不是自己的专栏才执行
        if (state.users) { //当users有数据的时候才执行
          return state.users.filter(user => {
            if (user.id === id) return true;
            return false;
          })[0]
        }
      }
    },
    //筛选单个文章内容&作者信息
    getArticle: (state)=>(paperId)=>{
      let otherPaper = false  //是否是别人的文章

      if (state.isLogin && !otherPaper) { // 验证是否是用户自己的文章 id都转换为数字型比较
        if (state.imUser.articles) {
          let imPaper,imArticle = {}
          imPaper = JSON.parse(JSON.stringify(state.imUser)) //防止了改state.imUser值
          imArticle = state.imUser.articles.find(article => {
            if (!article.id) { //没有文章
              return false
            }
            return article.id-0 === paperId-0 //文章筛选出来了
          })
          if (imArticle){  //如果有文章 则是自己的
            otherPaper = false
            imPaper.isOwn = true // 标记文章是自己的
            imPaper.articles = imArticle
            return imPaper
          }else{
            otherPaper = true //是其他人的文章
          }
        }
      }

      if (state.users && otherPaper) {
        let theArticle = {} //筛选出来的该文章信息 article:{...}
        let thePaper = {}; //组合文章&作者信息 {info..,articles:{...}}
        thePaper = state.users.find(user => {
          if (!user.articles) { //articles不存在
            return false
          }
          theArticle = user.articles.find(article => { //找含有/post/id的用户
            if (!article.id) { //没有文章
              return false
            }
            return article.id-0 === paperId-0 //文章筛选出来了
          })
          return user.id
        })
        thePaper.articles = theArticle //组装thePaper
        return thePaper
      }
    }
  },
  mutations:{
    signLogin(state,payload){  //记录登录状态
      //  2️⃣ 登出传入 ‘’ 3️⃣ 重进页面初始化时 监听： loginSignItem改变的时候传入
      state.isLogin = !!payload //传入值为true  没有值则为false 则是登出
      setLocal.save("signLogin", payload)
    },
    loginIn(state, payload) { //登入 1️⃣传入登陆的用户信息  更新到Sign表中
      state.isLogin = true
      state.imUser = payload
    },
    usersMutation(state, payload) { //异步拉取用户组的数据
      state.users = payload.data.users
    },
    updateInfo(state, payload){ //登陆退出时保存
      Object.assign(state.imUser, payload)
      setLocal.save("signLogin", state.imUser)
    },
    updateArticle(state, payload){ //更新文章
      let obj = state.imUser.articles
      obj.map(article => {
        if (article.id - 0 === payload.id - 0) {
          Object.assign(article, payload)
        }})
      setLocal.save("signLogin", state.imUser)
    },
    delArticle(state, payload) {
      let obj = JSON.parse(JSON.stringify(state.imUser.articles))
      if(obj.length === 1){
        obj = ''
      }else{
         obj = obj.filter((article) => {
           if (article.id - 0 === payload - 0) return false; // 过滤掉 ‘id’为true，因为已经被删除了。
           return true;
         })
      }
      state.imUser.articles = obj
      setLocal.save("signLogin", state.imUser)
    },
    newArticle(state, payload) { //新建文章
      let obj = JSON.parse(JSON.stringify(state.imUser))
      if (obj.articles) { //如果有文章 那么
        let newId = obj.articles[obj.articles.length - 1].id + parseInt(Math.random(1) * 1000000)
        payload.id = newId
        state.imUser.articles.push(payload)
      }else{ //如果没有过文章
        let art = { //没有id 那就是新建文章
          id: obj.id * 100 + 1,
          ...payload
        }
        state.imUser.articles = []
        state.imUser.articles.push(art)
      }
      setLocal.save("signLogin", state.imUser)
    }
  },
  actions:{
    getUsers({commit}) {  //异步拉取用户组 信息
      axios.get("https://www.fastmock.site/mock/0431f3372ea8aecd3a1a98f3d90625ba/users/api/getusers")
      .then((data) => {commit('usersMutation',data)})
    },
    updateLogin({commit},arg){  //异步验证登陆
      axios.post("https://www.fastmock.site/mock/0431f3372ea8aecd3a1a98f3d90625ba/users/api/login", arg).then((res) => {
        // console.log("登陆是否成功:", res.data.data.verifySuccess)
        if (res.data.data.verifySuccess) { //登陆成功
          commit('signLogin', true)
        }else{
          alert("帐号或密码输入错误！",window.location.href='/login')
        }
      })
    }
  }
});

export default store;
