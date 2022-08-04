import React from "react";
import Todolist from "./todolist";
import styled from "styled-components";

function Todo({todos,setDone}) {
   
    return (
        <div>
            <div>
                <h2>Working..🔥</h2>
                <TodoContain>
                    {todos.map( (todo) => {
                    if(!todo.isDone){
                    return(
                    <Todolist title={todo.title} body={todo.body} key={todo.id} id={todo.id} todo={todo} isDone={todo.isDone} setDone={setDone} todos={todos}/>)
                    }else{return null}
                    })}
                </TodoContain>
                
            </div>

            <div>
                <h2>Done..🎖</h2>
                <TodoContain>
                {todos.map( (todo) => {
                    if(todo.isDone){
                    return(
                    <Todolist title={todo.title} body={todo.body} key={todo.id} id={todo.id} todo={todo} isDone={todo.isDone} setDone={setDone} todos={todos}/>)
                    }else{return null}
                    })}
                </TodoContain>
            </div>
        </div>

    );
}

export default Todo;

const TodoContain = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap : wrap

`