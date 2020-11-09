<template>
  <div class="header">
    <v-app-bar
      app
      color="white"
      style="z-index: 4; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15)"
    >
      <v-toolbar-title class="text-uppercase grey--text">
        <!-- <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
        </v-app-bar-nav-icon> -->
        <span
          style="
            color: #333;
            font-weight: 700;
            font-size: 23px;
            position: absolute;
            left: 15px;
            top: 25%;
          "
          class="text--uppercase"
          >project 1
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div
        class="inline pr-5"
        style="height: 40px; border-right: 1px solid #ddd; margin-right: 15px"
      >
        <div style="">
          <p style="text-align: left; font-size: 13px">오늘 날짜</p>
        </div>
        <div style="margin-top: -15px">
          <strong class="font02" style="font-size: 16px">2020-11-02</strong>
        </div>
      </div>
      <span style="font-size: 13px; margin-right: 10px; display: block">
        <v-btn fab depressed color="#336ee0" small
          ><v-icon class="white--text">mdi-account</v-icon></v-btn
        >
        안녕하세요, 윤소영 님</span
      >

      <v-btn
        x-small
        height="30"
        style="
          box-shadow: none;
          line-height: 100%;
          font-size: 0.8rem;
          background: #336ee0;
        "
        color="white--text"
        >로그아웃</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>