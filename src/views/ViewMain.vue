<template>
  <div id="vantajs-container">
    <div class="flex p-7 space-x-7 relative hidden">
      <div class="w-2/3 h-96 bg-glass-red rounded-3xl text-white p-8 shadow-lg relative flex flex-col justify-center">
        <!-- Content for the second div (1/1.5 of the screen width) -->
        <h1 class="text-4xl font-bold mb-4">Hey, I'm Yeka Kufa</h1>
        <p class="text-lg">
          I'm an electrical engineer with a passion for software development. Let's chat and see how we can combine
          engineering and coding!
        </p>
        <a href="#" class="mt-6 text-yellow-400 hover:text-yellow-300 transition duration-300 ease-in-out">
          Let's Connect ➔
        </a>
      </div>
      <div class="w-1/3 h-96 bg-glass-gray rounded-3xl text-white p-8 shadow-lg relative overflow-hidden">
        <!-- Content for the third div (rest of the screen width) -->
        <div class="h-full flex flex-col justify-between">
          <div class="avatar">
            <div class="w-60 rounded-full ring ring-red-700 ring-offset-base-100 ring-offset-2">
              <img src="../assets/img_2624.jpg" class="bg-cover" />
            </div>
          </div>
          <div class="flex items-center justify-end">
            <a href="#" class="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out">
              Explore More ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Inisialisasi efek animasi fog dengan VantaJS
    this.$nextTick(() => {
      VANTA.TOPOLOGY({
        el: "#vantajs-container",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 7.0,
        scaleMobile: 3.0,
        color: 0xcd1a1a,
        backgroundColor: 0x0,
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

.bg-glass-red {
  background-color: rgba(182, 18, 18, 0.5); /* Adjust the alpha value for desired transparency */
  backdrop-filter: blur(10px);
}

.bg-glass-gray {
  background-color: rgba(62, 60, 60, 0.8); /* Adjust the alpha value for desired transparency */
  backdrop-filter: blur(10px);
}

.z-10 {
  z-index: 10;
}

/* Additional styles for the content */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text-lg {
  line-height: 1.6;
}

/* Style for the image */
img {
  border: 2px solid rgba(255, 255, 255, 0.5);
}
</style>
