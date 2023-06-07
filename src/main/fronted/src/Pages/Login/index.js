import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const Login = () => {
    return(
        <Page>
            <Title>Welcome to To Do List</Title>
            <Subtitle>Pleas, insert your informations to access your tasks.</Subtitle>
            <FieldName>Email</FieldName>
            <InputField placeholder="Insert your email"></InputField>
            <FieldName>Password</FieldName>
            <InputField placeholder="Insert your password" type="password"></InputField>
            <KeepSigned><Checkbox/><Subtitle>Remember me</Subtitle></KeepSigned>

            <Link to="/">
                <SignIn>Sing In</SignIn>
            </Link>

            <Subtitle>Don't have an account? <a>Sign Up</a></Subtitle>
        </Page>

    )
};

export default Login;

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`

export const Title = styled.h1`
    color: #333;
    font-family: Roboto, Arial;
    font-size: 40px;
    margin: 12px;
`

export const Subtitle = styled.h2`
    color: #999;
    font-family: Roboto, Arial
    font-size:16px;
    font-weight: 300;
    margin:8px;
    box-sizing: border-box;
    
    a{
        color:#7f56da;
        font-weight:bold;
        
        &:hover{
            color:#613db7;
            cursor:pointer;
        }
    }
`

export const FieldName = styled.h2`
    color: #777;
    font-family: Roboto, Arial;
    font-size: 16px;
    font-weight: ;
    margin:8px;
`

export const InputField = styled.input`
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
`

export const SignIn = styled.button`
    width: 25vw;
    height:40px;
    border-radius:8px;
    background: #7f56da;
    color: white;
    font-size: 16px;
    border: 0px;
    font-weight:400;
    
    margin:16px 0px;
    
    &:hover{
        background: #613db7;
        cursor:pointer;
    }
`

export const Checkbox = styled.input.attrs({type:'checkbox'})`
    border: 1px solid #333;
    margin-right:8px;
    height: 16px;
    width: 16px;
`

export const KeepSigned = styled.div`
    display: flex;
    justify-content:left;
    align-items:center;
    margin-top:16px;
`
