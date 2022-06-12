<script>
import plus from "../../../plus.png"
import todoService from "../../../todo-service"

export let location;
export let navigate;

function goToTodo(id) {
    navigate(`/todo/${id}`)
}
</script>

<div>
    <h1 class="title">TODO list
        <img src={plus} alt="plus symbol">
    </h1>
    <div class="todo-container">
        {#await todoService.getTodos() then todos}
        <ul>
            {#each todos as todo}
            <li on:click={() => goToTodo(todo._id)}>
                <div class={todo.state ? "todo done-true" : "todo done-false"}>
                    <div class="todo-content">
                        <div>by <h3 class="author">{todo.author}</h3></div>
                        <h4>{todo.content}</h4>
                    </div>
                </div>
            </li>
            {/each}
        </ul>

        {/await}

    </div>
</div>
