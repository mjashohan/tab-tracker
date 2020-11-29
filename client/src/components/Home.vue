<template>
  <div>
  <h1>Here is a list of Proxy IPs:</h1>
  <div v-for="ips in IP" :key="ips">
      {{ips.IPAddress}}
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      IP: []
    }
  },
  mounted () {
    axios.get('http://localhost:8081/getIP')
      .then((response) => {
        this.IP = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style>

</style>
