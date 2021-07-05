
<script lang="ts">
    import { Router, Link, Route } from 'svelte-routing';
    import Home from './pages/Home.svelte';
    import Nav from './components/Nav.svelte'; 
    
    export let url = '';
</script>

<main>
    <Nav/>
    <Router url="{url}">
        <div>
            <Route path="/" component="{Home}" />
        </div>
    </Router>
</main>

<style global lang="postcss">
    /* @tailwind base; */
    /* @tailwind components; */
    /* @tailwind utilities; */
</style>

