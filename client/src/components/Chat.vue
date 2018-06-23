<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Chat">
        <div v-for="chat in chats" :key="chat.id">
          <p>
            <span class="name">{{ chat.username }}:</span>{{ chat.text }}
          </p>
        </div>
        <div v-if="$store.state.isUserLoggedIn">
          <v-text-field
          required
          :rules="[required]"
          v-model="messages.text"
          label="insert message">
        ></v-text-field>

        <div class="danger-alert" v-if="error">
          {{ error }}
        </div>

        <v-btn 
          class="cyan"
          @click="create"
          dark>
          send
        </v-btn>
        </div>
     </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import ChatService from '@/services/ChatService.js'

export default {
  data() {
    return {
      chats: null,
      messages: {
        username: null,
        text: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const allFieldsFilledIn = this.messages.text !== undefined

      if (!allFieldsFilledIn) {
        this.error = 'Please add a message'
        return
      }

      try {
        if (this.$store.state.user.username) {
          this.messages.username = this.$store.state.user.username
        }
        await ChatService.post(this.messages)
            this.chats = (await ChatService.index()).data

      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    console.log('called')
    this.chats = (await ChatService.index()).data
    console.log(this.chats)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .name {
    font-weight: bold;
    margin-right: 10px;
  }
</style>
