<template>
    <div class="p-6 max-w-2xl mx-auto">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Liste des tâche</h1>

            <NuxtLink
                class="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                to="/create"
            >
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
                        class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-2 py-2 cursor-pointer"
                        >Modifier</NuxtLink
                    >
                </div>
                <div class="flex gap-2">
                    <NuxtLink
                        @click="deleteTodo(todo.id)"
                        class="bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-2 cursor-pointer"
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
    return await $fetch(`/api/task/${id}`, { method: "DELETE" });
};

onMounted(fetchTodos);
</script>
