import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
//import Weather from "./Weather";

const HeaderCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const changePage = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Logo>
        <LogoLink>
          <LogoImg src="/images/LG_logo.png" />
        </LogoLink>
      </Logo>
      <CategoryList active={pathname === '/main' ? 'true' : 'false'} onClick={() => changePage("/main")}>
        홈
      </CategoryList>
      {/* <CategoryList active={pathname === '/Category/tvdrama' ? 'true' : 'false'} onClick={() => changePage("/Category/tvdrama")}>
        얄라얄라
      </CategoryList> */}
      <CategoryList active={pathname === '/Category/tvshow' ? 'true' : 'false'} onClick={() => changePage("/Category/tvshow")}>
        TV방송
      </CategoryList>
      <CategoryList active={pathname === '/Category/movie' ? 'true' : 'false'} onClick={() => changePage("/Category/movie")}>
        영화
      </CategoryList>
      <CategoryList active={pathname === '/Category/kids' ? 'true' : 'false'} onClick={() => changePage("/Category/kids")}>
        키즈
      </CategoryList>
      <CategoryList active={pathname === '/Category/animation' ? 'true' : 'false'} onClick={() => changePage("/Category/animation")}>
        애니메이션
      </CategoryList>
      
       {/*<CategoryList active={pathname === '/search' ? 'true' : 'false'} onClick={() => changePage("/search")}>
        검색
      </CategoryList>
      
       {/*<WeatherContainer>
        <Weather />
      </WeatherContainer> */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #181818;
  list-style-type: none;
  margin: 15px -100px;
`;

const Logo = styled.li`
  margin: 0.1px 50px 0 80px;
`;

const LogoLink = styled.a`
    height: 68px;
`;

const LogoImg = styled.img`
  margin: 0;
  width: 310px;
  height: 300px;
  object-fit: contain;
  align-items: center;
`;

const CategoryList = styled.li`
  color: ${props => (props.active === 'true' ? '#ED174D' : 'white')};
  font-size: 20px;
  margin: 0px 20px 5px 60px;
  position: relative;
  cursor: pointer;

  /* 카테고리 클릭시 밑줄 기능 - 주석처리
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${props => (props.active === 'true' ? '#ED174D' : 'transparent')};
    bottom: 0;
    left: 0;
    transition: background-color 0.3s ease;
  }
  */

  &:hover {
    color: #ED174D;
  }
`;

/* weather컨데이너
const WeatherContainer = styled.div`
  margin-left: 50px; 
  display: flex;
  align-items: center;
`;*/

export default HeaderCategory;