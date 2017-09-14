<!-- html -->
<template>
  <div class="recordCell">
    <div class="content">
      <div class="title"> {{object.date}} </div>
      <div class="details">{{object.address}}</div>
    </div>
    <div class="content">
      <div class="title"> ¥{{object.price}} </div>
      <div class="details"> 折扣{{object.discount}} </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'recordCell',
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
 .recordCell {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 12vh;
 }
 .content {
   width: 100%;
   height: 5.95vh;
   display: flex;
   flex-direction: row;
   align-items: center;
 }
 .title {
   margin-left: 5%;
   width: 45%;
   font-size: 2.2vh;
   color: black;
 }
 .details {
   width: 45%;
   font-size: 2.2vh;
   color: black;
   text-align: right;
 }
 .line {
   height: 0.1vh;
   width: 90%;
   background-color: rgba(221, 221, 221, 1);
 }

</style>
