<!-- html -->
<template>
  <div class="perfect">
    <div class="background">
      <img class="backimg" src="../assets/backTwo.jpg">
    </div>
    <img src="../assets/plogo.png" class="logo_img">
    <img src="../assets/finish.png" class="finish_photo">
    <div class="text_one"> <strong>您已成功绑定</strong> </div>
    <div class="text_two"> <p>您可以选择<b style="color:red">继续完善我的账户</b></p>以获取更多品牌资讯 </div>
    <certainButton class='perfect_button' contentText='完善我的账户' type='black' v-on:certainAction='perfectAction'></certainButton>
    <certainButton class='later_button' contentText='稍后完善我的账户' type='white' v-on:certainAction='laterAction'></certainButton>
  </div>
</template>

<!-- js -->
<script>
import certainButton from '../components/custom/certainButton'
import wx from 'weixin-js-sdk'
export default {
  name: 'perfect',
  components: {certainButton},
  data () {
    return {
    }
  },
  methods: {
    perfectAction: function () {
      console.log('perfect')
      this.$router.push('Information')
    },
    laterAction: function () {
      // 退出界面
      wx.closeWindow();
    }
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.perfect {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
}
.background {
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  overflow-y: hidden;
  overflow-x: hidden;
}
.backimg {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.logo_img {
  margin-top: 3rem;
  height: 3.05rem;
  width: 11.4rem;
}
.finish_photo {
  margin-top: 1.5rem;
  height: 4rem;
  width: 4rem;
}
.text_one {
  margin-top: 1rem;
  font-size: 1.8rem;
  color: black;
}
.text_two {
  margin-top: 1.5rem;
  /*width: 100%;*/
  font-size: 1rem;
  color: black;
  text-align: center;
  line-height: 1.5;
}
.perfect_button {
  margin-top: 2rem;
}
.later_button {
  margin-top: 1rem;
}
</style>
