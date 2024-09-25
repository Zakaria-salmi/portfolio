<template>
    <div class="flex flex-col justify-start items-center h-screen">
        <div
            class="flex flex-col flex-wrap items-center justify-center mt-[3rem] p-3 w-full max-w-[750px]"
        >
            <Profile />
            <div class="max-w-[750px] my-[2rem] w-full">
                <CardContainer />
            </div>
            <Jobs />
            <Education />
        </div>
    </div>
</template>

<script setup>
import CardContainer from "./CardContainer.vue";
import Education from "./Education.vue";
import Jobs from "./Jobs.vue";
import Profile from "./Profile.vue";
</script>

<style></style>
