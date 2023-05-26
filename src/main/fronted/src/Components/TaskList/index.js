import React, {useEffect, useState} from "react";
import styled,{css} from "styled-components";
import Edit from "../../Img/edit.svg";
import Erase from "../../Img/erase.svg";
import axios from "axios";



const TaskList = ({id,name,list,color,done}) => {

    const [memoList, setMemoList] = useState([]);

    useEffect(()=>{
        axios.get("/memos")
            .then((response)=>{
                setMemoList(response.data);
            })
            .catch((error)=>{
                console.error("잘못된 요청입니다: ",error);
            });
    },[]);

    return(
        <Container>
            {memoList.map((memo)=>(
                <div key={memo.id}>
                    <p>{memo.name}</p>
                    <p>{memo.content}</p>
                </div>
            ))}
        </Container>
    );
};

export default TaskList

const Container = styled.div`
    height:80px;
    width: 70vw;
    background: white;
    border-radius: 16px;
    box-shadow: 0 3px 3px #ccc;
    display: flex;
    margin: 8px;
    box-sizing: border-box;
`;

