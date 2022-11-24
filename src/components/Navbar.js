import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';

import LogoImage from '../images/tappzLogo2.png'
import LogoGif from '../images/shopping-cart.gif'
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
    height: 60px;
    margin-bottom: 1.5em;
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
    margin-right: 4rem;
`
const Item = styled.div`
cursor: pointer;
display: flex;
align-items: center;
margin-left: 25px;
`
const ItemSpeedDial = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    right: 1rem;
    bottom: 3.9rem;
`
const actions = [
    { icon: <PersonIcon />, name: 'Account' },
    { icon: <InventoryIcon />, name: 'Orders' },
    { icon: <FavoriteIcon />, name: 'Wishlist' },
    { icon: <LogoutIcon />, name: 'Logout' },
  ];
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
        </RightContainer>
      </Wrapper>
      <ItemSpeedDial>
                <SpeedDial
                    ariaLabel="SpeedDial"
                    icon={<AccountCircleIcon style={{fontSize:32,color:"black"}}/>}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                    direction = "down"
                    background-color= "none"
                    sx={{ '& .MuiFab-primary': {width: 40, height: 40,backgroundColor: 'white', boxShadow:"none",'&:hover': {backgroundColor: 'white'}} }}
                >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
                </SpeedDial>
            </ItemSpeedDial>
            
    </Container>
    
  )
}

export default Navbar
