<template>
    <div class="container">
        <div class="flex justify-between items-center mb-6">
            <h1>Liste des tâches</h1>

            <NuxtLink class="bg-blue-500 hover:bg-blue-600 btn" to="/create">
                + Créer
            </NuxtLink>
        </div>
        <ul v-if="todos.length" class="space-y-4">
            <li
                class="items-center justify-center flex bg-white shadow-md rounded-md p-4"
                v-for="todo in todos"
                :key="todo.id"
            >
                <NuxtLink
                    :to="`/todo/${todo.id}`"
                    class="flex-1 text-lg hover:underline"
                >
                    {{ todo.title }}
                </NuxtLink>
                <div class="flex gap-2">
                    <NuxtLink
                        :to="`/todo/${todo.id}/edit`"
                        class="bg-yellow-500 hover:bg-yellow-600 btn"
                        >Modifier</NuxtLink
                    >
                    <NuxtLink
                        @click="deleteTodo(todo.id)"
                        class="bg-red-500 hover:bg-red-600 btn"
                        >Supprimer</NuxtLink
                    >
                </div>
            </li>
        </ul>

        <p v-else class="texte-grey-500">Aucune tache pour le moment</p>
    </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Task } from "~/types/task";

const todos = ref<Task[]>([]);

const fetchTodos = async (): Promise<Task[]> => {
    return (todos.value = await $fetch<Task[]>("/api/task"));
};
const deleteTodo = async (id: number): Promise<void> => {
    await $fetch(`/api/task/${id}`, { method: "DELETE" });
    fetchTodos();
};

onMounted(fetchTodos);
</script>
