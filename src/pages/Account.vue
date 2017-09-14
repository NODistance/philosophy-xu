<!-- html -->
<template>
  <div class="account">
    <div class="background">
      <img class="backimg" src="../assets/backFive.jpg">
    </div>
    <img src="../assets/cancel.png" class="cencel_img" @click="closeAction">
    <img src="../assets/plogo.png" class="logo_img">
    <div class="title_line"></div>
    <div class="title"> <strong>我的账户</strong> </div>
    <singleInfo title='收货人姓名:' :content='userInfo.name' class='name'></singleInfo>
    <singleInfo title='手机号码:' :content='phoneNum' class='phone'></singleInfo>
    <singleInfo title='邮箱:' :content='userInfo.email' class='mail'></singleInfo>
    <singleInfo title='生日:' :content='userInfo.birth_date' class='birthday'></singleInfo>
    <singleInfo title='详细地址:' :content='userInfo.address' class='address'></singleInfo>
    <certainButton contentText='完善我的账户' type='black' class='perfect' v-on:certainAction='perfectAction'></certainButton>
  </div>
</template>

<!-- js -->
<script>
import certainButton from '../components/custom/certainButton'
import singleInfo from '../components/custom/SingleInfo'
import axios from 'axios'
import wx from 'weixin-js-sdk'
export default {
  name: 'account',
  components: {certainButton, singleInfo},
  data () {
    return {
      phoneNum: sessionStorage.phoneNum,
      userInfo: {}
    }
  },
  methods: {
    perfectAction: function () {
      // 跳转到 信息填写界面
      this.$router.back()
    },
    networkOfAccount: function () {
      var that = this;
      axios.get('/api/member/get.json', {
      })
      .then(function (response) {
        console.log(response);
        if (response.data.resultCode == '1') {
          that.userInfo = response.data.data.base;
          console.log(that.userInfo);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    closeAction: function() {
      // 退出界面
      wx.closeWindow();
    } 
  },
  created () {
    this.networkOfAccount();
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.account {
  width: 100%;
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
  overflow-x: hidden;
  overflow-y: hidden;
}
.backimg {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.cencel_img {
  margin-top: 1rem;
  margin-left: 80vw;
  width: 1.5rem;
  height: 1.5rem;
}
.logo_img {
  margin-top: 3rem;
  height: 3.05rem;
  width: 11.4rem;
}
.title_line {
  margin-top: 1rem;
  height: 0.1rem;
  width: 5rem;
  background-color: black;
}
.title {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: black;
}
.name {
  margin-top: 1.5rem;
}
.phone {
  margin-top: 0.8rem;
}
.mail {
  margin-top: 0.8rem;
}
.birthday {
  margin-top: 0.8rem;
}
.address {
  margin-top: 0.8rem;
}
.perfect {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}
@media only screen and (min-device-width:320px) and (max-device-width: 355px){
  .background {
    height: 110%;
  }
}
</style>
