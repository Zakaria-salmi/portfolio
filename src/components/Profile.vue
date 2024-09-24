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
                    /></span>
                </div>
                <div>
                    <h1 class="font-semibold leading-7">Salmi Zakaria</h1>
                    <p class="text-xs font-light">France - Le Mans 📍</p>
                    <p class="text-xs font-light">
                        Student &amp; Full Stack Developer
                    </p>
                </div>
            </div>
            <div class="flex flex-col gap-1 mt-3">
                <p class="text-xs font-bold">
                    🎯 Status : Looking for an apprenticeship in web or app
                    development
                </p>
            </div>
        </div>
        <div class="flex gap-2">
            <a
                href="https://www.linkedin.com/in/zakaria-salmi-191a16234/"
                target="_blank"
            >
                <i class="fa-brands fa-linkedin text-3xl"></i>
            </a>
            <a href="https://github.com/Zakaria-salmi" target="_blank">
                <i class="fa-brands fa-github text-3xl ml-2"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
import pp from "../assets/Photo.png";
</script>

<style></style>
