<template>
    <div class="flex items-center justify-between w-full">
        <h2 class="text-gray-200 font-normal">Projects ✨</h2>
    </div>
    <div class="columns-1 sm:columns-2 gap-2 mt-[0.75rem] space-y-2">
        <Card
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            class="break-inside-avoid"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import data from "../project/projects.json";

const projects = ref([]);

onMounted(() => {
    projects.value = data;
});
</script>

<style scoped></style>
