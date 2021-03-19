<template>
  <div class="cardColumn">
    <div>
      <img :src="user.csrc" alt="我是头像">
    </div>
    <h3 class="title">{{user.cname}}</h3>
    <p class="text">{{user.cintro}}</p>
    <router-link :to="'/column/'+user.id" class="btn">进入专栏</router-link>
  </div>
</template>

<script>
export default {
  props:{
     user: {
      type: Object,
      default: () => {
        return {
          csrc:"column.img",
          cname:"我的名称",
          cintro:"我的个人简介"
        };
      }
    }
  }
}
</script>

<style lang="">
.cardColumn{
  padding: 16px;
}
.cardColumn img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.cardColumn>div{
  margin: 16px 0;
  height: 50px;
}
.cardColumn h3{
  margin-bottom: .5rem;
  font-weight: 500;
  /* 块级元素 文字不换行 超出为省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
.cardColumn p{
  text-align: left;
  margin-bottom: 1rem;
  /* 三行溢出省略 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cardColumn .text{
  line-height: 20px;
  height: 60px;
  color: #6c757d!important;
}
.cardColumn a{
  color: #0d6efd;
  border-color: #0d6efd;
}
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn:hover{
  color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}
</style>
