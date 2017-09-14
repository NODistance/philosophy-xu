<!-- html -->
<template>
  <div class="cards">
    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>

    <div class="operation">
      <div v-if="operationOne==false" class="operationButton" @click="operationOneAction"><div class="buttonContent"><div class="buttonTitle">未使用(10)</div></div></div>
      <div v-else="operationOne" class="operationButtonSelect" @click="operationOneAction"><div class="buttonContent"><div class="buttonTitle">未使用(10)</div></div></div>

      <div v-if="operationTwo==false" class="operationButton" @click="operationTwoAction"><div class="buttonContent"><div class="buttonTitle">已使用(1)</div></div></div>
      <div v-else="operationTwo" class="operationButtonSelect" @click="operationTwoAction"><div class="buttonContent"><div class="buttonTitle">已使用(1)</div></div></div>

      <div v-if="operationThree==false" class="operationButton" @click="operationThreeAction"><div class="buttonContent"><div class="buttonTitle">已过期(3)</div></div></div>
      <div v-if="operationThree" class="operationButtonSelect" @click="operationThreeAction"><div class="buttonContent"><div class="buttonTitle">已过期(3)</div></div></div>
    </div>
    <div class="line"></div>
    <!--内容-->
    <tab-container class="tabContainer" v-model="active" swipeable>
      <tab-container-item id="tab-container1">
        <coupon-cell v-for="n in items" key="1"></coupon-cell>
      </tab-container-item>
      <tab-container-item id="tab-container2">
        <coupon-cell v-for="n in items" key="2"></coupon-cell>
      </tab-container-item>
      <tab-container-item id="tab-container3">
        <coupon-cell v-for="n in items" key="3"></coupon-cell>
      </tab-container-item>
    </tab-container>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import CouponCell from "../components/custom/couponCell.vue";
import { TabContainer, TabContainerItem , Cell} from 'mint-ui';
export default {
    components: {HeadTitle, CouponCell, TabContainer, TabContainerItem, Cell},
    name: 'cards',
  data () {
    return {
        operationOne: true,
        operationTwo: false,
        operationThree: false,
        active: 'tab-container1',
        items: ["", "", "", ""]
    }
  },
  methods: {
      operationOneAction: function () {
          if (this.operationOne != true) {
              this.operationOne = !this.operationOne;
              this.operationTwo = false;
              this.operationThree = false;
          }
          this.active = 'tab-container1';
      },
      operationTwoAction: function () {
          if (this.operationTwo != true) {
              this.operationTwo = !this.operationTwo;
              this.operationOne = false;
              this.operationThree = false;
          }
          this.active = 'tab-container2';
      },
      operationThreeAction: function () {
          if (this.operationThree != true) {
              this.operationThree = !this.operationThree;
              this.operationOne = false;
              this.operationTwo = false;
          }
          this.active = 'tab-container3';
      }
  },
  watch: {
      // 监控 当前显示的内容
      active: function (val, oldVal) {
          if (val == "tab-container1" && this.operationOne!=true) {
              this.operationOne = !this.operationOne;
              this.operationTwo = false;
              this.operationThree = false;
          } else if (val == "tab-container2" && this.operationTwo!=true) {
              this.operationTwo = !this.operationTwo;
              this.operationOne = false;
              this.operationThree = false;
          } else if (val == "tab-container3" && this.operationThree!=true) {
              this.operationThree = !this.operationThree;
              this.operationOne = false;
              this.operationTwo = false;
          }
      }
  },
  created () {
  },
}
</script>
<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cards {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/backTwo.jpg");
    background-size: 100% 100%;

  }
  .title {
    margin-top: 4vh;
  }
  .operation {
    margin-top: 3vh;
    width: 80%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .line {
    height: 0.2vh;
    width: 100%;
    background-color: black;
    opacity: 0.2;
  }
  .operationButton {
    height: 6.75vh;
    width: 25vw;
    border-style: solid;
    border-width: 0.25vh;
    border-color: transparent transparent transparent transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: gray;
    font-size: 2.2vh;
  }
  .operationButtonSelect {
    height: 6.75vh;
    width: 25vw;
    border-style: solid;
    border-width: 0.25vh;
    border-color: transparent transparent red transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
    font-size: 2.2vh;
  }
  .buttonContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tabContainer {
    width: 100%;
    margin-top: 2vh;
    height: 70vh;
    overflow-y: auto;
  }
</style>
