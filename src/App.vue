<template>
  <div id="app">
    <navbar></navbar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{navbar},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  padding: 0;
  margin: 0;
}
ul,li,ol{
  list-style: none;
}
a{
  text-decoration: none;
  color: #0d6efd;
}
html{ font-size: 16px;}
h2{
  /* profile & edit */
  margin: 0 0 8px;
  font-size: 22px!important;
  text-align: left;
  font-weight: 500;
}
h4{
  font-size: calc(1.275rem + .3vw);
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}
.tac{
  text-align: center!important;
}
.tal{
  text-align: left!important;
}
.w-720{
  max-width: 720px;
}
.w-330{
  max-width: 330px;
}
.w-90{
  width: 90px!important;
}
.hidden{
  visibility: hidden;
}

.warn{
  color:red;
  display: inline-block;
}
/* 清除浮动 */
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}


[v-cloak] {
  display: none;
}
/* input-card */
.input-card{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
}
.input-card *{
  box-sizing: border-box;
  font-size: 16px;
}

.input-card>h4{
  margin: 24px;
  font-size: 20px;
}
.input-card  a{
  margin-top: 4px;
}
.input-card label{
  display: inline-block;
  margin-bottom: 8px;
}
.input-card input{
  height: 38px;
}
.input-card input,textarea{
  padding: 6px 12px;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 4px;
}
.input-card input:focus,.input-card textarea:focus{
  border-color: #8bbafe;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(13 110 253 / 25%);
}
.input-card input.error:focus{
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
}
.input-card span.warn{
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: 14px;
}

.input-card .anLabel{
  margin-bottom: 16px;
  text-align: left;
}
.input-card div.span-father{
  position: relative;
  padding-bottom: 16px;
}
.input-card >div>.bbtn{
  width: 100%;
}

/* blue btn */
.bbtn{
  display: inline-block;
  padding: 10px 12px;
  border-radius: 6px;
  background: #0D6EFD;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}
.bbtn:hover{
  background:#0664EE;
}

/* border css*/
.borderShadow{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 5px;
  margin-bottom: 24px;
  /* width: 28%; */
  border: 1px solid #eee;
  border-radius: .25rem;
  -webkit-box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

/* css多行溢出 */
.text-overflows{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.cardColumn img {
  object-fit: cover;
}
/* pre */
pre{
  font-size: 16px;
  white-space: pre-wrap;
  word-wrap: break-word;
  /* word-break: break-all; */
}
@media  screen and (max-width: 320px) {
  div.head,.percolmain,.middle{
    width: 95vw!important;
    flex-direction: column;
  }
  .article{
    width: 95%;
    margin: 0 auto;
  }
 .author{
   flex-direction: column;
 }
  .container {
    margin: 0 10px!important;
  }
   .footer .content .column {
    padding: 0;
    width: 95%;
  }
}
@media screen and (min-width: 320px) and (max-width: 360px) {
  .container{
    margin: 0 10px!important;
  }
}
@media screen and (min-width: 320px) and (max-width: 680px) {
    /* html {
        font-size: calc(100% + 2 * (100vw - 375px) / 39);
        font-size: calc(16px + 2 * (100vw - 375px) / 39);
    } */
    /* html { font-size: calc(100vw / 36) } /*  360px尺寸10px 作为基准 */

    /* top */
     .top{
      margin-bottom: 15px!important;
    }

    /* footer */
    .footer .content {
      align-items: center;
    }
    .footer .content .column {
      padding: 0;
      /* width: 95%; */
      width: 45vw;
      margin-bottom: 12px;
    }
    .footer .content .column .cardColumn {
      padding-top: 0;
    }
    /* column */
    div.cardColumn .text{
      height: auto;
    }
    div.cardColumn>div{
      margin: 8px 0;
    }

    /* presonalColumn */
    div.percolmain {
      width: 100%;
    }
    div.head {
      display: block;
      width: 95%;
      position: relative;
      padding-bottom: 0;
      margin: 0 auto;
    }
    div.head .right{
      padding-right: 0;
      text-indent: 1em;
    }

    div.head img {
      float: left;
      margin-left: 10px;
      height: 75px;
      width: 75px;
      object-fit: cover;
    }

    /* article  */
    div.art-container {
      margin-bottom: 0;
      padding: 10px;
    }
    div .article {
      margin-bottom: 0;
    }
    div.article{
      padding-bottom: 4px;
    }
    .article > .middle {
      flex-direction: column;
      margin: 0;
    }
    .article > .middle>div {
      padding: 8px;
    }
    .article > .middle img {
      width: 100%;
      object-fit: cover;
    }
    .article > .middle p {
      text-indent: 2em;
      margin-bottom: 8px;
    }
    .article > .middle > *{
      width: 100%;
    }
    div.article>h4 {
    text-align: center;
    /* 单行溢出 */
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    }

    /* .postCard */
    div.navurl{
      margin-bottom: 8px;
    }
    div.navurl a{
      padding-right: 0;
    }

    .page {
      /* overflow: hidden; */
    }
    div.page > img{
      margin: 6px 0;
      object-fit: contain;
      width: 95vw;
      /* max-height: fit-content; */
    }
    div.page > h4{
      margin: 12px 0;
    }
    div.postCard {
      width: 95%;
      margin: 0 auto;
    }

    div.page> div.author {
      padding-top: 8px;
      padding-bottom: 0;
      margin-bottom: 12px;
      flex-direction: column;
    }
    div.page> div.author img{
      object-fit: cover;
    }
   div.author .intro> span.gray {
     font-size: 14px;
   }
   div.author > span.right.gray {
     text-align: center;
     font-size: 12px;
     line-height: 20px;
    }

    /* edit */
    .input-card {
      padding-top: 0;
    }
    .input-card .anLabel{
      margin-bottom: 0;
    }
    .input-card .anLabel textarea{
      height: 100px;
    }
    .input-card > button {
      margin: 0 auto;
      width: 90vw!important;
    }

    /* profile */
    div.input-card .perinfo{
      margin: 0 0 12px;
    }
    div.input-card textarea{
      height: 80px;
    }

    /* login & register */
    .input-card>h4 {
      margin-top: 0;
      margin-bottom: 12px;
    }
}

@media screen and (min-width: 1316px) {
  .percolmain{
    width: 85vw!important;
  }
  .middle>div {
    width: auto!important;
  }
  .middle>p{
   flex-grow:1!important;
  }
  /* .column{
    width: 23%!important;
  } */
}
</style>
