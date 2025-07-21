<template>
    <div class="p-6 max-w-xl mx-auto">
        <h1 class="text-2xl font-bold">Edition de la tâche</h1>
        <form action="space-y-4" @submit.prevent="updateTodo">
            <label for="">Titre</label>
            <input
                v-model="title"
                type="text"
                class="block w-full py-2 px-3 border border-gray-300 outline-none"
            />
            <label for="completed" class="flex items-center gap-2">
                <input type="checkbox" id="completed" v-model="completed" />
                Tâche terminé
            </label>
            <button
                type="submit"
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Modifier
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import type { Task } from "~/types/task";
const route = useRoute();
const id = Number(route.params.id);
const title = ref("");
console.log("🎙 title:", title.value);
const completed = ref(false);
console.log("🇰🇾 completed:", completed.value);

const fetchTodos = async () => {
    const data = await $fetch<Task>(`/api/task/${id}`);
    title.value = data.title;
    completed.value = data.completed;
};

const updateTodo = async () => {
    await $fetch(`/api/task/${id}`, {
        method: "PUT",
        body: {
            title: title.value,
            completed: completed.value,
        },
    });
    await navigateTo("/");
};

onMounted(fetchTodos);
</script>
