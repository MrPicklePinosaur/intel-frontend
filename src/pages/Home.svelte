
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

<div id="main-container">
<div id="chart-container">
{#if rawDataset.length != 0}
    <p class="result-text">Your recommended educational qualification is "{optimalEducation}"</p>
    <Chart
        data="{chartData}"
        type="bar"
    />
    <select class="chart-dropdown" bind:value="{dataMode}" on:change="{calculateVisibleData}">
        <option value="{GraphMode.Income}">income</option>
        <option value="{GraphMode.GraduateCount}">graduate count</option>
    </select>
{:else}
    <div id="prechart-container">
        <img class="splash-img" src="images/visualization.svg" />
        <p>Fill out the form to get your data!</p>
    </div>
{/if}
</div>
<InfoForm onFormResponse={updateChart} />
</div>

<style global lang="postcss">
#main-container {
    @apply grid grid-cols-3 gap-x-4 p-4 justify-items-center
}
#chart-container {
    @apply col-span-2 w-11/12 bg-white shadow-xl rounded-lg place-items-center mx-10
}
#prechart-container {
    @apply flex flex-col p-10
}
#subprechart-container {
}
.result-text {
    @apply text-2xl mx-2 my-1
}
.chart-dropdown {
    @apply block appearance-none w-max m-2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
}
.splash-img {
    @apply w-2/6
}
</style>

