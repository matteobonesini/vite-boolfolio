<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent,
    }
}
</script>

<template>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
