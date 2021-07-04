
<script lang="ts">
    import { Router, Link, Route } from 'svelte-routing';
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Data from './pages/Data.svelte';
    
    export let url = '';
</script>

<main>
    <Router url="{url}">
        <div>
            <Route path="/" component="{Home}" />
            <Route path="/about" component="{About}" />
            <Route path="/data" component="{Data}" />
        </div>
    </Router>
</main>

<style global lang="postcss">
    /* @tailwind base; */
    /* @tailwind components; */
    /* @tailwind utilities; */
</style>

