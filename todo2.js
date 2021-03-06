//Functions
const addTodo = () => {
  const todoInput = document.querySelector('.todo-input');
  
  if(todoInput.value == ''){
    return;
  }
  //alert(`タスク追加:${todoInput.value}`);

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');

  // タスク名　追加
  const todoContent = document.createElement('span');
  todoContent.innerText = todoInput.value;
  todoContent.addEventListener('click', editTodo); //追加
  todoContent.classList.add('todo-content');
  newTodo.appendChild(todoContent);
  todoDiv.appendChild(newTodo);

  //完了 未着手ボタン
  const checkButton = document.createElement('button');
  checkButton.addEventListener('click', switchState);
  // checkButton.innerHTML = '□未着手';
  checkButton.innerHTML = '<i class="far fa-square"></i>';
  checkButton.classList.add('check-button');
  todoDiv.appendChild(checkButton);

  //削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener("click", deleteTodo);
  deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteButton.classList.add('delete-button');
  // newTodo.appendChild(deleteButton);
  todoDiv.appendChild(deleteButton);


//　上記内容をlistへ追加
  todoList.appendChild(todoDiv);

  todoInput.value = '';

}
const switchState = (e) => {
  let itemToSwitchState = e.target;
  if (!itemToSwitchState.classList.contains('check-button')){
    itemToSwitchState = e.target.parentNode;
  }
  if (!itemToSwitchState.parentNode.classList.contains('complete')){
    // itemToSwitchState.innerHTML ='完了';
    itemToSwitchState.innerHTML ='<i class="far fa-check-square"></i>';
    itemToSwitchState.parentNode.classList.add('complete');
  }else{
    // itemToSwitchState.innerHTML ='□ 未着手';
    itemToSwitchState.innerHTML ='<i class="far fa-square"></i>';
    itemToSwitchState.parentNode.classList.remove('complete');
  }
}

const deleteTodo = (e) => {
  let itemToDelete = e.target.parentNode.parentNode;
  itemToDelete.remove();
}

const editTodo = (e) => {
  let itemToEdit = e.target;
  if(!itemToEdit.classList.contains('todo-content')){
    return;
  }
    let contentBeforeEdit = itemToEdit.textContent;
    itemToEdit.innerHTML = '<input type="text" class="editbox" value="'+contentBeforeEdit+'" />';
    const editContent = document.querySelector('.editbox');
    
    const saveTodoContent  = (e) => {
        let itemToSave = e.target;
        let txtvalue = itemToSave.value;
        if (txtvalue ==''){
         txtvalue = itemToSave.defaultValue;
        }
        itemToSave.parentNode.innerHTML = txtvalue;
    }
    editContent.addEventListener('blur',saveTodoContent);
}

//Select DOM
const addButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
addButton.addEventListener('click', addTodo);
