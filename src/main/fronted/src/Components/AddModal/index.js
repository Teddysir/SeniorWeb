import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";


const AddModal = ({ toggleModal }) => {

    const [eventName,setEventName] = useState('');
    const [eventDetails, setEventDetails] = useState('');

    const handleAdd = () => {
        axios.post('/memos', {
            name: eventName,
            content: eventDetails
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        toggleModal();
    }

  return (
      <Background>
        <Container>
          <Text>이벤트 이름</Text>
          <TitleInput
              placeholder="이벤트 이름"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
          />
          <Text>세부 정보</Text>
          <Select
              placeholder="세부 정보"
              value={eventDetails}
              onChange={(e)=>setEventDetails(e.target.value)}
          ></Select>
          <Buttons>
            <CancelButton onClick={toggleModal}>Cancel</CancelButton>
            <AddButton onClick={handleAdd}>Add</AddButton>
          </Buttons>
        </Container>
      </Background>
  );
};

export default AddModal;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 40vw;
  height: 40vh;
  background: white;
  border-radius: 16px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
`;

export const Buttons = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CancelButton = styled.button`
  background: white;
  border: 1px solid blue;
  color: blue;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  margin: 8px;

  &:hover {
    border: 2px solid blue;
    font-weight: 500;
    background: #eee;
  }
`;

export const AddButton = styled.button`
  background: white;
  border: 1px solid green;
  color: green;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  font-size: 20px;
  margin: 8px;

  &:hover {
    border: 2px solid green;
    font-weight: 500;
    background: #eee;
  }
`;

export const TitleInput = styled.input`
  width: 32vw;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 20px;
  color: #555;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const Select = styled.input`
  width: 32vw;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 20px;
  color: #555;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: #555;
`;
