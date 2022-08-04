import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from '../components/header'
import Form from '../components/form'
import Todo from '../components/todo'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Subpage from "./Subpage";

function App() {

  const todos = useSelector((state)=>state.todos)
  const [done, setDone] = useState(false)

  return (
    <Container>
      <Header></Header>
      <Form todos={todos} done={done}></Form>
      <Todo todos={todos} setDone={setDone}></Todo>
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  /* border:1px solid red; */
  margin : 0 auto;

`
