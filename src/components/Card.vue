<template>
    <div
        class="w-full rounded-2xl border border-zinc-800 cursor-pointer p-3 mb-2 flex flex-col items-center"
    >
        <div class="w-full rounded-2xl mb-2">
            <img
                :src="project"
                alt="project"
                class="object-cover object-center rounded-2xl"
            />
        </div>
        <div>
            <h3 class="font-bold mb-2">Project</h3>
            <p class="text-sm text-slate-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti, minus ipsam neque velit accusamus facere.
            </p>
        </div>
    </div>
</template>

<script setup>
import project from "../../public/project.webp";
</script>

<style></style>
