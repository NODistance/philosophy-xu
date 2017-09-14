<!-- html -->
<template>
  <div class="sharaCell">
    <div class="imageContent">
      <img class="sharaTagImg" src="../../assets/1.jpg"/>
    </div>

    <!--我发布的标签-->
    <div class="myTag" v-if="isMine">
      <div class="tagContent">
        <img style="width: 2.8vh; height: 2.8vh;" src="../../assets/myTag.png"/>
        <p style="color: white; font-size: 2.2vh; margin-left: 1vh">我发布的</p>
      </div>
    </div>

    <!--评论-->
    <div class="comment">超级喜欢，超级好用，这真是给对方,这真是给对方 这真是给</div>
    <!--脚部-->
    <div class="cellFoot">
      <div class="sharaDate"style="font-size: 1.8vh; color: grey">刚刚</div>
      <div class="like" v-if="likeSelect==false" @click="likeAction">
        <img src="../../assets/unlike.png" style="height: 2.5vh; width: 2.5vh">
        <div class="likeNum" style="margin-left: 0.5vh; color: gray; font-size: 1.8vh;">12</div>
      </div>
      <div class="like" v-if="likeSelect==true" @click="likeAction">
        <img src="../../assets/like.png" style="height: 2.5vh; width: 2.5vh">
        <div class="likeNum" style="margin-left: 0.5vh; color: red; font-size: 1.8vh;">12</div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'sharaCell',
  data () {
    return {
        likeSelect: false
    }
  },
  props : {
      // 用来标记 我发布的，默认：否
      isMine: {
          type: Boolean,
          default: false
      }
  },
  methods: {
      likeAction: function () {
          this.likeSelect = !this.likeSelect;
          this.$emit('likeTapAction', "haha");
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
  .sharaCell {
  }
  .myTag {
    margin-top: -4vh;
    position: relative;
    width: 95%;
    height: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    opacity: 0.6;
  }
  .tagContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .imageContent {
    margin-top: 0.5vh;
    width: 95%;
    height: 20vh;
    overflow: hidden;
  }
  .sharaTagImg {
    width: 100%;
  }
  .comment {
    margin-top: 2vh;
    width: 90%;
    height:6vh;
    font-size: 2vh;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.6;
  }
  .cellFoot {
    margin-top: 2vh;
    height: 4vh;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .like {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
