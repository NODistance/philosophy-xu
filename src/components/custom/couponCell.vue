<!-- html -->
<template>
  <div class="couponCell">
    <div class="container">
      <div class="marker"></div>
      <div class="background">
        <div class="couponGround">
          <div class="couponTitle"><div style="display: flex; flex-direction: column; align-items: center; width: 100%"><div class="title">私享券</div></div></div>
          <div class="couponContent">
            <div class="couponDesc">
              <div style="color: white; margin-top: 3vh; margin-left: 2vh; font-size: 3vh">¥</div>
              <div class="price">20</div>
              <div class="explain"><p style="color: white; font-size: 2vh">单笔满400元</p><p style="color: white; font-size: 2vh">限上海太古汇店使用</p></div>
            </div>
            <div class="expiry"><div class="expiryContent"><div style="color: white; font-size: 2.3vh">领取后三个月内有效</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'couponCell',
  data () {
    return {
    }
  },
  props : {
      object: {
          type: Object,
          default: function () {
              return {}
          }
      }
  },
  methods: {
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
  .couponCell {
  }
  .container {
    height: 26vh;
    width: 100%;
    /*background-color: white;*/
  }
  .marker {
    margin-left: 7.5%;
    position: absolute;
    margin-top: 1vh;
    height: 24vh;
    width: 85%;
    background-color: black;
    opacity: 0.1;
  }
  .background {
    margin-left: 7.5%;
    height: 100%;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .couponGround {
    margin-top: 5vh;
    height: 16vh;
    width: 85%;
    background-image: url("../../assets/cardcoupon.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .couponTitle {
    height: 100%;
    width: 18%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .title {
    width: 4vh;
    font-size: 2.8vh;
    color: white;
    text-align: center;
    line-height: 1.2;
    font-weight: 500;
  }
  .couponContent {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .couponDesc {
    width: 100%;
    height: 71%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .price {
    margin-left: 0.5vh;
    text-align: center;
    font-size: 7.5vh;
    color: white;
  }
  .explain {
    height: 80%;
    width: 65%;
    line-height: 1.3;
  }
  .expiry {
    width: 100%;
    height: 29%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .expiryContent {
    height:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
