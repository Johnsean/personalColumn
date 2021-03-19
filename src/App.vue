<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
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

body{
  /* height: 1500px; */
}
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
</style>
