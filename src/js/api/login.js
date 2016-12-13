const ENDPOINT = '/api/login.php';

const transform = response => {
    return response;
};

export default {
    post: (data) => {
        return fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .then(transform);
    }
};
