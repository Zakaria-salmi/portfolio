<template>
    <div class="flex flex-col w-full mb-8">
        <h1 class="font-normal">{{ translations[currentLanguage].title }}</h1>
        <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"
        ></div>
        <div
            class="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2"
        >
            <a class="flex justify-between items-center w-full" href="#"
                ><div class="flex flex-col gap-1">
                    <p class="text-sm text-gray-200 hover:underline">
                        {{ translations[currentLanguage].company }}
                    </p>
                    <p class="text-sm text-gray-400">
                        {{ translations[currentLanguage].role }}
                    </p>
                </div>
                <p class="text-xs text-gray-200">
                    {{ translations[currentLanguage].duration }}
                </p></a
            >
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

const currentLanguage = inject("currentLanguage");

const translations = {
    en: {
        title: "Professional experiences 💼",
        company: "Solutravo",
        role: "FullStack developer - Laravel/Vue.js",
        duration: "August 2022 - August 2024",
    },
    fr: {
        title: "Expériences professionnelles 💼",
        company: "Solutravo",
        role: "Développeur FullStack - Laravel/Vue.js",
        duration: "Août 2022 - Août 2024",
    },
};
</script>

<style></style>
