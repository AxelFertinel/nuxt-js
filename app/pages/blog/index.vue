<template>
    <div>
        <h1>blog</h1>
        <!-- <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul> -->
        <!-- <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
        </ul>-->
        <button
            @click="addTodo"
            class="bg-green-600 hover:bg-green-400 cursor-pointer p-2 rounded text-white"
        >
            Ajouter une task
        </button>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.apirUrl;
//const posts = await $fetch(apiUrl);

// const { data: posts } = useFetch(`${apiUrl}/posts`);
// const { data: todos } = useFetch(`${apiUrl}/todos?_limit=5`);

// async function addTodo() {
//     const newTodo = await $fetch(`${apiUrl}/todos`, {
//         method: "POST",
//         body: {
//             userId: 1,
//             title: "Nouvelle todo",
//             completed: false,
//         },
//     });
//     console.log(newTodo);
// }
async function addTodo() {
    const res = await $fetch(`/api/welcome`, {
        method: "POST",
        body: {
            name: "Axel",
        },
    });
    console.log(res);
}
</script>

<style lang="scss" scoped></style>
