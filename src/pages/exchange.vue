<!-- html -->
<template>
  <div class="exchange">

    <!--modal-->
    <div class="modalBack" v-if="isShowModal"></div>
    <div class="modal" v-if="isShowModal">
      <div class="modalContent">
        <div class="modalCancel"><img class="cancelImg" src="../assets/cancel.png" @click="modalCancelAction"/></div>
        <div class="propmtContent">您已成功领取贵宾卡券 <p>请前往会员中心 - <a style="text-decoration: underline; color: blue" @click="alinkAction">我的卡券</a> 查看</p></div>
        <div class="modalButton" @click="modallButtonAction">
          <div class="modallButtonContent"><div style="color: white; font-size: 2.6vh">我的卡券</div></div>
        </div>
      </div>
    </div>

    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>
    <div class="currentCoupon"><div style="color: black; font-weight: 900">您的当前积分: </div>10000</div>
    <div style="font-size: 2.2vh; color: black; margin-top: 4vh">点击兑换贵宾卡券</div>
    <tab-container class="tabContainer" v-model="active" swipeable>
      <tab-container-item id="tab-container1">
        <exchange-cell v-for="n in cardsList" key="1" v-on:selectAction="cellSelectAction"></exchange-cell>
      </tab-container-item>
    </tab-container>
  </div>

</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import ExchangeCell from "../components/custom/exchangeCell.vue"
import { TabContainer, TabContainerItem} from 'mint-ui';
export default {
    components: {HeadTitle, ExchangeCell, TabContainer, TabContainerItem},
    name: 'exchange',
  data () {
      return {
          active: 'tab-container1',
          cardsList: ["", "", ""],
          isShowModal: false,
      }
  },
  methods: {

      cellSelectAction: function (param) {
          this.isShowModal = !this.isShowModal;
      },
      // modal 点击事件
      alinkAction: function () {
          this.isShowModal = !this.isShowModal;
          this.$router.push({path: 'cards'});
      },
      modallButtonAction: function () {
          this.isShowModal = !this.isShowModal;
          this.$router.push({path: 'cards'});
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
  .exchange {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/backOne.jpg");
    background-size: 100% 100%;
  }
  .title {
    margin-top: 4vh;
  }
  .currentCoupon {
    margin-top: 3vh;
    display: flex;
    flex-direction: row;
    font-size: 2.5vh;
    color: rgba(111, 166, 249, 1);
  }
  .tabContainer {
    margin-top: 3vh;
    width: 100%;
    height: 68vh;
    overflow-y: auto;
  }

  /* modal */
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
    background-image: url("../assets/backFive.jpg");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modalCancel {
    height: 10vh;
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
  .propmtContent {
    margin-top: 10vh;
    text-align: center;
    font-size: 2.5vh;
    line-height: 2;
    color: black;
  }
  .modalButton {
    margin-top: 9vh;
    width: 88%;
    height: 9vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modallButtonContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
