<script>
  import { FeedbackStore } from '../stores';
  import Card from './Card.svelte';
  export let item;

  const handleDelete = (/** @type {any} */ itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id !== itemId);
    });
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.comment}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
