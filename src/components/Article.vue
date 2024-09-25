<template>
    <div class="article-container">
        <button
            class="mb-5 transition ease-in-out hover:scale-110 duration-300"
            @click="goToHome"
        >
            Back to home
        </button>

        <div v-if="project" class="container">
            <h1 class="article-title">{{ project.name }}</h1>
            <img
                :src="`../${project.img}`"
                alt="project image"
                class="article-image"
            />
            <div class="flex justify-center sm:justify-end mt-2">
                <a
                    :href="project.github"
                    target="_blank"
                    class="rounded-lg border border-gray-300 text-white font-bold py-2 px-4 transition-transform transform hover:scale-105 focus:outline-none"
                >
                    Source Code
                </a>
                <a
                    :href="project.url"
                    target="_blank"
                    class="ml-3 rounded-lg border border-gray-300 text-black font-bold bg-white py-2 px-4 transition-transform transform hover:scale-105 focus:outline-none"
                >
                    Demo
                </a>
            </div>
            <div
                v-html="project.content[currentLanguage]"
                class="prose dark:prose-invert prose-lg text-white min-w-full"
            ></div>
        </div>

        <div v-else>
            <p class="text-center">Project not found</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { inject } from "vue";
import projects from "../project/projects.json";

const route = useRoute();
const router = useRouter();
const projectId = route.params.id;

const currentLanguage = inject("currentLanguage");

const project = ref(null);

const goToHome = () => {
    router.push("/");
};

onMounted(() => {
    const foundProject = projects.find((p) => p.id.toString() === projectId);
    if (foundProject) {
        project.value = foundProject;
    }
});
</script>

<style scoped>
.article-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
}

@media (min-width: 768px) {
    .article-container {
        max-width: 800px;
    }
}

.container {
    margin-bottom: 4rem;
}

.article-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #ffffff;
}

.article-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
}

.article-description {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    color: #d1d5db;
}
</style>
