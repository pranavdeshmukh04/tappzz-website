import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';

import LogoImage from '../images/tappzLogo2.png'
import LogoGif from '../images/shopping-cart.gif'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LeftContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    margin-top: -10px;
    margin-left: 20px;
    width: 70px;
    height: 70px;
`
const LogoTitle = styled.img`
    width: 130px;
    height: 60px;
`
const RightCenterContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchContainer = styled.div`
    border: 1px solid gray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    width: 250px;
    outline: none;
`
const LeftCenterContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`
const NavTitle = styled.div`
    font-size: 17px;
    cursor: pointer;
    margin-left: 25px;
`
const RightContainer = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Item = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 25px;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
            <Logo src={LogoGif}/>
            <LogoTitle src={LogoImage}/>
        </LeftContainer>
        <LeftCenterContainer>
            <NavTitle>MEN</NavTitle>
            <NavTitle>WOMEN</NavTitle>
            <NavTitle>KIDS</NavTitle>
            <NavTitle>HOME & LIVING</NavTitle>
            <NavTitle>BEAUTY</NavTitle>
            <NavTitle>CONTACT US</NavTitle>
        </LeftCenterContainer>

        <RightCenterContainer>
            <SearchContainer>
                <SearchIcon style={{color:"gray", fontSize:16}}/>
                <Input/>
            </SearchContainer>
        </RightCenterContainer>

        <RightContainer>
            <NavTitle>REGISTER</NavTitle>
            <NavTitle>SIGN IN</NavTitle>
            <Item>
                <Badge badgeContent={3} color="primary">
                    <LocalMallIcon style={{fontSize:32}}/>
                </Badge>
            </Item> 
            <Item>
                <AccountCircleIcon style={{fontSize:32}}/>
            </Item>
        </RightContainer>
      </Wrapper>
    </Container>
  )
}

export default Navbar
