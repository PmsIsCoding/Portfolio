<script setup>

</script>

<template>
    <header>
        <h1>
            PMS_Portfolio
        </h1>
        <nav>
            <ul>
                <li>À propos</li>
                <li>Projets</li>
                <li>Compétences</li>
                <li>Parcours</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header{
        display: flex;
        flex: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        background-color: #B1CACA;
        z-index: 2;
        position: relative;
    }
    ul{
        list-style: none;
        display: flex;
        flex: column;
    }
    li{
        margin-right: 45px;
    }
</style>