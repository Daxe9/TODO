<script>
import logo from './assets/svelte.png'
import {
    Router,
    Route,
    useNavigate
} from 'svelte-navigator'
import Todolist from './lib/Todolist.svelte';
import Todo from './lib/Todo.svelte';

function handleNavigation() {
    window.location.href = "/"
}
</script>

<Router>
    <div class="img-wrapper" style="width: 100%;">
        <img src={logo} on:click={handleNavigation} id="homelink" alt="svelte logo">
    </div>
    <div>
        <Route path="/" component={Todolist} />
        <!-- CANNOT UNDERSTAND WHAT PRIMARY DOES -->
        <Route path="/todo/:id" component={Todo} primary={false}/>
    </div>
</Router>
