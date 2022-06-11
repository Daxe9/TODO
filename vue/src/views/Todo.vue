<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import todoService from "../../../todo-service";
const route = useRoute();
const todo = ref(null);

async function getTodo() {
    todo.value = await todoService.getTodo(route.params.id);
}

onMounted(getTodo);

function updateTodo() {
    todoService.updateTodo(
        todo.value._id,
        JSON.parse(JSON.stringify(todo.value))
    );
}
</script>
<template>
    <form @submit.prevent="updateTodo" v-if="todo" class="todo-form">
        <div>
            <label for="mongodbId">ID</label>
            <input id="mongodbId" type="text" :value="todo._id" readonly />
        </div>
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

        <button type="submit" @click.prevent="updateTodo">Update</button>
    </form>
</template>
