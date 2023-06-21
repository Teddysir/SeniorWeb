import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Edit from "../../Img/edit.svg";
import Erase from "../../Img/erase.svg";
import axios from "axios";

const TaskList = () => {

    const [memoList, setMemoList] = useState([]);
    const [editingMemoId, setEditingMemoId] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    const [updatedContent, setUpdatedContent] = useState("");

    useEffect(()=>{
        axios.get("/memos")
            .then((response)=>{
                setMemoList(response.data);
            })
            .catch((error)=>{
                console.error("잘못된 요청입니다: ",error);
            });
    },[memoList]);


    const handleDeleteMemo = (id)=> {
        axios.delete(`/memos/${id}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("잘못된 요청입니다!", error);
            });
    };

    const handleUpdateMemo = (id) => {
        setEditingMemoId(id);
        const memo = memoList.find((memo) => memo.id === id);
        setUpdatedName(memo.name);
        setUpdatedContent(memo.content);
    };

    const handleSaveUpdatedMemo = (id) => {
        if (updatedName.trim() !== "" && updatedContent.trim() !== "") {
            const updateData = {
                name: updatedName,
                content: updatedContent,
            };

            axios
                .put(`/memos/${id}`, updateData)
                .then((response) => {
                    console.log(response.data);
                    setEditingMemoId(null);
                    setUpdatedName("");
                    setUpdatedContent("");
                })
                .catch((error) => {
                    console.log("잘못된 요청입니다!", error);
                });
        }
    };

    return (
        <Container>
            {memoList.map((memo) => (
                <MemoContainer key={memo.id}>
                    {editingMemoId === memo.id ? (
                        <MemoContent>
                            <MemoInput
                                type="text"
                                value={updatedName}
                                onChange={(e) => setUpdatedName(e.target.value)}
                            />
                            <MemoInput
                                type="text"
                                value={updatedContent}
                                onChange={(e) => setUpdatedContent(e.target.value)}
                            />
                        </MemoContent>
                    ) : (
                        <MemoContent>
                            <MemoTitle>{memo.name}</MemoTitle>
                            <MemoText>{memo.content}</MemoText>
                        </MemoContent>
                    )}

                    <IconContainer>
                        {editingMemoId === memo.id ? (
                            <Icon
                                src={Edit}
                                onClick={() => handleSaveUpdatedMemo(memo.id)}
                            ></Icon>
                        ) : (
                            <Icon src={Edit} onClick={() => handleUpdateMemo(memo.id)} />
                        )}
                        <Icon src={Erase} onClick={() => handleDeleteMemo(memo.id)} />
                    </IconContainer>
                </MemoContainer>
            ))}
        </Container>
    );
};


export default TaskList

const Container = styled.div`
    width: 70vw;
    margin:8px;
`;

const MemoContainer = styled.div`
    background: white;
    border-radius: 16px;
    box-shadow: 0 3px 3px #ccc;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 8px;
    padding: 8px;
`;

const MemoTitle = styled.p`
    font-size:18px;
    color: #555;
    font-weight: 500;
`;

const MemoText = styled.p`
    font-size: 14px;
    color: #999;
    margin-top: 5px;
`

const MemoInput = styled.input`
  width: 100%;
  height: rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  
  background: white;
  border-radius: 8px;
  border-color: rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  font-size: 18px;
  color: #999;
`;

const MemoContent = styled.div`
  display: flex;
  flex-direction: column;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
`

const Icon = styled.img`
    width: 32px;
    margin-right: 16px;

    &:hover {
      cursor: pointer;
    }
`;



