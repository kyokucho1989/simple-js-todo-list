//Functions

const editTodo = (e) => {
  let itemToEdit = e.target;
  console.log(e.target);
  console.log(this);
  if(!itemToEdit.classList.contains('todo-content1')){
    return;
  }
  if(!itemToEdit.classList.contains('on')) {
    itemToEdit.classList.add('on');
    let contentBeforeEdit = itemToEdit.textContent;
    itemToEdit.innerHTML = '<input type="text" class="editbox1" value="'+contentBeforeEdit+'" />';
    const editContent1 = document.querySelector('.editbox1');
    
    const saveTodoContent  = (e) => {
        let itemToSave = e.target;
        itemToSave.parentNode.classList.remove('on');
        let txtvalue = itemToSave.value;
        if (txtvalue ==''){
         txtvalue = itemToSave.defaultValue;
        }
        itemToSave.parentNode.innerHTML = txtvalue;
        
    }
    editContent1.addEventListener('blur',saveTodoContent);
  }
}


function editTodo2(e) {
  console.log(e.target);
  console.log(this);
  if(!this.classList.contains("on")) {
    this.classList.add("on");
    let contentBeforeEdit = this.textContent
    this.innerHTML = '<input type="text" class="editbox2" value="'+contentBeforeEdit+'" />'
    const editContent2 = document.querySelector(".editbox2")

    let saveTodoContent = function(){
     // alert('save')
      this.parentNode.classList.remove('on')
      let txtvalue = this.value
      if (txtvalue ==""){
       txtvalue = this.defaultValue
      }
      this.parentNode.innerHTML = txtvalue
    
    }
    editContent2.addEventListener("blur",saveTodoContent)
  }
}

//Select DOM
const todoContent = document.querySelector('.todo-content1');
todoContent.addEventListener('click', editTodo);
const todoContent2 = document.querySelector('.todo-content2');
todoContent2.addEventListener('click', editTodo2);

