import React from "react";
import styled from "styled-components";

const SidebarItem = ({name,icon}) => {
    return(
        <Container>
            <Icon src={icon} />
            <Name>{name}</Name>
        </Container>
    );
};

export default SidebarItem;

const Icon = styled.img`
    width: 20px;
    margin: 8px 16px;
`

const Name = styled.h3`
    font-size:16px;
    font-weight:500;
    `;

const Container = styled.div`
    height :40px;
    width: 15vw;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #777
    font-weight: 100;
    margin 4px 0;
    
    &:hover {
        cursor: pointer;
    } 
    `;

