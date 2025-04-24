<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Typed from 'typed.js';

const typedElement = ref(null);
let typedInstance = null;

onMounted(() => {
  typedInstance = new Typed(typedElement.value, {
    strings: ["Coding.", "IA.", "Design."],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
});

onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});
</script>

<template>
  <span ref="typedElement"></span>
</template>

<style scoped>
    span{
        font-weight: bold;
        color: rgb(131, 255, 224);
    }
</style>
