import React, {useState} from "react";
import styled from "styled-components";

import AddTask from "../Components/AddTask";
import AddModal from "../Components/AddModal";
import SidebarItem from "../Components/SidebarItem";
import TaskFill from "../Img/taskFill.png";
import Logo from "../Img/Logo.png";
import Filter from "../Img/filter.svg";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    return (
        <Page>
            <Sidebar>
                <Img src={Logo} />
                <Tabs>
                    <SidebarItem
                        icon={TaskFill}
                        name="Tasks"
                        isActive={true}
                    ></SidebarItem>
                </Tabs>
            </Sidebar>

            <Main>
                <Header>ToDoList</Header>
                <TitleAndFilter>
                    <Title>List</Title>
                    <FilterField>
                        <FilterIcon src={Filter} />
                    </FilterField>
                </TitleAndFilter>
                <AddTask toggleModal={toggleModal} />
            </Main>
            {isModalOpen && <AddModal toggleModal={toggleModal} />}
        </Page>
    );
};

export default Home;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: row;
  background-color: #f5f5f5;
`;

const Sidebar = styled.div`
  height: 100vh;
  width: 18vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  box-sizing: border-box;
`;
const Img = styled.img`
  width: 50px;
  margin: 32px;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;
const Main = styled.div`
  height: 100vh;
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #555;
  margin: 16px;
`;

const TitleAndFilter = styled.div`
  height: 20px;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 4px;
`;

const Title = styled.h3`
  font-size: 24px;
  color: #555;
`;

const FilterField = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
`;

const FilterIcon = styled.img`
  height: 20px;
  margin: 0 8px;
`;
