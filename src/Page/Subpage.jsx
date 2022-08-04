import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Subpage = () => {

    let ids = useParams();
    ids = ids.id
    const todos = useSelector((state) => state.todos)
    const todo = todos.find((todo) => todo.id == ids)
    // console.log(ids)
    // console.log(todo)



    return (
        <div>
            <Subbox>
                <div>
                    <Contentbox>
                        <h4>ID : {todo.id}</h4>
                        <Link to='/'><Subbtn>이전으로</Subbtn></Link>
                    </Contentbox>
                    <h2>{todo.title}</h2>
                    <p>{todo.body}</p>
                </div>

            </Subbox>
        </div>
    )
};

export default Subpage;

const Subbox = styled.div`
    width: 400px;
    margin : 300px auto;
    padding : 30px;
    border : 1px solid gray;
    border-radius: 10px;
`
const Contentbox = styled.div`
    display: flex;
    justify-content: space-between;
`
const Subbtn = styled.button`
    padding: 10px 30px; 
    background: white;
    border-radius: 10px;
    border : 1px solid green;
    cursor : pointer
`