<script>
import todoService from "../../../todo-service";
import {onMount} from "svelte"
export let location;
export let navigate;
export let id;

$: todo = {
    _id: id,
    content: "",
    author: "",
    state: false
}

onMount(async () => {
    todo = await todoService.getTodo(id);
})
async function handleUpdate() {
    await todoService.updateTodo(id, todo);
}
</script>

{#if todo}
<form class="todo-form" on:submit|preventDefault={handleUpdate}>
    <div>
        <label for="mongodbId">ID</label>
        <input id="mongodbId" type="text" bind:value={todo._id} readonly />
    </div>
    <div>
        <label for="content">Content</label>
        <input id="content" type="text" bind:value={todo.content} />
    </div>
    <div>
        <label for="author">Author</label>
        <input id="author" type="text" bind:value={todo.author} />
    </div>
    <div>
        <label for="state">Done</label>
        <input
            id="state"
            type="checkbox"
            bind:checked={todo.state}
            style="background-color: {todo.state ? "green" : "red"}"
            />
    </div>

    <button type="submit" on:click|preventDefault={handleUpdate}>Update</button>
    <button type="button" >Delete</button>
</form>

{/if}
