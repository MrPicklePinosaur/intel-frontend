
<script lang="ts">
    import Chart from 'svelte-frappe-charts';
    import InfoForm from '../components/InfoForm.svelte';

    let data = {
        labels: ['Career or technical certificate','Career or technical diploma','Undergraduate degree','Professional degree','Master\'s degree','Doctoral degree'],
        datasets: [
            {
                values: [10, 12, 3, 9, 8, 15, 9]
            }
        ]
    };

    let chartRef;
    function updateChart() {

    }
</script>

<div>
    <InfoForm />
    <Chart
        data="{data}"
        type="bar"
        title="Chart"
        bind:this={chartRef}
    />
</div>

<style global lang="postcss">
</style>

