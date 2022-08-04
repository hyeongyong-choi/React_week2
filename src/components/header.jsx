import React from "react";
import styled from "styled-components";

function Header() {

  return (
    <HeaderContain>
        <Headerh4>My Todo List</Headerh4>
        <Headerh4>React</Headerh4>
    </HeaderContain>
  );
}

export default Header;


const HeaderContain = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
`

const Headerh4 = styled.h4`
    margin: 10px
`
