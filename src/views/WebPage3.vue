<template>
  <div class="webPage3">
    <v-app style="background-color: #ddd">
      <Header />
      <Nav />
      <v-content color="#c99">
        <div class="content-wrap px-8">
          <div>
            <v-card class="v-card center mb-7" width="100%" flat>
              <div class="page2-title">
                <h2 style="font-weight: bold; text-align: left">Page3</h2>
              </div>

              <div class="tabMenu relative">
                <v-tabs
                  v-model="tab"
                  left-with-title
                  class="v-tabs"
                  style="margin: 0; background: #c99"
                >
                  <v-tabs-slider
                    color="#ccc"
                    style="height: 1px"
                  ></v-tabs-slider>
                  <v-tab
                    v-for="item in items"
                    :key="item"
                    v-bind:class="{ active: showColor }"
                    v-on:click="showColor = !showColor"
                    class="v-tab"
                    style="font-weight: bold"
                  >
                    {{ item }}
                  </v-tab>
                </v-tabs>
              </div>

              <div
                class="page3-content relative"
                style="width: 100%; overflow: hidden"
              >
                <v-card flat width="70%" height="100%" class="pr-5 floatL">
                  <v-card
                    width="100%"
                    flat
                    class="card mt-5 pb-2"
                    style="border: 1px solid #ccc"
                  >
                    <h4 class="textL pl-2 pt-2">search</h4>
                    <div class="textL pl-2">
                      <select
                        class="select01 form_bordius px-2 py-1 mr-2"
                        name=""
                        id=""
                      >
                        <option value="">info01</option>
                      </select>

                      <input
                        type="text"
                        class="form_bordius px-2 py-1 mr-2"
                        placeholder="content"
                      />

                      <select
                        name=""
                        id=""
                        class="select01 form_bordius px-2 py-1 mr-2"
                      >
                        <option value="">info02</option>
                      </select>
                      <select
                        name=""
                        id=""
                        class="select01 form_bordius px-2 py-1 mr-2"
                      >
                        <option value="">info03</option>
                      </select>
                      <v-btn
                        class="search-btn"
                        color="#336ee0"
                        depressed
                        height="35"
                        ><v-icon color="white">mdi-magnify</v-icon></v-btn
                      >
                    </div>
                  </v-card>
                  <table class="table-wrap3">
                    <thead>
                      <tr>
                        <th colspan="3">name1</th>
                        <th>name2</th>
                        <th>name3</th>
                        <th>name4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          colspan="3"
                          class="relative"
                          @click="showSub = !showSub"
                        >
                          content1
                          <span
                            class="arrow"
                            v-bind:class="{ active: isActive }"
                          ></span>
                        </td>
                        <td>content2</td>
                        <td>content3</td>
                        <td>content4</td>
                      </tr>

                      <!-- 클릭시 열리는 테이블 -->
                      <tr class="tr" v-if="showSub" @close="showSub = false">
                        <td colspan="6" class="td">
                          <table class="table-wrap3">
                            <tbody>
                              <tr>
                                <td colspan="3">sub1-1</td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="radio"
                                  /></label>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="3">sub1-2</td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="radio"
                                  /></label>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="3">sub1-3</td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="radio"
                                  /></label>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="3">sub1-4</td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="checkbox"
                                  /></label>
                                </td>
                                <td colspan="1">
                                  name3<label for=""
                                    ><input type="radio"
                                  /></label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <!-- 클릭시 열리는 테이블 -->

                      <tr>
                        <td colspan="3" class="relative">
                          content1 <span class="arrow"></span>
                        </td>
                        <td>content2</td>
                        <td>content3</td>
                        <td>content4</td>
                      </tr>

                      <tr>
                        <td colspan="3" class="relative">
                          content1 <span class="arrow"></span>
                        </td>
                        <td>content2</td>
                        <td>content3</td>
                        <td>content4</td>
                      </tr>
                      <tr>
                        <td colspan="3" class="relative">
                          content1 <span class="arrow"></span>
                        </td>
                        <td>content2</td>
                        <td>content3</td>
                        <td>content4</td>
                      </tr>
                      <tr>
                        <td colspan="3" class="relative">
                          content1 <span class="arrow"></span>
                        </td>
                        <td>content2</td>
                        <td>content3</td>
                        <td>content4</td>
                      </tr>
                      <tr>
                        <td class="" colspan="6">total</td>
                      </tr>
                    </tbody>
                  </table>
                </v-card>
              </div>
            </v-card>
            <!--임시 높이-->
          </div>
        </div>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Header from "@/views/Header";
import Nav from "@/views/Nav";

export default {
  name: "webPage3",
  components: {
    Header,
    Nav,
  },

  data() {
    return {
      tab: null,
      items: ["tab01", "tab02", "tab03"],
      showSub: false,
      isActive: true,
    };
  },
};
</script>
<style lang="scss">
</style>














