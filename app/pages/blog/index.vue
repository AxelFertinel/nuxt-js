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
            @click="startStream"
            class="bg-green-600 hover:bg-green-400 cursor-pointer p-2 rounded text-white"
        >
            Ajouter une task
        </button>
        <!-- <ul>
            <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
        </ul> -->
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

// import superjson from "superjson";
// const { data } = await useFetch("/api/superjson", {
//     transform: (value) => {
//         return superjson.parse(value);
//     },
// });
// console.log("⛰ data:", data);

//const messages = ref<string[]>([]);
// ...existing code...

async function startStream() {
    const res = await $fetch("/api/sse", {
        method: "POST",
        responseType: "stream",
    });
    const reader = res.pipeThrough(new TextDecoderStream()).getReader();

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        messages.value.push(value.trim());
    }
}
</script>

<style lang="scss" scoped></style>
