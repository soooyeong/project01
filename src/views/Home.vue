<template>
  <div class="home">
    <v-app style="background-color: #ddd">
      <Header />
      <Nav />

      <v-content>
        <WebPage1 />
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/views/Header";
import Nav from "@/views/Nav";
import WebPage1 from "@/views/WebPage1";
export default {
  name: "home",
  components: {
    Header,
    Nav,
    WebPage1,
  },
};
</script>

<style lang="scss">
</style>
