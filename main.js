console.log("Hello World");

/**
 * Initial state object
 *   - filter is set to show all tasks (done and not done)
 *   - fake tasks have been created
 */
const initialState = {
  filter: 'SHOW_ALL',
  tasks: [
    { id: 1, title: 'Learn HTML', done: true },
    { id: 2, title: 'Learn React', done: false },
    { id: 3, title: 'Learn Redux', done: false }
  ]
};