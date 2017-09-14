<!-- html -->
<template>
  <div class="index">
    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>
    <div class="headTap">
      <div class="plogo"><div class="plogoContent"><p style="color: black; font-size: 5vh">philosophy</p></div></div>
      <div class="headTapTitle">肌肤哲理</div>
      <div class="headTapNum">0123456789012</div>
    </div>
    <!--说明-->
    <div class="explain">
      欢迎来到philosophy哲理之家
      <p></p>
      <br/>我们真挚邀请您完善会员资料，您将获得
    </div>
    <!--vipGift-->
    <div class="vipGift" @click="vipGiftAction">会员尊享礼遇</div>
    <!--vipRights-->
    <div class="vipRights">
      点击查看 <div class="rights" @click="vipRightsAction">会员权益</div>
    </div>
    <!--功能-->
    <div class="operationTap">
      <div class="operationContent">
        <!--完善我的信息-->
        <div class="tapOne" @click="infoAction">
          <div class="tapContent">
            <div class="content">
              <img class="tagImg" src="../assets/info.png"/>
              <div class="tagTitle">完善我的信息</div>
            </div>
          </div>
        </div>
        <!--我的积分-->
        <div class="tapTwo" @click="coinAction">
          <div class="tapContent">
            <div class="content">
              <img class="tagImg" src="../assets/coin.png"/>
              <div class="tagTitle">我的积分</div>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="operationContent">
        <!--我的礼券-->
        <div class="tapOne" @click="couponAction">
          <div class="tapContent">
            <div class="content">
              <img class="tagImg" src="../assets/coupon.png"/>
              <div class="tagTitle">我的礼券</div>
            </div>
          </div>
        </div>
        <!--购买记录-->
        <div class="tapTwo" @click="recordAction">
          <div class="tapContent">
            <div class="content">
              <img class="tagImg" src="../assets/record.png"/>
              <div class="tagTitle">购买记录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
export default {
    components: {HeadTitle},
    name: 'index',
  data () {
    return {
    }
  },
  methods: {
      vipGiftAction: function () {
          console.log("vipGift")
          this.$router.push({path: 'shara', query:{user_id: 1}});
      },
      vipRightsAction: function () {
          console.log("vipRights")
      },
      // operationTap 方法
      infoAction: function () {
          this.$router.push({path: 'Register', query:{user_id: 1}});
      },
      coinAction: function () {
          this.$router.push({path: 'numDetails', query:{user_id: 1}});
      },
      couponAction: function () {
          this.$router.push({path: 'cards', query:{user_id: 1}});
      },
      recordAction: function () {
          this.$router.push({path: 'record', query:{user_id: 1}});
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
.index {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/backFive.jpg");
  background-size: 100% 100%;
}
.title {
  margin-top: 4vh;
}
.headTap {
  margin-top: 2.5vh;
  height: 25vh;
  width: 70%;
  background-color: white;
  border-style: solid;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.plogo {
  margin-top: 3vh;
  width: 30vw;
  height: 5.1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*background-color: red;*/
}
.plogoContent {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headTapTitle {
  margin-top: 2.5vh;
  font-size: 3vh;
  color: black;
}
.headTapNum {
  margin-top: 5.5vh;
  font-size: 2.2vh;
  color: black;
}
.explain {
  margin-top: 3vh;
  width: 100%;
  text-align: center;
  font-size: 2.3vh;
  color: black;
}
.vipGift {
  margin-top: 3vh;
  color: rgba(111, 166, 249, 1);
  font-size: 2.3vh;
  border-style: solid;
  border-width: 0.08vh;
  border-color: transparent transparent rgba(111, 166, 249, 1) transparent;
}
.vipRights {
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  font-size: 2.3vh;
  color: black;
}
.rights {
  color: rgba(111, 166, 249, 1);
  font-size: 2.3vh;
  border-style: solid;
  border-width: 0.08vh;
  border-color: transparent transparent rgba(111, 166, 249, 1) transparent;
}
.operationTap {
  margin-top: 2.5vh;
  height: 30vh;
  width: 90%;
  background-color: black;
  opacity: 0.5;
  border-radius: 1vh;
}
.operationContent {
  width: 100%;
  height: 14.95vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.tapOne {
  width: 50%;
  height: 100%;
  border-style: solid;
  border-width: 0.05vh;
  border-color: transparent white transparent transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tapTwo {
  width: 50%;
  height: 100%;
  border-style: solid;
  border-width: 0.05vh;
  border-color: white transparent transparent transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tapContent {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tagImg {
  height: 5vh;
  width: 5vh;
}
.tagTitle {
  margin-top: 1.5vh;
  color: white;
  font-size: 2.2vh;
}
.line {
  width: 100%;
  height: 0.1vh;
  background-color: white;
}
</style>
