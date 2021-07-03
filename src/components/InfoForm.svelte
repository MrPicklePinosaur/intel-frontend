
<script lang="ts">

type FormDisplay = {
    id: number,
    display: string
}

let fosOptions: FormDisplay[] = [
    { id: 1, display: 'Computer Science'},
    { id: 2, display: 'Applied Mathematics'},
];
let genderOptions: FormDisplay[] = [
    { id: 1, display: 'Male'},
    { id: 2, display: 'Female'},
    { id: 3, display: 'Other'},
]

// bindings for form inputs
let formFos: number = -1;
let formAge: number = 18;
let formGender: number = -1;

function submitForm() {
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

