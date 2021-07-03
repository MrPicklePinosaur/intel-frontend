
<script lang="ts">
    let count = 0;
    function incCount() {
        ++count;
    }
</script>

<main>
	<h1>count at {count}</h1>
    <button on:click={incCount}>click me</button>
</main>

<style>
</style>

