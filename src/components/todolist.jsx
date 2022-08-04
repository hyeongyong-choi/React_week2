import React from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import { Delete } from "../redux/modules/todo";
import { Change } from "../redux/modules/todo";
import { Link } from "react-router-dom";




function Todolist({title,body,id,isDone}) {

    const dispatch = useDispatch();
    const onClickDelete = () =>{
        dispatch(Delete(id))
    }
    const onClickChange = () =>{
        dispatch(Change({isDone,id}))
    }
    
   
    return (
        <TodolistBox>
            <StyledLink to={'/Subpage/' + id }><p>상세보기🔍</p></StyledLink>
            
            <Todolisth2>{title}</Todolisth2>
            <p>{body}</p>
            <div>
                <ButtonDel onClick={()=>onClickDelete()}>삭제하기</ButtonDel>
                <ButtonCom onClick={()=>onClickChange()}>{isDone ? '취소하기' : '완료하기'}</ButtonCom>
            </div>
        </TodolistBox>
    );
}

export default Todolist;

const TodolistBox = styled.div`
    width: 250px;
    border-radius: 10px;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    padding : 10px;
    
    /* display: flex; */
`

const ButtonDel = styled.button`
    width: 100px;
    padding : 10px;
    border : 2px solid red;
    background-color: white;
    border-radius: 10px;
    margin-right: 10px;
    cursor : pointer;
`
const ButtonCom = styled.button`
    padding : 10px;
    width: 100px;
    border : 2px solid green;
    background-color: white;
    border-radius: 10px;
    cursor : pointer;
`
const Todolisth2 = styled.h2`
    margin : 0px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color : green
`