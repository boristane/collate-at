<template>
<div class="emergency">
  <Header></Header>
  <Info :ngoUser="ngoUser" ></Info>
  <div class="container">
    <h1 class="title">Are you sure ?</h1>
      <div>
        <button class="u-full-width" @click="logout">DISTRESS</button>
        <button class="u-full-width" @click="logout">LOCK THE DATA</button>

      </div>

  </div>
</div>
</template>

<script>
import Header from './Header.vue';
import Info from './Info.vue';

export default {
  name: 'Emergency',
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
.emergency .container {
  width: 400px;
  margin: 0px auto;
  text-align: center;
}

.emergency button {
  height: 100px;
  font-size: 30px;
}
</style>


