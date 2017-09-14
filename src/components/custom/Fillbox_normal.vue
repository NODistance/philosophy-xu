<!-- html -->
<template>
  <!-- type is black -->
  <div class="fillbox_normal">
    <!-- 可编辑 -->
    <div class="isEdit_view" v-if='isEdit=="true"'>
      <div class="title_view">
        <div class="title"> {{contentText}} </div>
      </div>
      <div class="content_view">
        <input type="text" name="fill" class="input_view" v-model='inputValue' @change='inputChangeAction' :placeholder="placeholderString">
      </div>
    </div>
    <!-- 不可编辑 -->
    <div class="isEdit_view" v-else>
      <div class="title_view">
        <div class="title"> {{contentText}} </div>
      </div>
      <div class="content_view">
        <div class="fill_view">{{fillValue}}</div>
      </div>
    </div>

  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'fillbox_normal',
  props: {
    contentText: '',
    placeholderString: '',
    fillValue: '',
    // 是否可编辑
    isEdit: true
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    inputChangeAction: function () {
      this.$emit('normalboxInput', this.inputValue)
    }
  },
  created () {
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fillbox_normal {
  height: 5rem;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.isEdit_view {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title_view {
  height: 1.8rem;
  width: 100%;
  font-size: 0.9rem;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content_view {
  width: 100%;
  height: 3.2rem;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.input_view {
  margin-left: 1rem;
  height: 80%;
  width: 90%;
  font-size: 0.9rem;
  border: none;
  outline: medium;
  background-color: transparent;
}
/* WebKit browsers */ 
input::-webkit-input-placeholder {
color: gray; 
} 
/* Mozilla Firefox 4 to 18 */ 
input:-moz-placeholder {
color: gray; 
} 
/* Mozilla Firefox 19+ */ 
input::-moz-placeholder {
color: gray; 
} 
/* Internet Explorer 10+ */ 
input:-ms-input-placeholder {
color: gray; 
} 

/* 不可编辑 */
.fill_view {
  margin-left: 1rem;
  font-size: 0.9rem;
  color: gray;
}
</style>
