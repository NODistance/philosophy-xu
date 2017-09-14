<!-- html -->
<template>
  <div class="register">
    <div class="background">
      <img class="backimg" src="../assets/backOne.jpg">
    </div>
    <img src="../assets/plogo.png" class="logo_img">
    <div class="title_line"></div>
    <div class="title"> <strong>会员绑定</strong> </div>
    <!-- v-on：用来监听子组件的方法 -->
    <phoneNum class='phoneNum' v-on:phoneNumChange='phoneNumAction'></phoneNum>
    <!-- 验证码 -->
    <verification class='verification' ref='verification' v-on:codeNumChange='codeNumAction' v-on:sendAction='sendVerificationCode'></verification>
    <!-- 隐私条款 -->
    <div class="privacyClause">
      <img src="../assets/certain.png" class="agree_photo" @click='agreeAction' v-if='isAgree'>
      <img src="../assets/no.png" class="agree_photo" @click='agreeAction' v-else>
      <!-- <p> 同意 </p> -->
      <div class="privacyText" @click='showPrivacyAction'> 服务条款与隐私政策 </div>
    </div>
    <!-- 注册按钮 -->
    <certainButton class='certainButton' contentText='注册绑定' type='black' v-on:certainAction='registerAction'></certainButton>
    <!-- modal box -->
    <modalBox v-if='isShowModal' title='会员绑定' html='' v-on:cancelAction='cancelShowModalAction'></modalBox>
  </div>
</template>

<!-- js -->
<script>
// 引入自定义控件
import phoneNum from '../components/custom/PhoneNum'
import verification from '../components/custom/VerificationCode'
import certainButton from '../components/custom/certainButton'
import modalBox from '../components/custom/modalBox'
// 引入axios
import axios from 'axios'
export default {
  name: 'register',
  // 注册控件
  components: {phoneNum, verification, certainButton, modalBox},
  data () {
    return {
      isAgree: false,
      isShowModal: false,
      phoneNum: '',
      verifCode: ''
    }
  },
  methods: {
    // 输入手机号
    phoneNumAction: function (inputValue) {
      this.phoneNum = inputValue;
      this.checkPhoneNume(inputValue);
    },
    // 输入验证码
    codeNumAction: function (code) {
      this.verifCode = code;
    },
    // 发送验证码
    sendVerificationCode: function () {
      // 发送验证码 之前首先判断手机号是否填写 & 输入是否正确
      if (this.phoneNum.length == 0) {
        this.$toast('请输入您的手机号');
        return;
      }
      if (this.checkPhoneNume(this.phoneNum) == false) {
        return;
      }
      if (this.$refs.verification.selected) {
        // 启动计时器 同时将点击控制置为false，防止再次点击
        this.$refs.verification.start();
        this.$refs.verification.selected = false;
        // 调用网路请求 发送验证码
        this.networkOfSendCode(this.phoneNum);
      }

    },
    agreeAction: function () {
      this.isAgree = !this.isAgree;
    },
    // 隐私条款 modal
    showPrivacyAction: function () {
      this.isShowModal = !this.isShowModal;
    },
    cancelShowModalAction: function () {
      this.isShowModal = !this.isShowModal;
    },
    // 注册事件
    registerAction: function () {
      // 用户同意服务条款
      if (this.isAgree) {
        // 取保手机验证码 输入正确 - 防止toast循环弹出
        if (this.checkPhoneNume(this.phoneNum)) {
          this.checkUserFill();
        }
      } else {
        // 提示用户同意服务条款
        this.$toast('请您同意服务条款');
      }
    },
    // 判断用户输入
    checkUserFill: function () {
      if (this.phoneNum.length == 0) {
        this.$toast('请输入您的手机号');
        return;
      } else if (this.verifCode.length == 0) {
        this.$toast('请输入手机验证码');
      } else {
        // 同时将手机号码 写入本地
        sessionStorage.phoneNum = this.phoneNum;
        // 网络请求 注册用户
        this.networkOfRegister(this.phoneNum, this.verifCode);
        // this.$router.push('Perfect');
      }
    },
    // 手机号码正则判断
    checkPhoneNume: function (phoneNum) {
      var filter = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
      if((filter.test(phoneNum)) == false || phoneNum.length < 11){ 
        this.$toast('您输入的手机号错误');
        return false; 
      } else {
        return true;
      }
    },
    // 网络请求 - 发送验证码
    networkOfSendCode: function(phoneNum) {
      axios.post('/api/member/send-sms.json', {
        mobile: phoneNum
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    // 网络请求 - 注册用户
    networkOfRegister: function (phoneNum, code) {
      console.log(code);
      var that = this;
      axios.post('/api/member/bind.json', {
          'mobile': phoneNum,
          'code': code,
      })
      .then (function (response) {
        console.log(response);
        if (response.data.resultCode == '1') {
          that.$router.push('Perfect');
        } else {
          that.$toast('注册失败');
        }
      })
      .catch (function (error) {
        console.log(error);
      })
    }
  },
  // 生命钩子
  created () {
//    this.$toast(process.env.API_ROOT);
    console.log(process.env);
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /*height: 80rem;*/
  overflow-x: hidden;
  background-color: transparent;
  /*background: url(../assets/backOne.jpg); */
}
.background {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  /*width: 100%;*/
  /*height: 100%;*/
  z-index: -1;
  /*background-color: red;*/
  overflow-y: hidden;
  overflow-x: hidden;
   background: url(../assets/backOne.jpg); 
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
.phoneNum {
  margin-top: 2rem;
}
.verification {
  margin-top: 1.5rem;
}
.certainButton {
  margin-top: 1.5rem;
}
/* 隐私条款 */
.privacyClause {
  margin-top: 1rem;
  height: 2rem;
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.agree_photo {
  height: 1rem;
  width: 1rem;
}
p {
  margin-left: 1rem;
  font-size: 0.9rem;
}
.privacyText {
  margin-left: 0.1rem;
  font-size: 0.9rem;
  border-style: solid;
  border-width: 0.08rem;
  color: rgba(111, 166, 249, 1);
  border-color: transparent transparent rgba(111, 166, 249, 1) transparent;
}
</style>
