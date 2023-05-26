import React from "react";
import styled, { css } from "styled-components";
import Edit from "../../Img/edit.svg";
import Erase from "../../Img/erase.svg";



const TaskCard = ({ id, name, list, color, done }) => {
  return (
    <Container>
      <CheckField>
        <CheckboxRing>
          <CheckFill done={done} />
        </CheckboxRing>
      </CheckField>
      <Description>
        <Name done={done}>{name}</Name>
        <ListBelong>
          <ColorTag color={color} />
          <ListName>{list}</ListName>
        </ListBelong>
      </Description>

      <Icon src={Edit} />
      <Icon src={Erase} />
    </Container>
  );
};

export default TaskCard;





const Container = styled.div`
  height: 80px;
  width: 70vw;
  background: white;
  border-radius: 16px;
  box-shadow: 0 3px 3px #ccc;
  display: flex;
  margin: 8px;
  box-sizing: border-box;
`;
const Name = styled.h2`
  font-size: 22px;
  color: #555;
  margin: 8px 16px;
  font-weight: 500;

  ${(props) =>
    props.done &&
    css`
      color: #bbb;
      font-weight: 400;
      text-decoration: line-through;
    `}
`;
const Icon = styled.img`
  width: 24px;
  margin: 24px;
  background: white;

  &:hover {
    cursor: pointer;
  }
`;
const CheckField = styled.div`
  width: 80px;
  height: 80px;
  border-right: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Description = styled.div`
  height: 80px;
  width: 50vw;
  padding: 6px 8px;
  box-sizing: border-box;
`;
const ListBelong = styled.div`
  height: 20px;
  margin: 0 16px;
  display: flex;
  align-items: center;
`;

const ColorTag = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 6px;
  background: ${(props) => props.color};
`;

const ListName = styled.p`
  font-size: 16px;
  color: #999;
  margin-left: 8px;
  font-weight: 400;
`;

const InvisibleCheck = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CheckboxRing = styled.div`
  background: white;
  height: 24px;
  width: 24px;
  border: 1px solid #7f56da;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
const CheckFill = styled.div`
  background: #7f56da;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  ${(props) =>
    !props.done &&
    css`
      display: none;
    `}
`;
