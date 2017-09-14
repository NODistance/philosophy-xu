<!-- html -->
<template>
  <div class="verification">
    <img src="../../assets/code.png" class="photo">
    <div class="line"></div>
    <input type="text" name="code" placeholder='请输入手机验证码' class='codeInput' v-model='code' @change='codeChangeAction'>
    <div class="line_second"></div>
    <div class="sendCode" @click='sendCodeAction'> {{sendText}} </div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'verification',
  data () {
    return {
      sendText: '发送验证码',
      code: '',
      second: 60,
      selected: true
    }
  },
  methods: {
    codeChangeAction: function () {
      // 用于向父组件传值 param: 1，父组件中用来监听自定义方法名 2，子组件向父组件传递的参数
      this.$emit('codeNumChange', this.code);
    },
    // 发送验证码 点击事件
    sendCodeAction: function () {
      // 控制按钮的点击
      this.$emit('sendAction');
      // 让 control 去 启动计时器 = 根据需求 该段注释代码保留
      // if (this.selected) {
      //   this.start();
      // }
      // this.selected = false;
    },
    // 开始计时
    start: function () {
      // console.log(this.second)
      this.time = this.second;
      this.timer();
    },
    // 结束计时
    stop: function () {
      this.time = 0;
      this.disabled = false;
    },
    // 计时器方法
    timer: function () {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
        this.sendText = this.time + 's后重获取';
      } else {
        this.sendText = '发送验证码';
        this.selected = true;
      }
    }
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.verification {
	height: 3.5rem;
	width: 85%;
	/*background-color: red;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 0.05rem;
  border-color: black;
}
.photo {
  margin-left: 0.7rem;
  height: 1.8rem;
  width: 1.8rem;
}
.line {
  margin-left: 1rem;
  height: 1.8rem;
  width: 0.01rem;
  border:0.01rem dashed lightgray;
}
.codeInput {
  margin-left: 0.5rem;
  height: 80%;
  width: 44%;
  font-size: 4vw;
  border: none;
  outline: medium;
  background-color: transparent;
}
.line_second {
  margin-left: 0.1rem;
  height: 1.8rem;
  width: 0.1rem;
  background-color: lightgray;
  
}
.sendCode {
  width: 30%;
  margin-left: 0.2rem;
  font-size: 4vw;
  color: black;
  text-align: center;
}
</style>
