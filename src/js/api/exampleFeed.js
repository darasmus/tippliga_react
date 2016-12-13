const ENDPOINT = '/mock/feed.json';

const transform = response => response;

export default {
    get: () => fetch(ENDPOINT)
        .then(response => response.json())
        .then(transform)
};
