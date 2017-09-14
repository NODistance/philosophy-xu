<!-- html -->
<template>
  <div class="record">

    <!--modal-->
    <explain-modal ref="modal" explainModalType="1"></explain-modal>

    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>
    <!--消费总金额-->
    <div class="amount"><div style="font-weight: 900; color: black">您的当前积分：</div>5120</div>
    <!--消费说明-->
    <div class="explain"><p>当您12个月内消费满2000元，或者单笔消费</p>满1500元，您将升级为肌肤哲理高级会员</div>
    <div class="points" @click="explainModalAction">积分说明</div>
    <div class="recordList">
      <div class="recordTitle"><div class="titleContent"><p style="color: black; font-weight: 800">您的购买记录</p></div></div>
      <div class="cellList">
        <record-cell v-for="item in recordList" :key="item.date" :object="item"></record-cell>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import RecordCell from "../components/custom/recordCell.vue"
import ExplainModal from "../components/custom/explainModal.vue"
export default {
    components: {HeadTitle, RecordCell, ExplainModal},
    name: 'record',
  data () {
    return {
        recordList: [
            {date: '2017-6-1', address: '上海太古汇专卖店', price: '250', discount: "-15"},
            {date: '2017-6-1', address: '上海太古汇专卖店', price: '250', discount: "-15"},
            {date: '2017-6-1', address: '上海太古汇专卖店', price: '250', discount: "-15"},
            {date: '2017-6-1', address: '上海太古汇专卖店', price: '250', discount: "-15"},
            {date: '2017-6-1', address: '上海太古汇专卖店', price: '250', discount: "-15"}
        ]
    }
  },
  methods: {
      explainModalAction: function () {
          this.$refs.modal.show();
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
  .record {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/backFive.jpg");
    background-size: 100% 100%;
  }
  .title {
    margin-top: 4vh;
  }
  .amount {
    margin-top: 3vh;
    font-size: 2.5vh;
    color: black;
    display: flex;
    flex-direction: row;
    color: rgba(111, 166, 249, 1);
  }
  .explain {
    margin-top: 3vh;
    width: 100%;
    text-align: center;
    font-size: 2.2vh;
    color: black;
    line-height: 1.5;
  }
  .points {
    margin-top: 5vh;
    color: rgba(111, 166, 249, 1);
    font-size: 2.5vh;
    border-style: solid;
    border-width: 0.08vh;
    border-color: transparent transparent rgba(111, 166, 249, 1) transparent;
  }
  .recordList {
    margin-top: 3vh;
    height: 45vh;
    width: 85%;
    border-style: solid;
    border-width: 0.2vh;
    border-color: rgba(221, 221, 221, 1);
  }
  .recordTitle {
    height: 9vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    opacity: 0.8;
  }
  .titleContent {
    height:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2.8vh;
  }
  .cellList {
    width: 100%;
    height: 36vh;
    background-color: white;
    opacity: 0.8;
    overflow-y: auto;
  }
</style>
