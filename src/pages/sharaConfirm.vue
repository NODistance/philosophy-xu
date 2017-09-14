<!-- html -->
<template>
  <div class="sharaConfirm">
    <div class="sharaBack">
      <div class="sharaContent">
        <div class="content">
          <div class="imageAblum">
            <img class="sharaImg" src="../assets/1.jpg"/>
          </div>
          <textarea class="textInput"></textarea>
        </div>
      </div>
      <div class="operation">
        <div class="cancelOpt" @click="cancelAction">
          <div class="optContent">
            <div style="font-size: 2.4vh; color: black">取消</div>
          </div>
        </div>
        <div class="certainOpt" @click="certainAction">
          <div class="optContent">
            <div style="font-size: 2.4vh; color: white">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import wx from 'weixin-js-sdk';
export default {
    components: {HeadTitle},
    name: 'sharaConfirm',
  data () {
    return {
    }
  },
  methods: {
      cancelAction: function () {
          console.log('cancel');
      },
      certainAction: function () {
          console.log('certain');
      },
      bodyScrollEvent: function(e){
          e.preventDefault();
      }
  },
  watch: {
  },
  // 键盘弹出后 防止界面滑动
  created () {
      document.addEventListener('touchmove', this.bodyScrollEvent);
  },
  destroyed () {
      document.removeEventListener('touchmove', this.bodyScrollEvent);
  }

}
</script>
<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sharaConfirm {
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
  .sharaBack {
    height: 45vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sharaContent {
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-width: 0.1vh;
    border-color: transparent transparent rgba(221, 221, 221, 1) transparent;
  }
  .content {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .imageAblum {
    width: 20.7vh;
    height: 20.7vh;
    overflow: hidden;
  }
  .sharaImg {
    width: 100%;
  }
  .textInput {
    margin-left: 2vh;
    height: 20vh;
    width: 30vh;
    border-style: none;
    background-color: rgba(221, 221, 221, 1);
    border-radius: inherit;
    color: black;
    font-size: 2.2vh;
  }
  .operation {
    height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .optContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cancelOpt {
    height: 7vh;
    width: 22vh;
    border-style: solid;
    border-width: 0.1vh;
    border-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .certainOpt {
    margin-left: 8.5vh;
    height: 7vh;
    width: 22vh;
    background-color: black;
    border-style: solid;
    border-width: 0.1vh;
    border-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
