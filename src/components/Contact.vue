<template>
    <div
        class="fixed bottom-5 left-2/4 -translate-x-2/4 p-2 border border-zinc-700 bg-black bg-opacity-50 rounded-xl flex flex-row justify-between items-center transition ease-in-out hover:scale-125 duration-500 neon-hover"
    >
        <div class="mx-6 flex items-center">
            <a
                href="mailto:z.salmi0302@gmail.com"
                target="_blank"
                class="transition ease-in-out hover:scale-125 duration-300 color"
            >
                <i class="fa-solid fa-at text-3xl"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/zakaria-salmi-191a16234/"
                target="_blank"
                class="transition ease-in-out hover:scale-125 duration-300 color"
            >
                <i class="devicon-linkedin-plain text-3xl ml-4"></i>
            </a>
            <a
                href="https://github.com/Zakaria-salmi"
                target="_blank"
                class="transition ease-in-out hover:scale-125 duration-300 color"
            >
                <i class="devicon-github-original text-3xl ml-4"></i>
            </a>
        </div>
    </div>
</template>

<script setup></script>

<style>
.neon-hover:hover {
    box-shadow: rgba(151, 151, 167, 0.2) 0px 0px 29px 5px;
}

.color:hover {
    color: #ffffff;
}
</style>
