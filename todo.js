

//Select DOM
const todoInput = document.querySelector(".todo-input")
const addButton = document.querySelector(".add-button")
//const deleteButton = document.querySelector(".delete-button")
//const todoContent = document.querySelector(".todo-content")
const todoList = document.querySelector(".todo-list")

//Event Listeners
addButton.addEventListener("click", addTodo)
//todoList.addEventListener("click", editOrdeleteOrStateChange)
//deleteButton.addEventListener("click", deleteTodo)
//todoContent[0].addEventListener("click", editTodo)


//Functions
function addTodo(e) {
  if(todoInput.value == ""){
    return
  }
  //alert("タスク追加")

  const newTodo = document.createElement("li")

  // todo名　追加
  const todoContent = document.createElement("span")
  todoContent.innerText = todoInput.value
  todoContent.addEventListener("click", editTodo)
  todoContent.classList.add("todo-content")
  newTodo.appendChild(todoContent)

  //完了 未着手ボタン
  const checkButton = document.createElement("button")
  checkButton.addEventListener("click", switchState)
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
}

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
function switchState(e){
  //alert("状態切り替え")
  let itemToSwitchState = e.target
  if (!itemToSwitchState.classList.contains('complete')){
    itemToSwitchState.innerHTML =`完了`
    itemToSwitchState.classList.add('complete')
  }else{
    itemToSwitchState.innerHTML =`□ 未着手`
    itemToSwitchState.classList.remove('complete')
  }
}