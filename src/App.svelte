<script>
  import FeedbackList from '../src/lib/FeedbackList.svelte';
  import FeedbackForm from './lib/FeedbackForm.svelte';
  import FeedbackStats from './lib/FeedbackStats.svelte';

  let feedback = [
    {
      id: '1',
      rating: 10,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lobortis velit. Curabitur mattis lectus risus, eu pharetra turpis dapibus eget. Praesent hendrerit lacinia volutpat.',
    },
    {
      id: '2',
      rating: 9,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lobortis velit. Curabitur mattis lectus risus, eu pharetra turpis dapibus eget. Praesent hendrerit lacinia volutpat.',
    },
    {
      id: '3',
      rating: 8,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lobortis velit. Curabitur mattis lectus risus, eu pharetra turpis dapibus eget. Praesent hendrerit lacinia volutpat.',
    },
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / count;

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };

  const addFeedback = (e) => {
    const newFeedback = e.detail;
    feedback = [...feedback, newFeedback];
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
