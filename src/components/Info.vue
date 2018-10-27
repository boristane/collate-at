<template>
  <div class="info">
    <p>{{ `Login ID: ${ngoUser.ngo}` }}</p>
    <p>{{ `State: ${ngoUser.state}` }}</p>
    <p>{{ `LGA: ${ngoUser.lga}` }}</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: [
    'ngoUser'
  ],
}
</script>

<style>
.info p {
  margin: 1px;
}

.info {
  margin-top: 60px;
  text-align: left;
}
</style>


