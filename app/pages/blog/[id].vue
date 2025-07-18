<template>
    <h1>Blog {{ route.params.id }}</h1>
</template>

<script setup>
const route = useRoute();

definePageMeta({
    validate: async (route) => {
        return (
            typeof route.params.id === "string" && /\d/.test(route.params.id)
        );
    },
});
</script>

<style lang="scss" scoped></style>
