<template>
  <div class="nav">
    <v-navigation-drawer
      v-model="drawer"
      app
      style="z-index: 1; position: fixed; top: 0; left: 0 border-right: none;"
      class="pt-16"
      width="120"
      color="#336ee0"
      floating
      @click="drawer"
    >
      <div class="menu-border1 pt-5 white--text text-uppercase">nav</div>

      <div class="nav menu-border2" height="100">
        <router-link to="/webPage1">
          <v-btn
            class="nav-btn1"
            color="transparent"
            style="
              z-index: 5;
              box-shadow: none;
              height: 100px;
              padding-top: 10px;
            "
            width="100"
            height="100"
            depressed
            ><div>
              <img src="../styles/img/nav_icon_01.png" alt="" />
            </div>
          </v-btn>
        </router-link>
      </div>
      <div class="menu-border2 nav-btn2">
        <router-link to="/webPage2">
          <v-btn
            class="nav-btn"
            color="transparent"
            style="box-shadow: none; height: 100px; padding-top: 10px"
            width="100"
            height="100"
            ><div>
              <img src="../styles/img/nav_icon_02.png" alt="" />
            </div>
          </v-btn>
        </router-link>
      </div>

      <div class="menu-border2">
        <router-link to="/webPage3">
          <v-btn
            class="nav-btn"
            color="transparent"
            style="box-shadow: none; height: 100px; padding-top: 10px"
            width="100"
            height="100"
          >
            <div>
              <img src="../styles/img/nav_icon_03.png" alt="" />
            </div>
          </v-btn>
        </router-link>
      </div>
      <div class="menu-border2">
        <v-btn
          class="nav-btn"
          color="transparent"
          style="box-shadow: none; height: 100px; padding-top: 10px"
          width="100"
          height="100"
        >
          <div>
            <img src="../styles/img/nav_icon_04.png" alt="" />
          </div>
        </v-btn>
      </div>

      <div class="menu-border2">
        <v-btn
          class="nav-btn"
          color="transparent"
          style="box-shadow: none; height: 100px; padding-top: 10px"
          width="100"
          height="100"
        >
          <div>
            <img src="../styles/img/nav_icon_05.png" alt="" />
          </div>
        </v-btn>
      </div>

      <div class="arrow-bx">
        <v-btn
          @click="drawer = !drawer"
          style="
            min-width: 16px;
            height: 100px;
            padding: 0;
            border-radius: 0 20px 20px 0;
          "
          class="arrow-btn"
          color="#336ee0"
          depressed
        >
          <img
            style="margin-left: -2px"
            src="../styles/img/arrow_left.png"
            alt=""
          />
        </v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data() {
    return {
      drawer: true,
      // images: [],
    };
  },
};
</script>