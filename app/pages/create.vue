<template>
    <div class="container">
        <h1>Crée une tâche</h1>
        <form class="space-y-4" @submit.prevent="createTodo">
            <label>Titre</label>
            <input
                v-model="title"
                type="text"
                class="block w-full py-2 px-3 border border-gray-300 outline-none"
            />
            <button
                type="submit"
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Ajouter
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
const title = ref("");

const createTodo = async () => {
    await $fetch("/api/task", {
        method: "POST",
        body: {
            title: title.value,
        },
    });
    await navigateTo("/");
};
</script>
