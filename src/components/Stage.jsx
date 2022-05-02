import React from "react";
import Cell from "./Cell";
<<<<<<< HEAD
import { StyledStage } from "./styles/StyledStage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
=======

const Stage = ({ stage }) => (
  <div><Cell /></div>
>>>>>>> 8faaf944d88717c1dba283627ac0ee1145fe8e01
)

export default Stage;