const ENDPOINT = '/api/user.php';

const transform = response => response;

export default {
    get: () => fetch(ENDPOINT)
        .then((response) => {
            if (response.status === 401) {
                throw new Error('Not autorized');
            }
            return response.json();
        })
        .then(transform)
};
