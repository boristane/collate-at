<template>
<div>
  <Header></Header>
  <div class="container">
    <h1 class="title" style="text-align: center">Sign Up</h1>
    <form action="">
      <div>
        <input type="text" placeholder="Full Name" name="uname" required class="u-full-width">

        <input type="email" placeholder="E-Mail" name="email" required class="u-full-width">

        <input type="text" placeholder="ID Number" name="id" required class="u-full-width">
        <div class="row">
          <div class="six columns">
            <label for="exampleEmailInput">State</label>
            <select class="u-full-width" id="state">
              <option v-for="state in states" :value="state" :key="state">{{ state }}</option>
            </select>
          </div>
          <div class="six columns">
            <label for="exampleRecipientInput">LGA</label>
            <select class="u-full-width" id="lga">
              <option v-for="lga in lgas" :value="lga" :key="lga">{{ lga }}</option>
            </select>
          </div>
        </div>
            
        <button type="submit" class="u-full-width">Sign Up</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'Signup',
  components: {
    Header,
  },
  data () {
    return {
      states: ['Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Enugu',
        'Edo',
        'Ekiti',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
      ],
      lgas: ['Bende', 'Ohafia', 'Demse', 'Fufore', 'Abat', 'Eket', 'Ihala'],
    }
  }
}
</script>

<style>
.container {
  width: 400px;
  margin: 100px auto;
  text-align: left;
}
</style>


