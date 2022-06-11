import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
]);