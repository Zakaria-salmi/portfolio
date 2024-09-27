<template>
    <div class="flex flex-col w-full mb-24">
        <h1 class="font-normal">{{ translations[currentLanguage].title }}</h1>
        <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"
        ></div>
        <div
            v-for="(education, index) in translations[currentLanguage]
                .educations"
            :key="index"
            class="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2"
        >
            <a class="flex justify-between items-center w-full" href="#"
                ><div class="flex flex-col gap-1">
                    <p class="text-sm text-gray-200 hover:underline">
                        {{ education.institution }}
                    </p>
                    <p class="text-sm text-gray-400">{{ education.details }}</p>
                </div>
                <p class="text-xs text-gray-200">{{ education.duration }}</p></a
            >
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

// Injecter la langue actuelle
const currentLanguage = inject("currentLanguage");

// Définir les traductions
const translations = {
    en: {
        title: "Education 📖",
        educations: [
            {
                institution: "EKOD",
                details:
                    "Software developer - Vue.js - Node.js - Java - Docker",
                duration: "August 2024 - August 2025",
            },
            {
                institution: "EKOD",
                details: "Web conceptor - HTML/CSS - Javascript - PHP",
                duration: "August 2022 - August 2024",
            },
            {
                institution: "South High School Of Le Mans",
                details: "STI2D - Highest distinction",
                duration: "September 2017 - July 2020",
            },
        ],
    },
    fr: {
        title: "Formations 📖",
        educations: [
            {
                institution: "EKOD",
                details:
                    "Concepteur d'application - Vue.js - Node.js - Java - Docker",
                duration: "Août 2024 - Août 2025",
            },
            {
                institution: "EKOD",
                details: "Web Concepteur - HTML/CSS - Javascript - PHP",
                duration: "Août 2022 - Août 2024",
            },
            {
                institution: "Lycée Sud Le Mans",
                details: "STI2D - Mention très bien",
                duration: "Septembre 2017 - Juillet 2020",
            },
        ],
    },
};
</script>

<style></style>
