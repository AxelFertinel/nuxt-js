<template>
    <div>
        <h1>Contact</h1>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: "log",
});

import { useHead, useSeoMeta } from "#app";
useHead({
    title: "Contact",
    meta: [{ name: "description" }],
});

useSeoMeta({
    title: "Contact",
    ogTitle: "Ogtitle",
    description: "test",
    ogDescription: "test",
    ogImage:"/test.png",
    twitterCard: "summary_large_image"
})
</script>
