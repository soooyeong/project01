<template>
  <div class="webPage1">
    <v-app style="background-color: #ddd">
      <Header />
      <Nav />
      <v-content>
        <div class="content-wrap px-8" style="width: 100%; margin-top: -30px">
          <div style="width: 100%">
            <v-card
              class="center"
              width="100%"
              height="112"
              style="border: 1px solid #ccc; border-radius: 10px"
              flat
            >
              <ul class="ul">
                <li class="main_row1">
                  <!--첫번째박스-row1-->
                  <div style="width: 25%; height: 30px">
                    <h2 class="font07 mt-1 ml-2 pt-2">Project 01</h2>
                  </div>
                  <!--첫번째박스-row2-->
                  <div class="pt-7" style="height: 67px">
                    <h2 class="inline font01" style="width: 20%">
                      A<span class="font02 pl-1">35</span>
                    </h2>
                    <h2 class="inline font01" style="width: 20%">
                      B<span class="font02 pl-1">22</span>
                    </h2>
                    <h2 class="inline font01" style="width: 30%">
                      C<span class="font02 pl-1"
                        >64
                        <p class="inline font03">/100</p></span
                      >
                    </h2>
                    <h2 class="inline font01" style="width: 30%">
                      D<span class="inline font02 pl-1"
                        >36
                        <p class="inline font03">/100</p></span
                      >
                    </h2>
                  </div>
                </li>

                <!--두번째박스-row1-->
                <li class="main_row1">
                  <!--첫번째박스-row1-->
                  <div style="width: 25%; height: 30px">
                    <h2 class="font07 mt-1 ml-2 pt-2">Project 02</h2>
                  </div>
                  <!--첫번째박스-row2-->
                  <div class="pt-7" style="height: 67px">
                    <h2 class="inline font01" style="width: 20%">
                      A<span class="font02 pl-1">35</span>
                    </h2>
                    <h2 class="inline font01" style="width: 20%">
                      B<span class="font02 pl-1">22</span>
                    </h2>
                    <h2 class="inline font01" style="width: 30%">
                      C<span class="font02 pl-1"
                        >64
                        <p class="inline font03">/100</p></span
                      >
                    </h2>
                    <h2 class="inline font01" style="width: 30%">
                      D<span class="inline font02 pl-1"
                        >36
                        <p class="inline font03">/100</p></span
                      >
                    </h2>
                  </div>
                </li>

                <!--세번째박스-row1-->
                <li class="main_row1" style="">
                  <!--첫번째박스-row1-->
                  <div style="width: 25%; height: 30px">
                    <h2 class="font07 mt-1 ml-2 pt-2">Project 03</h2>
                  </div>
                  <!--첫번째박스-row2-->
                  <div class="pt-7" style="height: 67px">
                    <h2 class="inline font01" style="width: 20%">
                      A<span class="font02 pl-1">35</span>
                    </h2>
                    <h2 class="inline font01" style="width: 20%">
                      B<span class="font02 pl-1">22</span>
                    </h2>
                    <h2 class="inline font01" style="width: 30%">
                      C<span class="font02 pl-1"
                        >64
                        <p class="inline font03">/100</p></span
                      >
                    </h2>
                    <h2 class="inline font01" style="width: 30%">
                      D<span class="inline font02 pl-1"
                        >36
                        <p class="inline font03">/100</p></span
                      >
                    </h2>
                  </div>
                </li>

                <!--네번째박스-row1-->
                <li class="main_row1" style="">
                  <!--첫번째박스-row1-->
                  <div style="width: 25%; height: 30px">
                    <h2 class="font07 mt-1 ml-2 pt-2 textL">Project 04</h2>
                  </div>
                  <!--두번째박스-row2-->
                  <div class="pt-7 pl-2 textL" style="height: 67px">
                    <v-btn
                      class="pro4-btn mr-2 px-0 py-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt1</v-btn
                    >
                    <v-btn
                      class="pro4-btn mr-2 px-0 py-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt2</v-btn
                    >
                    <v-btn
                      class="pro4-btn mr-2 px-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt3</v-btn
                    >
                    <v-btn
                      class="pro4-btn mr-2 px-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt4</v-btn
                    >
                    <v-btn
                      class="pro4-btn mr-2 px-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt5</v-btn
                    >
                    <v-btn
                      class="pro4-btn mr-2 px-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt6</v-btn
                    >
                    <v-btn
                      class="pro4-btn mr-1 px-0"
                      color="#336ee0"
                      depressed
                      outlined
                      small
                      >bnt7</v-btn
                    >
                  </div>
                </li>
              </ul>
            </v-card>
          </div>

          <v-card
            class="center mt--2 mb--2 pl-3"
            width="100%"
            height="1000px"
            style="border: 1px solid #ccc; border-radius: 10px"
            flat
          >
            <div class="px-1 py-5">
              <h2 style="text-align: left; padding-bottom: 5px">Page1</h2>

              <!-- 장비현황 box wrap1 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo1</h4>
                </div>
                <div class="relative">
                  <div
                    class="imgWrap open1"
                    style="width: 100%; position: relative"
                  >
                    <img src="../styles/img/pic1.jpg" alt="" />
                  </div>

                  <strong
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO1</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap1 End -->

              <!-- 장비현황 box wrap2 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo2</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic2.jpg" alt="" />
                  </div>

                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO2</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap2 End -->

              <!-- 장비현황 box wrap3 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo3</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic3.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO3</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap3 End -->

              <!-- 장비현황 box wrap4 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo4</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic1.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO4</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap4 End -->

              <!-- 장비현황 box wrap5 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo5</h4>
                </div>
                <div class="relative">
                  <div
                    class="imgWrap open2"
                    style="width: 100%; position: relative"
                  >
                    <img src="../styles/img/pic2.jpg" alt="" />
                  </div>

                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >ERROR</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap5 End -->

              <!-- 장비현황 box wrap6 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo6</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic3.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO6</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap6 End -->

              <!-- 장비현황 box wrap7 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo7</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic1.jpg" alt="" />
                  </div>

                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO7</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap7 End -->

              <!-- 장비현황 box wrap8 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo8</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic2.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO8</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap8 End -->

              <!-- 장비현황 box wrap9 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo9</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic3.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO9</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap9 End -->

              <!-- 장비현황 box wrap10 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo10</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic1.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO10</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap10 End -->

              <!-- 장비현황 box wrap11 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo11</h4>
                </div>
                <div class="relative">
                  <div class="imgWrap" style="width: 100%; position: relative">
                    <img src="../styles/img/pic2.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >PHOTO11</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap11 End -->

              <!-- 장비현황 box wrap12 -->
              <div class="equipBox">
                <div class="box-titleWrap">
                  <h4 class="inline ft-size1">photo12</h4>
                </div>
                <div class="relative">
                  <div
                    class="imgWrap open2"
                    style="width: 100%; position: relative"
                  >
                    <img src="../styles/img/pic3.jpg" alt="" />
                  </div>
                  <strong
                    class=""
                    style="
                      position: absolute;
                      right: 5px;
                      bottom: 5px;
                      color: #fff;
                      font-weight: 600;
                      font-size: 0.8vw;
                    "
                    >ERROR</strong
                  >
                </div>
                <div class="btnWrap">
                  <div
                    class="btn-row1"
                    style="position: relative; text-align: left"
                  >
                    <div
                      class=""
                      style="position: absolute; bottom: 0; left: 30px"
                    >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-alarm-check</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-all-inclusive</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-music-circle-outline</v-icon
                        ></v-btn
                      >
                      <v-btn depressed small class="px-0 mb-2 white"
                        ><v-icon large color="grey lighten-1"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </div>
                  <div
                    class="btn-row2"
                    style="display: none; position: relative; text-align: left"
                  >
                    <div style="position: absolute; bottom: -7px; left: 10px">
                      <img src="../styles/img/calculate.png" />
                    </div>
                    <div style="position: absolute; bottom: 0; left: 50px">
                      <button class="control-btn control-btn1">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn2">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn3">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                      <button class="control-btn control-btn4">
                        <img src="../styles/img/calculate_control.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 장비현황 box wrap12 End -->
            </div>
          </v-card>
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "@/views/Header";
import Nav from "@/views/Nav";
export default {
  name: "WebPage1",
  components: {
    Header,
    Nav,
  },
  data() {
    return {
      toggle_one: 1,
      quantity: 0,
    };
  },
};
</script>

<style lang="scss">
</style>