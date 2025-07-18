<template>
    <div>
        <h1>Contact</h1>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: "log",
});

import { useHead } from "#app";
useHead({
    title: "Contact",
    meta: [{ name: "description" }],
});
</script>
