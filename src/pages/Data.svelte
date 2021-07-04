
<script lang="ts">
    import Chart from 'svelte-frappe-charts';
    import InfoForm from '../components/InfoForm.svelte';

    enum GraphMode {
        Income,
        GraduateCount
    };
    const educationList = ['Career or technical certificate','Career or technical diploma','Undergraduate degree','Professional degree','Master\'s degree','Doctoral degree'];

    let dataMode: GraphMode = GraphMode.Income;
    /* $: chartColor = (dataMode == GraphMode.Income) ? ['#444444'] : ['#440000']; */
    let rawDataset = [];     // dataset including both count and income
    let chartData = {
        labels: educationList,
        datasets: []
    };
    $: optimalEducation = calculateOptimalEducation(rawDataset);

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

    function calculateOptimalEducation(dataset) {
        const incomes = dataset.map(datapoint => datapoint.avg_income)
        const ind = incomes.indexOf(Math.max(...incomes));
        return educationList[ind];
    }

</script>

<div>
    <InfoForm onFormResponse={updateChart} />
    {#if rawDataset.length != 0}
    <p>{(dataMode == GraphMode.Income) ? 'Income' : 'Number of Graduates'}</p>
    <Chart
        data="{chartData}"
        type="bar"
    />
    <select bind:value="{dataMode}" on:change="{calculateVisibleData}">
        <option value="{GraphMode.Income}">income</option>
        <option value="{GraphMode.GraduateCount}">graduate count</option>
    </select>
    <p>Your recommended educational qualification is "{optimalEducation}"</p>
    {/if}
</div>

<style global lang="postcss">
</style>

