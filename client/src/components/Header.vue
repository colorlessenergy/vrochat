<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home cyan"
        tag="v-btn"
        :to="{
          name: 'root'
        }">
        VroChat
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <router-link
        flat 
        dark
        class="cyan"
        tag="v-btn"
        :to="{
          name: 'chat'
        }">
        Chat
      </router-link>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>

      <router-link
        v-if="!$store.state.isUserLoggedIn"
        dark
        flat 
        class="cyan"
        tag="v-btn"
        :to="{
          name: 'login'
        }">
        Login
      </router-link>

      <router-link 
        v-if="!$store.state.isUserLoggedIn"
        class="cyan"
        tag="v-btn"
        :to="{
          name: 'register'
        }">
        Sign Up
      </router-link>

      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        class="cyan"
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.home:hover {
  color: #000;
}

</style>
