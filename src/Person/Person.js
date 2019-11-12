import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: white;
  width: 60%;
  margin: 15px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 15px;
  text-align: center;

  @media (max-width: 500px) {
    background-color: #f5f5f5;
    border-color: black;
  }
`;

const person = props => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
