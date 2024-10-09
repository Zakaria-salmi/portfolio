<template>
    <div
        class="flex justify-between items-center w-full border p-5 rounded border-zinc-800"
    >
        <div class="flex flex-col justify-center items-start w-full">
            <div class="flex justify-center items-center gap-2">
                <div>
                    <span
                        class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full animate-buttonheartbeat hover:cursor-pointer"
                    >
                        <img
                            class="h-full w-full object-cover object-center"
                            alt="profile picture"
                            :src="pp"
                        />
                    </span>
                </div>
                <div>
                    <h1 class="font-semibold leading-7">
                        {{ translations[currentLanguage].name }}
                    </h1>
                    <p class="text-xs font-light">
                        {{ translations[currentLanguage].location }}
                    </p>
                    <p class="text-xs font-light">
                        {{ translations[currentLanguage].role }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-1 mt-3">
                <p class="text-xs font-bold">
                    🎯 {{ translations[currentLanguage].status }}
                </p>
            </div>
        </div>
        <div class="flex gap-2">
            <a href="./Salmi-Zakaria-CV.pdf" download="CV-Salmi-Zakaria">
                <i class="fa-regular fa-file text-3xl"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/zakaria-salmi-191a16234/"
                target="_blank"
            >
                <i class="fa-brands fa-linkedin text-3xl ml-2"></i>
            </a>
            <a href="https://github.com/Zakaria-salmi" target="_blank">
                <i class="fa-brands fa-github text-3xl ml-2"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
import pp from "../assets/Photo.png";
import { inject } from "vue";

const currentLanguage = inject("currentLanguage");

const translations = {
    en: {
        name: "Salmi Zakaria",
        location: "France - Le Mans 📍",
        role: "Student & Full Stack Developer",
        status: "Status: Looking for an apprenticeship in web or app development",
    },
    fr: {
        name: "Salmi Zakaria",
        location: "France - Le Mans 📍",
        role: "Étudiant & Développeur Full Stack",
        status: "Statut : À la recherche d'un apprentissage en développement web ou d'applications",
    },
};
</script>

<style></style>
