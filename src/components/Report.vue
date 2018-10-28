<template>
<div class="report">
  <Header></Header>
  <Info :ngoUser="ngoUser" ></Info>
  <div class="container">
    <h1 class="title">POLL STATION CONDITIONS</h1>
      <div>
        <form>
          <div class="row">
            <div class="u-full-width">
              <label for="">SAFETY</label>
              <select class="u-full-width">
                <option value="Option 1">Poll watchers feeling safe</option>
                <option value="Option 1">Poll watchers not feeling safe</option>
              </select>
              <label for="">TRANSPARENCY</label>
              <select class="u-full-width">
                <option value="Option 1">Less than 10 minor issues recorded</option>
                <option value="Option 2">More than 10 minor issues recorded</option>
                <option value="Option 3">Less than 10 major issues recorded</option>
                <option value="Option 4">More than 10 major issues recorded</option>
              </select>
              <label for="">TECHNOLOGY</label>
              <select class="u-full-width">
                <option value="Option 1">PVS reader issues</option>
                <option value="Option 2">PVS card issues</option>
              </select>
              <label for="">ORGANISATION</label>
              <select class="u-full-width">
                <option value="Option 1">Excellent organisation</option>
                <option value="Option 2">Good organisation</option>
                <option value="Option 3">OK organisation</option>
                <option value="Option 4">Bad organisation</option>
                <option value="Option 5">Terrible orgranisation</option>
              </select>
            </div>
          </div>
        </form>
        <button class="u-full-width" @click="home">Submit</button>
      </div>

  </div>
</div>
</template>

<script>
import Header from './Header.vue';
import Info from './Info.vue';

export default {
  name: 'Report',
  components: {
    Header,
    Info,
  },
  props: [
    'ngoUser',
  ],
  methods: {
    home () {
      this.$router.push('home');
    },
  }
}
</script>

<style>
.report .container {
  width: 400px;
  margin: 0px auto;
  text-align: center;
  font-size: 30px;
}

.report select {
  height: 70px;
  font-size: 30px;
}

.report button {
  height: 100px;
  font-size: 30px;
}

.report .row label {
  text-align: left;
}

.candidate {
  font-size: 50px;
  color: white;
  padding: 0px;
}
</style>


