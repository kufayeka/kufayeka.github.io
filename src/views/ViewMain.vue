<template>
  <div id="vantajs-container"></div>
</template>

<script>
export default {
  mounted() {
    // Inisialisasi efek animasi fog dengan VantaJS
    this.$nextTick(() => {
      VANTA.FOG({
        el: "#vantajs-container", // ID elemen target
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xb61212,
        midtoneColor: 0xbb4646,
        lowlightColor: 0x000000,
        baseColor: 0x3e3c3c,
        blurFactor: 0.6,
        speed: 0.0,
        zoom: 0.7,
      });
    });
  },
};
</script>

<style>
#vantajs-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
