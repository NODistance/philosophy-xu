<!-- html -->
<template>
  <div class="questionButton">
        <div class="button">
          <div v-if="isSelect == false" class="choiceButton" @click="buttonAction">
            <div class="buttonContent"><p style="color: black; font-size: 2.1vh">{{object.title}}</p></div>
          </div>
          <div v-else="isSelect == true" class="isChoiceButton" @click="buttonAction">
            <div class="buttonContent"><p style="color: black; font-size: 2.1vh">{{object.title}}</p></div>
          </div>
        </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'questionButton',
  data () {
    return {
        isSelect: false
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
      // 点击事件
      buttonAction: function (event) {
          this.isSelect = ! this.isSelect
          this.$emit('quesstionButton', event);
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
  .questionButton {
  }
  .choiceButton {
    width: 40vw;
    height: 7vh;
    background-color: rgba(221, 221, 221, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-width: 0.1vh;
    border-color: transparent;
  }
  .isChoiceButton {
    width: 40vw;
    height: 7vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-width: 0.1vh;
    border-color: black;
  }
  .buttonContent {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
