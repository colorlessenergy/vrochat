<template>
  <div>
    <h1>Register</h1>

    <input
      type="username"
      name="username"
      v-model="username"
      placeholder="username">
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password">
      <br>
    <button
      @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
