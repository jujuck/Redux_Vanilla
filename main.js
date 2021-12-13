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

/**
 * Reducer
 *   - first we handle the CHANGE_FILTER action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.filter
      };

    case 'TOGGLE_DONE':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.taskId
            ? {
              ...task, done: !task.done
            }
            : { ...task }
        )
      };
    default:
      return state;
  }
};

/**
 * Get createStore from Redux and use it
 * to create the store
 */
const { createStore } = Redux;
const store = createStore(reducer);

/**
 * User Interface
 *   - Dispatch actions on user-triggered events
 *   - Refresh display when state is changed
 */
const taskList = document.getElementById('task-list');
const filterSelector = document.getElementById('filter-selector');

filterSelector.addEventListener(
  'change', (event) => console.log(event.target.value)
);

const render = () => {

  const { tasks, filter } = store.getState();

  // Filter tasks according to filter value
  const filteredTasks = tasks.filter(
    task => (
      filter === 'SHOW_ALL'
      || (filter === 'SHOW_TODO' && !task.done)
      || (filter === 'SHOW_DONE' && task.done)
    )
  );

  const listItems = filteredTasks.map(task => {
    const style = task.done ? 'text-decoration: line-through' : '';
    return `<li style='${style}'>${task.title}</li>`
  })

  taskList.innerHTML = listItems.join('');
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    // Get id of the task that matches the task item
    const taskId = tasks[i].id;
    taskItems[i].addEventListener(
      'click',
      () => console.log(`click on ${taskId}`)
    );
  }
}

render();

store.subscribe(render);
