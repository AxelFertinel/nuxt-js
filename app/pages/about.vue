<template>
    <div>
        <h1>About</h1>
    </div>
</template>

<script setup>
import { useHead } from "#app";
useHead({
    title: "About",
    titleTemplate: (title) => `${title} test`,
});

const config = useRuntimeConfig();

const apiUrl = config.public.apirUrl;
console.log("😙 apiUrl:", apiUrl);
</script>

<style lang="scss" scoped></style>
