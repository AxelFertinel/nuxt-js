<template>
    <head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="title" />
    </head>
</template>

<script setup>
import { ref } from "vue";
const title = "hello world";
</script>

<style lang="scss" scoped></style>
