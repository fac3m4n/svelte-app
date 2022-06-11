<script>
  import { each } from 'svelte/internal';

  export let feedback = [];
</script>

{#each feedback as fb (fb.id)}
  <h3>{fb.comment}</h3>
{/each}
