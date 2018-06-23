<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
    <panel title="register">
      <form>
        <v-text-field
          v-model="username"
          label="username">
        ></v-text-field>
        <br>
        <v-text-field
          v-model="password"
          autocomplete="new-password"
          label="password"
          type="password">
        ></v-text-field>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn 
          class="cyan"
          @click="register"
          dark>Register
        </v-btn>
      </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
