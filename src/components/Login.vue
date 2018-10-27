<template>
<div>
  <Header></Header>
  <div class="container">
    <h1 class="title">Log In</h1>
    <form action="">
      <div>
        <input type="text" placeholder="Username" name="uname" required class="u-full-width">

        <input type="password" placeholder="Password" name="psw" required class="u-full-width">
            
        <button type="submit" class="u-full-width" @click.prevent="login">Login</button>
      </div>

      <div>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'Login',
  components: {
    Header,
  },
  methods: {
    login () {
      this.$router.push('home');
    }
  }
}
</script>

<style>
.container {
  width: 400px;
  margin: 100px auto;
  text-align: center;
}

.title {
  text-align: center;
}
</style>


