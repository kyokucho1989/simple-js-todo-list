//Select DOM

const todoButton = document.querySelector(".todo-button")
const deleteButton = document.querySelector(".delete-button")
const todoContent = document.querySelector(".task-content")
//Event Listeners
todoButton.addEventListener("click", addTodo)
deleteButton.addEventListener("click", deleteTodo)
todoContent.addEventListener("click", editTodo)
//Functions
function addTodo(e) {
  alert("タスク追加")
}

function deleteTodo(e) {
  alert("タスク削除")
}

function editTodo(e) {
  //alert("タスク編集")
  if(!this.classList.contains("on")) {
    let beforeThis = this
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
/*
function saveTodoContent(todothis,beforeTxt){
  todothis.classList.remove('on')
  let txtvalue = todothis.value
  if (txtvalue ==""){
   // txtvalue = beforeTxt
  }else{
    todothis.innerHTML = txtvalue
  }
  
}
*/
/*
var app = new Vue({
  el: '#app',
  data:{
    todolists: [
      {id:1, content:"歯磨き" ,isCompleted: false ,isEditing: false},
      {id:2, content:"買い物", isCompleted: false,isEditing: false},
      {id:3, content:"勉強", isCompleted: false, isEditing: false}
    ]
  },
  
  methods: {
    addTask: function(){

      var new_content = this.$refs.new_content.value;
      console.log (new_content);
      if (new_content.trim().length == 0){
        return;
      }
      var ids = this.todolists.map(function(todo) {
        return todo.id;
      });
      var max_id = ids.reduce(function(a, b) {
        return Math.max(a, b);
      });

      this.todolists.push(
        {content: new_content,id:max_id+1,isCompleted: false ,isEditing: false}
      );
      this.todolists.forEach((todo) => todo.isEditing = false);
    },
    
    deleteTask: function(item){
      var index = this.todolists.indexOf(item);
      this.todolists.splice(index,1);
    },
    editTask: function(item){
      
      //this.beforeEditCache = item.content;
      this.todolists.forEach((todo) => todo.isEditing = false);
      
     item.isEditing = true;
    },
    doneEdit: function(item){
      /*
      if (item.content.trim() == '') {
        item.content = this.beforeEditCache
      }*/
      /*
      item.isEditing = false
    },
    
    changeState: function(item){
      item.isCompleted = !item.isCompleted;
    }
  }
});
*/