<template>
    <div class="container">
        <h1>Tâche {{ id }}</h1>
        <div
            class="items-center justify-center flex bg-white shadow-md rounded-md p-4"
        >
            <div class="flex-1 text-lg">
                <p>
                    Titre de la tâche : <strong>{{ todo?.title }}</strong>
                </p>
                <p>
                    <span
                        :class="
                            todo?.completed ? 'text-green-600' : 'text-red-500'
                        "
                    >
                        {{ todo?.completed ? "Complétée" : "A faire" }}
                    </span>
                </p>
            </div>

            <div class="flex gap-2">
                <NuxtLink
                    :to="`/todo/${todo?.id}/edit`"
                    class="bg-yellow-500 hover:bg-yellow-600 btn"
                    >Modifier</NuxtLink
                >

                <NuxtLink to="/taches" class="bg-blue-500 hover:bg-blue-600 btn"
                    >Retour</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Task } from "~/types/task";

const route = useRoute();
const id = Number(route.params.id);
const todo = ref<Task | null>(null);

onMounted(async () => (todo.value = await $fetch<Task>(`/api/task/${id}`)));
</script>
