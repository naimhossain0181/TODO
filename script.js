let input=document.querySelector(".input_text_area")
let AddItem=document.querySelector(".submit_area")
let taskShow =document.querySelector(".task_after_added")


AddItem.addEventListener("click" ,adding)

function adding(){
    let item =input.value;
    if(!item){
        alert("fill input")
    }
    else{
        // Add List
        let task_content =document.createElement("div")
        task_content.classList.add("task_content")
        taskShow.appendChild(task_content)

        let task_input =document.createElement("div")
        task_input.classList.add("task_input")
        task_content.appendChild(task_input)

        let text =document.createElement("input")
            text.id=("text")
            text.setAttribute("readonly","readonly")
            text.value=item
            task_input.appendChild(text)

        let task_action=document.createElement("div")
        task_action.classList.add("task_action")
        task_content.appendChild(task_action)

        let edit = document.createElement("button")
        edit.id ="edit"
        edit.textContent="Edit"
        task_action.appendChild(edit)

        let del= document.createElement("button")
        del.id ="del"
        del.textContent="Delete"
        task_action.appendChild(del)

        // delete list
        del.addEventListener("click",function(){
            taskShow.removeChild(task_content)
            
        })
        // edit list
        edit.addEventListener("click",function(){
            if (edit.textContent==="Edit"){
                text.removeAttribute("readonly");
                text.focus()
                edit.textContent="Save"    
            }
            else{
                text.setAttribute("readonly","readonly")
                edit.textContent="Edit"
                
              
            }
           
        })
    }
    input.value=""
}