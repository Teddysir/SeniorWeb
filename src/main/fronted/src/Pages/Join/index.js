import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Join = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleJoin = () => {
        axios
        .post("/joinProc",{username,password})
            .then((response)=>{
                console.log(response.data);
                window.location.href="/";
            })
                .catch((error)=>{
                    console.error("잘못된 요청입니다.",error);
                });
    };
    return (
        <Container>
            <Title>Sing Up Page</Title>
            <FormField>
                <FieldName>ID</FieldName>
                <InputField
                    placeholder = "Insert your id"
                    type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
            </FormField>
            <FormField>
                <FieldName>Password</FieldName>
                <InputField
                    placeholder = "Insert your password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            </FormField>
            <Button onClick={handleJoin} >Sign up</Button>
        </Container>

    )
}

export default Join;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`;

const Title = styled.h1`
    color: #777;
    font-size: 24px;
    margin-bottom: 20px;
    font-family: Roboto, Arial;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-family: Roboto, Arial;
`;

const FieldName = styled.label`
    color: #777;
    font-family: Roboto, Arial;
    font-size: 16px;
    font-weight: ;
    margin:8px;
`;

const InputField = styled.input`
    width: 25vw;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #999;
    font-size:16px;
    color:#777;
    box-sizing: border-box;
    
    &focus{
        border: 1px solid #999;
        outline: none;
    }
    
    &::placeholder{
        color: #bbb;
    }
`;

const Button = styled.button`
    width: 10vw;
    height:40px;
    border-radius:8px;
    background: #7f56da;
    color: white;
    font-size: 16px;
    border: 0px;
    font-weight:400;
    font-family: Roboto, Arial;
    
    margin:16px 0px;
    
    &:hover{
        background: #613db7;
        cursor:pointer;
    }
`;

