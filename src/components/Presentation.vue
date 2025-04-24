<script setup>
import TypedText from './TypedText.vue';
</script>

<template>
    <div class="main">
        <img src="../assets/Fichier 1-8.png" alt="photo">
        <div>
            <h1>Pape Moussa SENE</h1>
            <p>Je suis étudiant en Informatique depuis 2021 à l'Université Cheikh Anta DIOP de Dakar (UCAD) - Section Informatique. Actuellement en Master option Système d'Information Répartie (SIR).</p>
            <p class="passion">Je suis passionné de <TypedText /></p>
        </div>
    </div>
</template>

<style scoped>
    .main {
        margin-top: 20px;
        width: 60vw;
        height: 50vh;
        border-radius: 15px;
        color: white;
        background-color: rgba(255, 255, 255, 0.162);
        padding: 20px;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 0 50px rgb(131, 255, 224);
        position: relative;
        animation: floatRandom 20s ease-in-out infinite;
    }
    img {
        width: 170px;
        margin-right: 10px;
    }
    h1 {
        margin-bottom: 20px;
    }
    .passion{
        font-size: 140%;
        margin-top: 20px;
    }
    @keyframes floatRandom {
        0% {
            transform: translate(0, 0); /* Point de départ */
        }
        20% {
            transform: translate(15px, -20px); /* Déplacement vers la droite et haut */
        }
        40% {
            transform: translate(-10px, 10px); /* Gauche et bas */
        }
        60% {
            transform: translate(20px, 0); /* Droite */
        }
        80% {
            transform: translate(-15px, -15px); /* Gauche et haut */
        }
        100% {
            transform: translate(0, 0); /* Retour au point de départ */
        }
    }
</style>