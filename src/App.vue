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
h4{
  font-size: calc(1.275rem + .3vw);
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

[v-cloak] {
  display: none;
}

/* blue btn */
.bbtn{
  display: inline-block;
  padding: 10px 12px;
  border-radius: 10%;
  background: #0D6EFD;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
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
