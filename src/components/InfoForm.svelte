
<script lang="ts">

import { getGraduateData } from '../services/data.services.js';

type FormDisplay = {
    id: number,
    display: string
}

// options for dropdown
let fosOptions: FormDisplay[] = [
    {id: 0, display: "Education"},
    {id: 1, display: "Visual and performing arts, and communications technologies"},
    {id: 2, display: "Humanities"},
    {id: 3, display: "Social and behavioral sciences and law"},
    {id: 4, display: "Business, management and public administration"},
    {id: 5, display: "Physical and life sciences and technologies"},
    {id: 6, display: "Mathematics, computer and information sciences"},
    {id: 7, display: "Architecture, engineering, and related technologies"},
    {id: 8, display: "Agriculture, natural resources and conservation"},
    {id: 9, display: "Health and related fields"},
    {id: 10, display: "Personal, protective and transportation services"},
    {id: 11, display: "Other instructional programs"}
];
let genderOptions: FormDisplay[] = [
    { id: 0, display: 'Male'},
    { id: 1, display: 'Female'},
]

// bindings for form inputs
let formFos: number = -1;
let formAge: number = 18;
let formGender: number = -1;

// callback from parent
export let onFormResponse;

async function submitForm() {
    const resp = await getGraduateData(formFos, formAge, formGender);
    onFormResponse(resp);
}

</script>

<div id="form-container">
<form on:submit|preventDefault="{submitForm}">
    <label class="form-label">Field of Study</label>
    <select class="form-dropdown" bind:value="{formFos}" required>
        <option hidden disabled selected value>select</option> 
        {#each fosOptions as option}
            <option value="{option.id}">{option.display}</option>
        {/each}        
    </select>

    <label class="form-label">Age</label>
    <input class="form-numberfield" type="number" min=0 step=1 bind:value="{formAge}">

    <label class="form-label">Gender</label>
    <select class="form-dropdown" bind:value="{formGender}" required>
        <option hidden disabled selected value>select</option> 
        {#each genderOptions as option}
            <option value="{option.id}">{option.display}</option>
        {/each}        
    </select>

    <button class="form-submit-button" type="submit">submit</button>
</form>
</div>

<style global lang="postcss">
#form-container {
    @apply w-9/12 grid bg-white shadow-xl rounded-lg place-items-center px-10 py-5
}

.form-label {
    @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2
}
.form-numberfield {
    @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
}
.form-dropdown {
    @apply block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
}
.form-submit-button {
    @apply bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center my-2
}

/* hide number input buttons */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
    -moz-appearance:textfield;
}
</style>

