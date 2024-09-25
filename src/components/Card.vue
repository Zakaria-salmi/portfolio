<template>
    <div
        class="w-full rounded-2xl border border-zinc-800 cursor-pointer p-3 mb-2 flex flex-col items-center box overlay"
        style="--clr: #e2e8f0"
        @click="goToArticle"
    >
        <div class="relative w-full z-10 rounded-2xl mb-2">
            <img
                :src="project.img"
                alt="project"
                class="object-cover object-center rounded-2xl mb-3"
            />
            <h3 class="font-bold mb-2">{{ project.name }}</h3>
            <p class="text-sm text-slate-200">
                {{ project.description[currentLanguage] }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";
import { onMounted } from "vue";

const props = defineProps({
    project: Object,
});

const currentLanguage = inject("currentLanguage");

const router = useRouter();

const goToArticle = () => {
    router.push(`/article/${props.project.id}`);
};

onMounted(() => {
    document.querySelectorAll(".box").forEach((item) => {
        item.onmousemove = (e) => {
            item.style.setProperty("--x", e.pageX - item.offsetLeft + "px");
            item.style.setProperty("--y", e.pageY - item.offsetTop + "px");
        };
    });
});
</script>

<style>
.box {
    position: relative;
    overflow: hidden;
}

.box::before {
    content: "";
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 800px;
    height: 800px;
    transform: translate(-50%, -50%);
    background: radial-gradient(var(--clr), transparent, transparent);
    opacity: 0;
    transition: 0.5s, top 0s, left 0s;
    z-index: 0;
}

.box:hover::before {
    opacity: 1;
}

.box::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 0.9rem;
    background: rgba(0, 0, 0, 0.75);
}
</style>
