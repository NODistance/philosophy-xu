<!-- html -->
<template>
  <div class="pointsCell">
    <div class="title">{{title}}</div>
    <div class="desc">{{desc}}</div>
    <div class="details">+{{details}} Points</div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'pointsCell',
  data () {
    return {
    }
  },
  props : {
      title: {type: String},
      desc: {type: String},
      details: {type: String}
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
.pointsCell {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 6vh;
  background-color: rgba(239, 239, 239, 1);
}
.title {
  width: 25%;
  margin-left: 5%;
  font-size: 2.2vh;
  color: black;
}
.desc {
  width: 35%;
  font-size: 2.2vh;
  color: black;
}
.details {
  width: 30%;
  font-size: 2.2vh;
  right: 5vw;
  text-align: right;
  color: black;
}
</style>
