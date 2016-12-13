const now = () => Math.round(new Date().getTime() / 1000);

export default {
    get: (key) => {
        if (window.localStorage) {
            // window.localStorage.clear();
            const localStorage = JSON.parse(window.localStorage.getItem(key)) || {};
            if (!localStorage.expiration || (localStorage.expiration && localStorage.expiration > now())) {
                return localStorage.data;
            }
            window.localStorage.removeItem(key);
        }
        return null;
    },
    set: (key, data, expiration) => {
        if (window.localStorage) {
            return window.localStorage.setItem(key, JSON.stringify({
                data,
                expiration: expiration ? now() + expiration : null
            }));
        }
        return false;
    }
};
