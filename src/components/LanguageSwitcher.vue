<template>
    <div
        class="cursor-pointer fixed bottom-6 left-5 border border-zinc-700 bg-black bg-opacity-50 rounded-xl flex flex-row justify-between items-center transition ease-in-out hover:scale-125 duration-500 neon-hover z-50"
    >
        <button
            v-if="currentLanguage === 'en'"
            @click="setLanguage('fr')"
            class="w-full m-2"
        >
            FR
        </button>
        <button
            v-if="currentLanguage === 'fr'"
            @click="setLanguage('en')"
            class="w-full m-2"
        >
            EN
        </button>
    </div>
</template>

<script setup>
import { ref, provide } from "vue";

const currentLanguage = ref("en");

provide("currentLanguage", currentLanguage);

const emit = defineEmits();

const setLanguage = (lang) => {
    currentLanguage.value = lang;
    emit("language-changed", lang);
};
</script>

<style scoped></style>
