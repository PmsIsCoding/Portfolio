<script setup>
import Header from './components/Header.vue';
import Presentation from './components/Presentation.vue';
import ParticleBackground from './components/ParticleBackground.vue';
</script>

<template>
  <div class="blur"></div>
  <ParticleBackground />
  <Header/>
  <div class="fond">
    <Presentation/>
  </div>
</template>

<style scoped>
  .blur{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.509);
    /* backdrop-filter: blur(10px); */
    z-index: -2;
  }
  .fond{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
