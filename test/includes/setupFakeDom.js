// setup the fake DOM environment.
//
// Note that we use the synchronous jsdom.jsdom() API
// instead of jsdom.env() because the 'document' and 'window'
// objects must be available when React is require()-d for
// the first time.
import jsdom from 'jsdom';

const setupFakeDOM = () => {
    window.matchMedia = window.matchMedia || function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };
    if (typeof document !== 'undefined') {
        return;
    }

    global.document = jsdom.jsdom('<html><body><div id="app"></div></body></html>');
    global.window = document.defaultView;
    global.navigator = window.navigator;
};
setupFakeDOM();
