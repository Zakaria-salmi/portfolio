<script setup>
import CardContainer from "./components/CardContainer.vue";
import Graduations from "./components/Graduations.vue";
import Jobs from "./components/Jobs.vue";
import Profile from "./components/Profile.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
    <div class="flex flex-col justify-start items-center h-screen">
        <div
            class="flex flex-col flex-wrap items-center justify-center mt-[3rem] p-3 w-full max-w-[650px]"
        >
            <Profile />
            <div class="max-w-[700px] my-[2rem] w-full">
                <CardContainer />
            </div>
            <Jobs />
            <Graduations />
        </div>
    </div>
    <Contact />
</template>

<style scoped></style>
