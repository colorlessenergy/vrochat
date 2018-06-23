<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
    <panel title="login">
      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-text-field
          v-model="username"
          label="username">
        ></v-text-field>
        <br>
        <v-text-field
          v-model="password"
          label="password"
          type="password">
        ></v-text-field>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn 
          class="cyan"
          @click="login"
          dark>login
        </v-btn>
      </div>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      this.$router.push({
        name: 'chat'
      })
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
