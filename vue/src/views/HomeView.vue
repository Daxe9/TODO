<script setup>
import { onMounted, ref } from "vue";
import todoService from "../../../todo-service";
import { useRouter } from "vue-router";
import plus from "../../../plus.png";
const todos = ref(null);
const router = useRouter();

async function getTodos() {
    todos.value = await todoService.getTodos();
}

function goToTodo(id) {
    router.push(`/todo/${id}`);
}

function goToCreate() {
    router.push("/create");
}

onMounted(getTodos);
</script>
<template>
    <div>
        <h1 class="title">
            TODO list
            <img :src="plus" @click="goToCreate" alt="plus symbol" />
        </h1>
        <div class="todo-container">
            <ul>
                <li
                    v-for="(todo, index) in todos"
                    :key="index"
                    @click="goToTodo(todo._id)"
                >
                    <div
                        :class="
                            todo.state ? 'todo done-true' : 'todo done-false'
                        "
                    >
                        <div class="todo-content">
                            <div>
                                by
                                <h3 class="author">{{ todo.author }}</h3>
                            </div>
                            <h4>{{ todo.content }}</h4>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
