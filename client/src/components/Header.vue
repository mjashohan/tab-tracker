<template>
  <v-card
    color="#2196F3"
    flat
    height="50px"
    tile
  >
    <v-app-bar dense>
      <v-toolbar-title>
       <span class="home" @click="navigateTo({name: 'root'})">LifeTracker</span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn flat dark>
          Browse 
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" to="/login" light>
          Log In
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" to="/register" light>
          Sign Up!
        </v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" light>
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUoken', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
