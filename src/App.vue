<template>
  <div id="app">
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  created(){
    // setInterval(()=>{
    //   var date = new Date();
    //   var year = date.getFullYear();
    //   var month = date.getMonth() + 1;
    //   month = month > 9 ? month : '0'+month;
    //   var day = date.getDate();
    //   day = day > 9 ? day : '0'+day;
    //   axios.get(`/api/static//data/${year}${month}${day}1HistoryLottery.json?_=${date.getTime()}`).then(res=>{
    //     console.log(res)
    //   })
    // },3000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
