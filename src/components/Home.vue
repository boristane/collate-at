<template>
<div class="home">
  <Header></Header>
  <Info :ngoUser="ngoUser" ></Info>
  <div class="container">
    <h1 class="title">Home</h1>
      <div>
        <button class="u-full-width" @click="vote">ADD VOTE</button>
        <button class="u-full-width" @click="report">REPORT</button>
        <button class="u-full-width" @click="emergency">EMERGENCY</button>
        <button class="u-full-width" @click="logout">LOG OUT</button>

      </div>

  </div>
</div>
</template>

<script>
import Header from './Header.vue';
import Info from './Info.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Info,
  },
  props: [
    'ngoUser',
  ],
  methods: {
    vote () {
      // eslint-disable-next-line
      console.log('voting');
      this.$router.push('vote');
    },
    report () {
      // eslint-disable-next-line
      console.log('report');
    },
    emergency () {
      // eslint-disable-next-line
      console.log('emergency');
    },
    logout () {
      this.$router.push('login');
    },
  }
}
</script>

<style>
.home .container {
  width: 400px;
  margin: 0px auto;
  text-align: center;
}

.home button {
  height: 100px;
  font-size: 30px;
}
</style>


