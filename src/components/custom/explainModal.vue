<!-- html -->
<template>
  <div class="explainModal" v-if="isShowModal">
    <div class="modalBack" v-if="isShowModal"></div>
    <div class="modal" v-if="isShowModal">
      <div class="modalContent">
        <div class="modalCancel"><img class="cancelImg" src="../../assets/cancel.png" @click="modalCancelAction"/></div>
        <!--<div class="logo"><div class="logoContent"><p style="color: black; font-size: 5vh">philosophy</p></div></div>-->
        <img class="logo" src="../../assets/plogo.png"/>
        <div class="line"></div>
        <div v-if="explainModalType=='1'" style="color: black; margin-top: 2vh; font-size: 2.7vh; font-weight: 900">积分说明</div>
        <div v-if="explainModalType=='2'" style="color: black; margin-top: 2vh; font-size: 2.7vh; font-weight: 900">会员尊享</div>
        <div v-if="explainModalType=='3'" style="color: black; margin-top: 2vh; font-size: 2.7vh; font-weight: 900">会员权益</div>
        <!--type: 1 积分说明-->
        <div class="desc" v-if="explainModalType=='1'">
          <div style="width: 100%; text-align: center; font-weight: 500">philosophy为会员提供尊享礼遇</div>
          <li style="list-style-type: disc; padding-left:1.5vh; margin-top: 2vh">微信完成注册绑定，即成为私享家乐园一员；在线下门店或天猫、京东旗舰店任意消费，即成为哲学家。12个月内累计消费满2000元，或者单笔消费满1500元，即成为高级会员：生活家。</li>
          <li style="list-style-type: disc; padding-left:1.5vh; margin-top: 2vh">在私享家乐园，您将享受生日月首单，获得双倍积分的权益。</li>
          <li style="list-style-type: disc; padding-left:1.5vh; margin-top: 2vh">在您生日当月，可领取9折礼券一张，用于philosophy线下门店，或天猫旗舰店。</li>
          <li style="list-style-type: disc; padding-left:1.5vh; margin-top: 2vh">您的积分可于线下门店消费时，按100分=1元，进行实时抵扣。</li>
          <li style="list-style-type: disc; padding-left:1.5vh; margin-top: 2vh">您还可以优先参与philosophy门店或线上的各种活动，优享活动礼遇。</li>
        </div>
        <!--type: 2 会员尊享-->
        <div class="desc" v-if="explainModalType=='2'">

        </div>
        <!--type: 3 会员权益-->
        <div class="desc" v-if="explainModalType=='3'">

        </div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'explainModal',
  data () {
    return {
        isShowModal: false
    }
  },
  props : {
      // 区分 说明类 modall类型 --  1：积分说明(默认) 2：会员尊享礼遇 3：会员权益
      explainModalType: {
          type: String,
          default: "1"
      }
  },
  methods: {
      show: function () {
          this.isShowModal = !this.isShowModal;
      },
      close: function () {
          this.isShowModal = !this.isShowModal;
      },
      modallButtonAction: function () {
          this.isShowModal = !this.isShowModal;
          this.$router.back();
      },
      modalCancelAction: function () {
          this.isShowModal = !this.isShowModal;
      }
  },
  watch: {
  },
  created () {
  }
}
</script>
<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .explainModal {
  }
  .modalBack {
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: black;
    opacity: 0.6;
  }
  .modal {
    position: absolute;
    z-index: 1001;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  .modalContent {
    position: absolute;
    z-index: 1001;
    background-color: white;
    margin-left: 5%;
    margin-top: 10vh;
    width: 90%;
    height: 78%;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .modalCancel {
    margin-top: 2vh;
    height: 4vh;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .cancelImg {
    height: 3.5vh;
    width: 3.5vh;
    margin-right: 5vw;
  }
  .logo {
    margin-top: 0vh;
    height: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logoContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .line {
    margin-top: 2vh;
    height: 0.15vh;
    width: 13vh;
    background-color: black;
  }
  .desc {
    margin-top: 2vh;
    width: 88%;
    height: 64%;
    overflow-y: scroll;
    font-size: 2.3vh;
    line-height: 1.8;
    color: black;
  }
  /* 隐藏 滚动条 */
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

</style>
