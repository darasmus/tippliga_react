# CELLULAR React (with Redux) Boilerplate

## Requirments
- npm
- vagrant

## Install
1. Install yarn (`npm install yarn -g`)
2. Install everything else (`yarn`)
3. Install vagrant (`vagrant up`)
4. Open in browser (http://http://cellular-react-redux-boilerplate/)

## Develop
1. Start grunt (`grunt`)

## Structure

### Components
Typical React components.   
Pages are components called from the router directly.

### Store
The whole application-state should be hold in the store.

### Reducer
Only way to mutate the store.  
Creates the store. Every reducer is responsible for his part of the store.

### ActionCreators
Can create a simple action that is directly dispatched.  
Can also be a method that can do asyncronous dispatching of multiple actions with or without the use of a current store (or state of a store). See `multiply` method in `/src/js/actions/counter.js`

### Middleware
A middleware is called on every dispatched action and should be used for everything that needs the state before and after an action is processed. (See http://redux.js.org/docs/advanced/Middleware.html)
