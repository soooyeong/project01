<template>
  <div>
    <h1>Your coordinates:</h1>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      style="width: 450px; height: 300px; margin: 0 auto"
    ></GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    // get user's coordinates from browser request 브라우저 요청에서 사용자 좌표 가져 오기
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
};
</script>