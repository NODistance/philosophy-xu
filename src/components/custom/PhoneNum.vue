<!-- html -->
<template>
  <div class="phoneNum">
    <img src="../../assets/phone.png" class="photo">
    <div class="line"></div>
    <input type="text" name="phone" class="phoneInput" placeholder='请输入手机号' v-model='inputValue' @change='inputChangeAction'>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'phoneNum',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    inputChangeAction: function () {
      // 用于向父组件传值 param: 1，父组件中用来监听自定义方法名 2，子组件向父组件传递的参数
      this.$emit('phoneNumChange', this.inputValue)
    }
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phoneNum {
	height: 3.5rem;
	width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
}
.photo {
  margin-left: 0.7rem;
  height:1.8rem;
  width: 1.8rem;
}
.line {
  margin-left: 1rem;
  height: 1.8rem;
  width: 0.01rem;
  border:0.01rem dashed lightgray;
}
.phoneInput {
  margin-left: 0.5rem;
  height: 80%;
  width: 70%;
  font-size: 4vw;
  border: none;
  outline:medium;
  background-color: transparent;
}
</style>
