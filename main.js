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
 * User Interface
 *   - Dispatch actions on user-triggered events
 *   - Refresh display when state is changed
 */
const taskList = document.getElementById('task-list');

const render = () => {
  const listItems = initialState.tasks.map(task => {
    const style = task.done ? 'text-decoration: line-through' : '';
    return `<li style='${style}'>${task.title}</li>`
  })

  taskList.innerHTML = listItems.join('');
  const taskItems = taskList.getElementsByTagName('li');
  for (let i = 0; i < taskItems.length; i++) {
    // Get id of the task that matches the task item
    const taskId = initialState.tasks[i].id;
    taskItems[i].addEventListener(
      'click',
      () => console.log(`click on ${taskId}`)
    );
  }
}

render();
