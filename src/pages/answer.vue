<!-- html -->
<template>
  <div class="answer">

    <!--modal-->
    <div class="modalBack" v-if="isShowModal"></div>
    <div class="modal" v-if="isShowModal">
      <div class="modalContent">
        <div class="modalCancel"><img class="cancelImg" src="../assets/cancel.png" @click="modalCancelAction"/></div>
        <div class="propmtContent">感谢您的分享！ <p>恭喜获得XX私享积分</p></div>
        <div class="modalButton" @click="modallButtonAction">
          <div class="modallButtonContent"><div style="color: white; font-size: 2.6vh">查看我的积分</div></div>
        </div>
      </div>
    </div>

    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>
    <question-choice class="question" key="question" v-for="item in items" :object="item" :tag="item.questionTag" :selectType="item.type" v-on:choiceAction="answerAction"></question-choice>
    <!--提交-->
    <div class="submit" @click="submitAction">
      <div class="submitContent"><p style="color: white; font-size: 2.5vh">提交获取专属奖励</p></div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import QuestionChoice from "../components/custom/questionChoice.vue";
export default {
    components: {HeadTitle, QuestionChoice},
    name: 'answer',
    data () {
      return {
          isShowModal: false,
          items: [
              {title: "1.您的肌肤特性", data: [{title: "干性"}, {title: "油性"}, {title: "混合性"}], type: "selectTypeSingle", questionTag: "1"},
              {title: "2.您感兴趣的产品", data: [{title: "保湿"}, {title: "亮肤"}, {title: "修护"}, {title: "洗护"}], type: "selectTypeMulti", questionTag: "2"},
              {title: "3.您需要改善的肌肤问题", data: [{title: "细纹干纹"}, {title: "毛孔粗大"}, {title: "肤色暗沉"}, {title: "松弛"}], type: "selectTypeMulti", questionTag: "3"}
          ]
     }
    },
    methods: {
        submitAction: function () {
            this.isShowModal = !this.isShowModal;
            console.log("submitAction")
        },
        answerAction: function (answer) {
            console.log(answer);
        },

        // modal 点击事件
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
        console.log(this.$route.query.user_id);
    }
}
</script>
<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .answer {
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
  .question {
    margin-top: 3vh;
  }
  .submit {
    margin-top: 2vh;
    width: 85%;
    height: 8vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .submitContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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
