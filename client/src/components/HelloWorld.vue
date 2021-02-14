<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>- by <a href="https://www.linkedin.com/in/mjashohan1/">Md Jahan Ali Shohan</a></h3><br><br><br><br><br><br>
    <p>
      This web application is supposed to keep a track of your favourite quotes, quotes that motivate you and gets you
      through the day. There are built-in quotes but you can always customize according to your own wish. Enjoy!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to life tracker'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-weight: bolder;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
