


//Functions
const addTodo = () => {
  const todoInput = document.querySelector('.todo-input');
  
  if(todoInput.value == ''){
    return;
  }

  
  //alert(`タスク追加:${todoInput.value}`);

  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  const newTodo = document.createElement('li');

  // タスク名　追加
  const todoContent = document.createElement('span');
  todoContent.innerText = todoInput.value;
  todoContent.addEventListener('click', editTodo); //追加
  todoContent.classList.add('todo-content');
  newTodo.appendChild(todoContent);


  //完了 未着手ボタン
  const checkButton = document.createElement('button');
  checkButton.addEventListener('click', switchState);
  checkButton.innerHTML = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  //削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener("click", deleteTodo);
  deleteButton.innerHTML = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);


//　上記内容をlistへ追加
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);

  todoInput.value = '';

  // todo名　追加
  /*
  const todoContent = document.createElement("span")
  todoContent.innerText = todoInput.value
  todoContent.addEventListener("click", editTodo)
  todoContent.classList.add("todo-content")
  newTodo.appendChild(todoContent)
*/
/*
  //完了 未着手ボタン
  const checkButton = document.createElement("button")
  //checkButton.addEventListener("click", switchState)
  checkButton.innerHTML = `□ 未着手`
  checkButton.classList.add("check-button")
  newTodo.appendChild(checkButton)

  //削除ボタン
  const deleteButton = document.createElement("button")
  deleteButton.addEventListener("click", deleteTodo)
  deleteButton.innerHTML = `削除`
  deleteButton.classList.add("delete-button")
  newTodo.appendChild(deleteButton)

  todoList.appendChild(newTodo)

   todoInput.value = ""
   */
}
const switchState = (e) => {
  let itemToSwitchState = e.target;
  if (!itemToSwitchState.classList.contains('complete')){
    itemToSwitchState.innerHTML ='完了';
    itemToSwitchState.classList.add('complete');
  }else{
    itemToSwitchState.innerHTML ='□ 未着手';
    itemToSwitchState.classList.remove('complete');
  }
}

const deleteTodo = (e) => {
  let itemToDelete = e.target.parentNode;
  itemToDelete.remove();
}

const editTodo = (e) => {
  let itemToEdit = e.target;
  if(!itemToEdit.classList.contains('todo-content')){
    return;
  }
  // if(!itemToEdit.classList.contains('on')) {
    // itemToEdit.classList.add('on');
    let contentBeforeEdit = itemToEdit.textContent;
    itemToEdit.innerHTML = '<input type="text" class="editbox" value="'+contentBeforeEdit+'" />';
    const editContent = document.querySelector('.editbox');
    
    const saveTodoContent  = (e) => {
        let itemToSave = e.target;
        // itemToSave.parentNode.classList.remove('on');
        let txtvalue = itemToSave.value;
        // if (txtvalue ==''){
        //  txtvalue = itemToSave.defaultValue;
        // }
        itemToSave.parentNode.innerHTML = txtvalue;
    }
    editContent.addEventListener('blur',saveTodoContent);
  // }
}

//Select DOM
const addButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
addButton.addEventListener('click', addTodo);

/*

function deleteTodo(e) {
  //console.log(e.target)
  //alert("タスク削除")
  let itemToDelete = e.target.parentNode
  itemToDelete.remove()
}

function editTodo(e) {
  //alert("タスク編集")
  if(!this.classList.contains("on")) {
    this.classList.add("on");
    let contentBeforeEdit = this.textContent
    this.innerHTML = '<input type="text" class="editbox" value="'+contentBeforeEdit+'" />'
    const editContent = document.querySelector(".editbox")

    let saveTodoContent = function(){
      this.parentNode.classList.remove('on')
      let txtvalue = this.value
      if (txtvalue ==""){
       txtvalue = this.defaultValue
      }
      this.parentNode.innerHTML = txtvalue
    }

    editContent.addEventListener("blur",saveTodoContent)
  }
}
*/
