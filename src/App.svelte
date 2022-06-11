<script>
  import FeedbackList from '../src/lib/FeedbackList.svelte';
  import FeedbackForm from './lib/FeedbackForm.svelte';
  import FeedbackStats from './lib/FeedbackStats.svelte';
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>
