<!-- html -->
<template>
  <div class="shara">
    <!--标题-->
    <head-title class="title" title="私享家 乐园"></head-title>
    <!--分享 展示-->
    <tab-container class="tabContainer" v-model="active" swipeable>
      <tab-container-item id="tab-container1">
        <div class="list" v-for="(items, indexData) in sharaData" key="shara">
          <div class="dataTitle">今天</div>
          <div class="cellContent">
            <!--cell-->
            <shara-cell v-bind:class="[(index + 1)%2 == 0 ? 'cellUP':'cell']" v-for="(item, index) in items" key="item" v-on:likeTapAction="likeAction"></shara-cell>
          </div>
        </div>
        <div class="promptLine"></div>
        <div class="prompt">到底啦</div>
      </tab-container-item>
    </tab-container>
    <!--分享按钮-->
    <div class="sharaButton" @click="sharaAction">
      <div class="buttonContent">
        <img class="sharaImg" src="../assets/shara.png"/>
        <div style="color: white; margin-left: 2vh; font-size: 2.5vh; font-weight: 900">分享我的私货</div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import HeadTitle from "../components/custom/headTitle.vue";
import SharaCell from "../components/custom/sharaCell.vue"
import { TabContainer, TabContainerItem} from 'mint-ui';
import wx from 'weixin-js-sdk';
export default {
  components: {HeadTitle, SharaCell, TabContainer, TabContainerItem},
  name: 'shara',
  data () {
    return {
        likeSelect: false,
        active: 'tab-container1',
        sharaData: [["", "", "", ""], ["", "", "", "", "", ""], ["", "", ""]]
    }
  },
  methods: {
      // 点赞
      likeAction: function (param) {
        console.log(param);
      },
      // 分享
      sharaAction: function () {
          this.$router.push({path: 'sharaConfirm', query:{user_id: 1}})
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
  .shara {
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
  .tabContainer {
    margin-top: 3vh;
    width: 95%;
    height: 77vh;
    overflow-y: scroll;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dataTitle {
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 2.2vh;
    color: black;
  }
  .cellContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .cell {
    margin-bottom: 4vh;
    height: 35vh;
    width: 46%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-width: 0.05vh;
    border-color: lightgrey;
  }
  .cellUP {
    margin-top: 4vh;
    margin-bottom: 4vh;
    height: 35vh;
    width: 46%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-width: 0.05vh;
    border-color: lightgrey;
  }
  .promptLine {
    height: 0.1vh;
    width: 25%;
    background-color: black;
    margin-left: 37.5%;
    margin-bottom: 2vh;
  }
  .prompt {
    width: 30%;
    margin-left: 35%;
    margin-bottom: 2vh;
    color: black;
    font-size: 1.8vh;
    text-align: center;
  }


  .sharaButton {
    width: 100%;
    height: 8vh;
    position: fixed;
    bottom: 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttonContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sharaImg {
    width: 2.5vh;
    height: 2.5vh;
  }
</style>
