<template>
    <div
        class="w-full rounded-2xl border border-zinc-800 cursor-pointer p-3 mb-2 flex flex-col items-center"
    >
        <div class="w-full rounded-2xl mb-2">
            <img
                :src="project.img"
                alt="project"
                class="object-cover object-center rounded-2xl"
            />
        </div>
        <div>
            <h3 class="font-bold mb-2">{{ project.name }}</h3>
            <p class="text-sm text-slate-200">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    project: Object,
});
</script>

<style></style>
