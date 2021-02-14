<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div style="margin-left: 30%;margin-right: 30%">
        <v-app-bar flat dense color="#2196F3" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-app-bar>
        <br />
        <div>
          <v-text-field
            label="Email"
            type="email"
            v-model="email">
          </v-text-field>
          <br />
          <v-text-field
            label="Password"
            type="password"
            v-model="password">
          </v-text-field>
          <br />
          <div class="error" v-html="error" />
          <br />
          <v-btn color="#2196F3" style="color:white" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      let response
      try {
        response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
  .layout column {
    margin-left: 20%;
    margin-right: 20%;
  }
</style>
