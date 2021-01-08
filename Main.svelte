<script>

    import Card from '@smui/card';
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield'
    import { onMount } from 'svelte';
    import { data } from './store.js';
    

    $:{
        counter = $data.counter;
        info = $data.info;
    }

    let counter = 0;
    let info = '';

    onMount(async () => {
        });

        

 
        data.useLocalStorage();


        
   function increment() {
    $data.counter = $data.counter + 1;
   }

   function decrement() {
    $data.counter = $data.counter - 1;
}

</script>


<div>

<Card>
    <Button on:click={decrement}>Minus</Button>
    <Label>{counter}</Label>
    <Button on:click={increment}>Plus</Button>
</Card>

<Card>
    <Textfield
    bind:value={$data.info}
    label="Super Text"
    input$aria-controls="super-helper"
    input$aria-describedby="super-helper"
  />
</Card>

</div>