<!-- html -->
<template>
  <div class="numDetails">

    <!--modal-->
    <explain-modal ref="modal" explainModalType="1"></explain-modal>

    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>
    <!--消费总金额-->
    <div class="amount"><div style="font-weight: 900">您最近12个月累计消费：</div>¥ 5120</div>
    <!--消费说明-->
    <div class="explain"><p>当您12个月内消费满2000元，或者单笔消费</p>满1500元，您将升级为肌肤哲理高级会员</div>
    <!--总积分-->
    <div class="numTotal"><div style="font-weight: 900">您的当前积分：</div>10000 Points</div>
    <div class="pointsList">
      <div class="listTitle"><div class="titleContent"><p>积分明细</p></div></div>
      <div class="list">
        <points-cell class="cell" v-for="item in pointsList" :key="item.date" :title="item.date" :details="item.data" desc="消费新增积分"></points-cell>
      </div>
      <div class="modalList">
        <div class="modalListContent">
          <div class="modalTap" @click="pointsExplainAction">积分说明</div>
          <div class="modalTap" @click="answerAction">答问卷，赢积分</div>
          <div class="modalTap" @click="couponAction">积分兑换</div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import PointsCell from "../components/custom/pointsCell.vue";
import ExplainModal from "../components/custom/explainModal.vue";
export default {
    components: {HeadTitle, PointsCell, ExplainModal},
    name: 'numDetails',
  data () {
    return {
        pointsList: [
            {date: '2017-6-1', title: '消费新增积分', data: '250'},
            {date: '2017-8-1', title: '消费新增积分', data: '230'},
            {date: '2017-10-1', title: '消费新增积分', data: '280'},
            {date: '2017-10-1', title: '消费新增积分', data: '280'},
            {date: '2017-11-1', title: '消费新增积分', data: '280'},
            {date: '2017-12-1', title: '消费新增积分', data: '280'},
        ]
    }
  },
  methods: {
      pointsExplainAction: function () {
          console.log("积分说明");
          this.$refs.modal.show();
      },
      answerAction: function () {
          console.log("答问卷");
          this.$router.push({path: 'answer', query:{user_id: 1}});
      },
      couponAction: function () {
          console.log("积分兑换")
          this.$router.push({path: 'exchange', query:{user_id: 1}});
      }
  },
  watch: {
  },
  created () {
        console.log(this.$route.query.user_id);
  }
}
</script>
<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.numDetails {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/backOne.jpg");
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
}
.explain {
  margin-top: 3vh;
  width: 100%;
  text-align: center;
  font-size: 2.2vh;
  color: black;
  line-height: 1.5;
}
.numTotal {
  margin-top: 5vh;
  font-size: 2.5vh;
  color: black;
  display: flex;
  flex-direction: row;
}
.pointsList {
  margin-top: 3vh;
  height: 40vh;
  width: 90%;
  border-style: solid;
  border-width: 0.2vh;
  border-color: rgba(221, 221, 221, 1);
}
.listTitle {
  height: 6vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleContent {
  height:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2.2vh;
  color: black;
}
.list {
  width: 100%;
  height: 25.5vh;
  background-color: white;
  overflow-y: auto;
}
.cell {
  margin-bottom: 0.5vh;
}
.modalList {
  width: 100%;
  height: 8.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modalListContent {
  width: 90%;
  height: 2.5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4.5vh;
}
.modalTap {
  height: 100%;
  color: blue;
  font-size: 2.2vh;
  border-style: solid;
  border-width: 0.08vh;
  border-color: transparent transparent blue transparent;
}
</style>
