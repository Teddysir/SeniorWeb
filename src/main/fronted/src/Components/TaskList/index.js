import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Edit from "../../Img/edit.svg";
import Erase from "../../Img/erase.svg";
import axios from "axios";



const TaskList = () => {

    const [memoList, setMemoList] = useState([]);

    useEffect(()=>{
        axios.get("/memos")
            .then((response)=>{
                setMemoList(response.data);
            })
            .catch((error)=>{
                console.error("잘못된 요청입니다: ",error);
            });
    },[memoList]); // deps에 [memoList] 를 설정해줌으로서 memoList가 추가 삭제 될때마다 업데이트된다.


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
        const name = prompt("수정할 이름을 입력하세요.");
        const content = prompt("수정할 내용을 입력하세요.");

        if (name && content) {
            const updateData = {
                name: name,
                content: content,
            };

            axios
                .put(`/memos/${id}`, updateData)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log("잘못된 요청입니다!", error);
                });
        }
    };


    return(
        <Container>
            {memoList.map((memo)=>(
                <MemoContainer key={memo.id}>
                    <MemoContent>
                        <MemoTitle>{memo.name}</MemoTitle>
                        <MemoText>{memo.content}</MemoText>
                    </MemoContent>

                    <IconContainer>
                        <Icon src={Edit} onClick={()=>handleUpdateMemo(memo.id)}></Icon>
                        <Icon src={Erase} onClick={()=>handleDeleteMemo(memo.id)}/>
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

const MemoContent = styled.p``

const MemoText = styled.p`
    font-size: 14px;
    color: #999;
    margin-top: 4px;
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



