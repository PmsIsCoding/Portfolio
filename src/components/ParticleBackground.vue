<script setup>
import { onMounted } from 'vue'
import { loadSlim } from 'tsparticles-slim' // Assure-toi que tsparticles-slim est installé

const particlesInit = async (engine) => {
  await loadSlim(engine)
}

const particlesLoaded = (container) => {
  console.log('Particles loaded:', container)
}
</script>

<template>
  <div>
    <particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: 'transparent' // Fond transparent
          }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        particles: {
          color: { value: '#ffffff' }, // Couleur des particules
          links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
          move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 2, straight: false },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
      }"
    />
  </div>
</template>

<style scoped>
#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ajuste selon tes besoins : 0 pour derrière le contenu, -1 pour derrière tout */
}
</style>