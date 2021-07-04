
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

<form on:submit|preventDefault="{submitForm}">
    <select bind:value="{formFos}">
        <option hidden disabled selected value>select</option> 
        {#each fosOptions as option}
            <option value="{option.id}">{option.display}</option>
        {/each}        
    </select>

    <input type="number" bind:value="{formAge}">

    <select bind:value="{formGender}">
        <option hidden disabled selected value>select</option> 
        {#each genderOptions as option}
            <option value="{option.id}">{option.display}</option>
        {/each}        
    </select>

    <button type="submit">submit</button>
</form>

<style global lang="postcss">
</style>

