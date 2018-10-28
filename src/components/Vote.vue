<template>
<div class="vote">
  <Header></Header>
  <Info :ngoUser="ngoUser" ></Info>
  <div class="container">
    <h1 class="title">ADD A VOTE</h1>
      <div>
        <form>
          <label class="containerrr"><div class="u-full-width candidate" style="background-color: red">Ana</div>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="containerrr"><div class="u-full-width candidate" style="background-color: blue">Valerie</div>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="containerrr"><div class="u-full-width candidate" style="background-color: green">Akin</div>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="containerrr"><div class="u-full-width candidate" style="background-color: yellow">Boris</div>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="containerrr"><div class="u-full-width candidate" style="background-color: gold">Daniel</div>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <label class="containerrr"><div class="u-full-width candidate" style="background-color: magenta">Marc</div>
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <div class="row">
            <div class="u-full-width">
              <label for="">AGE GROUP</label>
              <select class="u-full-width">
                <option value="Option 1">18-20</option>
                <option value="Option 1">21-25</option>
                <option value="Option 2">26-30</option>
                <option value="Option 3">31-35</option>
                <option value="Option 4">36-40</option>
                <option value="Option 5">41-45</option>
                <option value="Option 6">46-50</option>
                <option value="Option 7">51-55</option>
                <option value="Option 8">56-60</option>
                <option value="Option 9">61-65</option>
                <option value="Option 10">69-70</option>
                <option value="Option 11"> > 70</option>
              </select>
              <label for="">STATE</label>
              <select class="u-full-width" id="state">
                <option v-for="state in states" :value="state" :key="state">{{ state.toUpperCase() }}</option>
              </select>
              <label for="">GENDER</label>
              <select class="u-full-width">
                <option value="Option 1">MALE</option>
                <option value="Option 2">FEMALE</option>
                <option value="Option 3">UNDEFINED</option>
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
  name: 'Vote',
  components: {
    Header,
    Info,
  },
  props: [
    'ngoUser',
  ],
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
    }
  },
  methods: {
    home () {
      this.$router.push('home');
    },
  }
}
</script>

<style>
.vote .container {
  width: 400px;
  margin: 0px auto;
  text-align: center;
  font-size: 30px;
}

.vote select {
  height: 70px;
  font-size: 30px;
}

.vote button {
  height: 100px;
  font-size: 30px;
}

.vote .row label {
  text-align: left;
}

/* The container */
.containerrr {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.containerrr input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.containerrr:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.containerrr input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.containerrr input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.containerrr .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.candidate {
  font-size: 50px;
  color: white;
  padding: 0px;
}
</style>


