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
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <router-link
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
        class="cyan"
        tag="v-btn"
        :to="{
          name: 'register'
        }">
        Sign Up
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.home:hover {
  color: #000;
}

</style>
