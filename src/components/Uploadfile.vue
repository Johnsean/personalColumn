<template>
  <div class="imgUpload my-24">
    <input class="upload" type="file" @change="uploadImg" accept="image/*">
    <div class="img-card"><img v-if="img" class="photo" :src="img"></div>
    <h3 class="notice">点击上传图片</h3>
  </div>
</template>

<script>
export default {
  props:["img"],
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
        let data = e.target.result
          this.$emit('imgChange',data)
        }
      }
    }
  }
}
</script>

<style lang="">
.my-24{
  margin: 24px 0;
}
.imgUpload{
  position: relative;
  height: 200px;
  background: #eee;
}
input.upload{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 5;
}
.img-card{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
img.photo{
  margin: 0 auto;
  height: 200px;
  background: rgb(218, 218, 218);
}
h3.notice{
  position: relative;
  top:90px;
}
</style>
