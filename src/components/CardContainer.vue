<template>
    <div class="flex items-center justify-between w-full">
        <h2 class="text-gray-200 font-normal">Projects ✨</h2>
    </div>
    <div
        class="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]"
    >
        <Card
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
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
