<script setup>
import { reactive } from "vue";
import todoService from "../../../todo-service";
import { useRouter } from "vue-router";

const router = useRouter();
const todo = reactive({
    content: "",
    state: false,
    author: "",
});

async function addTodo() {
    await todoService.createTodo(todo);
    await router.push("/");
}
</script>

<template>
    <form @submit.prevent="addTodo" class="todo-form">
        <div>
            <label for="content">Content</label>
            <input id="content" type="text" v-model="todo.content" />
        </div>
        <div>
            <label for="author">Author</label>
            <input id="author" type="text" v-model="todo.author" />
        </div>
        <div>
            <label for="state">Done</label>
            <input
                id="state"
                type="checkbox"
                v-model="todo.state"
                :style="{ backgroundColor: todo.state ? 'green' : 'red' }"
            />
        </div>

        <button type="submit" @click.prevent="addTodo">Add</button>
    </form>
</template>
