<!-- html -->
<template>
  <div class="questionChoice">
    <div class="container">
      <!--题目-->
      <div class="title">{{object.title}}</div>
      <!--选项-->
      <div class="content">
        <question-button class="button" v-for="item in object.data" key="button" :ref="item.title" :object="item" v-on:quesstionButton="buttonAction"></question-button>
      </div>
    </div>
  </div>
</template>

<!-- js -->
<script>
import QuestionButton from './questionButton.vue'
import index from "../../router/index";
export default {
  components: {QuestionButton},
  name: 'questionChoice',
  data () {
    return {
        // 用户选择的答案
        answer: {}
    }
  },
  props : {
      object: {
          type: Object,
          default: function () {
              return {}
          }
      },
      selectType: '', // default:selectTypeMulti type:1.selectTypeMulti-多选 2.selectTypeSingle-单选
      tag: '' // 题目标签，用来区分题号
  },
  methods: {
      buttonAction: function (event) {
          console.log(this.tag);
          var text = this.trimRight(event.currentTarget.outerText);
          // 单选
          if (this.selectType == "selectTypeSingle") {
              for (var index in this.object.data) {
                  var item = this.object.data[index];
                  if (text != item.title) {
                      this.$refs[item.title][0].isSelect = false;
                  }
              }
          }
          var answer = this.handleSelectAnswer(this.tag);
          this.$emit("choiceAction", answer);
      },
      // 处理
      handleSelectAnswer: function (tag) {
          let arrays = [];
          for (index in this.object.data) {
              var item = this.object.data[index];
              if (this.$refs[item.title][0].isSelect) {
                  arrays.push(item.title);
              }
          }
          this.answer[tag] = arrays;
          return this.answer;
      },
      // 去掉文字后面的字符串
      trimRight: function(s) {
        if(s == null) return "";
        var whitespace = new String(" \t\n\r");
        var str = new String(s);
        if (whitespace.indexOf(str.charAt(str.length-1)) != -1){
          var i = str.length - 1;
          while (i >= 0 && whitespace.indexOf(str.charAt(i)) != -1){
            i--;
          }
          str = str.substring(0, i+1);
        }
    return str;
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
  .questionChoice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    width: 85%;
  }
  .title {
    font-size: 2.3vh;
    color: black;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .button {
    margin-top: 1.5vh;
  }
</style>
