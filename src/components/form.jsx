import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch , useSelector} from "react-redux";
import { Addtodo } from "../redux/modules/todo";


let num = 3
function Form({done}) {
   
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    // const [done, setDone] = useState(false)
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch();
    
    

    let ClickAdd = () =>{
        if(title ==="" || body ===""){
            return alert('빈칸은 안되요')
        }else{
        dispatch(Addtodo({ id:num++ , title, body ,isDone : done}))}
    }

    return (    
        <FormContain>
            <div>
                <Formspan>제목</Formspan>
                <Forminput type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <Formspan>내용</Formspan>
                <Forminput type="text" value={body} onChange={(e)=> setBody(e.target.value) }/>
            </div>
            <Button onClick={()=>{ClickAdd()}}>추가하기</Button>
        </FormContain>
    );
    
}

export default Form;

const FormContain = styled.div`
    background: #ddd;
    width: 100%;
    height:80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Forminput = styled.input`
    border : none;
    border-radius: 10px;
    margin-left:  5px;
    height : 20px;

`

const Formspan = styled.span`
    margin-left : 10px;

`

const Button = styled.button`
    padding : 10px 30px;
    margin-right: 10px;
    cursor : pointer;
    border-radius: 10px;
    border: none;
    background-color: greenyellow;
`