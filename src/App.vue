<script setup>
import { ref, provide } from "vue";
import Contact from "./components/Contact.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import { RouterView } from "vue-router";

const currentLanguage = ref("en");

provide("currentLanguage", currentLanguage);

const changeLanguage = (lang) => {
    currentLanguage.value = lang;
    console.log(currentLanguage.value);
};
</script>

<template>
    <RouterView />
    <Contact />
    <LanguageSwitcher @language-changed="changeLanguage" />
</template>

<style scoped></style>
