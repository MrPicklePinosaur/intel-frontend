
<script lang="ts">
    import { Router, Link, Route } from 'svelte-routing';
    import Home from './pages/Home.svelte';
    
    export let url = '';
</script>

<main>
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

