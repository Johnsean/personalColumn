<template>
  <div v-if="!isLastPage">
    <a class="bbtn" @click.prevent="isClick">加载更多...</a>
  </div>
</template>

<script>
export default {
  props:{
    pageSize: {
      default: 6
    },
    total: 0
  },
  data(){
    return {
      currentPage: 1,
    }
  },
  computed:{
    isLastPage(){
      // 是否是最后一页
      return Math.ceil(this.total / this.pageSize) < this.currentPage + 1
    }
  },
  methods:{
    //点击判断 不是最后一页就加载
    isClick(){
      if(!this.isLastPage){
        this.currentPage++
        this.$emit('isclick',this.currentPage)
      }
    }
  }
}
</script>

<style>
/* .btn.outline{
  color: #0d6efd;
  border-color: #0d6efd;
} */
</style>
