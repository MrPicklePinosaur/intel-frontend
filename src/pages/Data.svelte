
<script lang="ts">
    import Chart from 'svelte-frappe-charts';
    import InfoForm from '../components/InfoForm.svelte';

    enum GraphMode {
        Income,
        GraduateCount
    };

    let dataMode: GraphMode = GraphMode.Income;
    let rawDataset = [];     // dataset including both count and income
    let chartData = {
        labels: ['Career or technical certificate','Career or technical diploma','Undergraduate degree','Professional degree','Master\'s degree','Doctoral degree'],
        datasets: []
    };

    // callback when form updates
    function updateChart(newValues) {
        rawDataset = newValues;
        calculateVisibleData();
    }

    // update what is shown on the graph
    function calculateVisibleData() {

        // set new visible data points depending on graph mode
        if (dataMode == GraphMode.Income) {
            chartData.datasets = [{ values: rawDataset.map(datapoint => datapoint.avg_income) }];
        } else if (dataMode == GraphMode.GraduateCount) {
            chartData.datasets = [{ values: rawDataset.map(datapoint => datapoint.avg_count) }];
        } else {
            chartData.datasets = [];
        }

    }
</script>

<div>
    <InfoForm onFormResponse={updateChart} />
    {#if rawDataset.length != 0}
    <Chart
        data="{chartData}"
        type="bar"
        title="Chart"
        colors="{(dataMode == GraphMode.Income) ? ['#7cd6fd'] : ['#743ee2']}"
    />
    <select bind:value="{dataMode}" on:change="{calculateVisibleData}">
        <option value="{GraphMode.Income}">income</option>
        <option value="{GraphMode.GraduateCount}">graduate count</option>
    </select>
    {/if}
</div>

<style global lang="postcss">
</style>

