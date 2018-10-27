<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="login">Login</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="">
      <img class="banner" src="banner.png" alt="banner">
    </div>

    <div class="container">
      <h1 id="title">Your online portal for election results</h1>
    </div>

    <main class="container">
      <div class="stuff">
        <div class="map">
          stuff
        </div>
        <div class="users">
          hey
        </div>
        <div class="stats">
          hey
        </div>
      </div>

      <div class="image">
        <img src="nigeria_flag.jpg" alt="flag">
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {msg: 'lmao'};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
  background-color: #444;
}

.container {
  width: 90%;
  margin: 15px auto;
}

.banner {
  width: 100%;
  margin-top: 15px;
}

#title {
  border-bottom: 1px solid #444;
  text-align: center;
  font-size: 30px;
}

main {
  display: grid;
  grid-template-columns: auto auto;

}
</style>
