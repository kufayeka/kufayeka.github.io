<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

const state = ref();

const computedProperty = computed(() => {});

function yourCustomFunction() {}

watch(state, (newState, oldState) => {});

onMounted(() => {});
</script>

<template>
  <RouterView />
</template>
