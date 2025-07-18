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
</script>

<style lang="scss" scoped></style>
