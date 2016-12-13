
const increment = () => ({ type: 'INCREMENT_COUNT' });

const decrement = () => ({ type: 'DECREMENT_COUNT' });

const multiply = (multiplier) => (dispatch, getState) => {
    dispatch({
        type: 'SET_COUNT',
        count: getState().counter.count * multiplier
    });
};


export {
    increment,
    decrement,
    multiply
};
