<template>
    <div class="flex items-center justify-between w-full">
        <h2 class="text-gray-200 font-normal">Projects ✨</h2>
    </div>
    <div
        class="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]"
    >
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</template>

<script setup>
import Card from "./Card.vue";
</script>

<style></style>
