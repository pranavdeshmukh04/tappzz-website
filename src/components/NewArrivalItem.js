import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8%;
  background-color: rgba(0,0,0,0.3);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
  flex: 0 24%;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F2;
  position: relative;
  border-radius: 8%;
  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 250px;
  height: 250px;
  opacity: 50%;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-top: 18rem;
  transition: all 0.5s ease;

  &:hover{
    background-color: #${props => props.bg};
    transform: scale(1.1);
  }
`
const NewArrivalItem = ({item}) => {
  return (
    <Container>
      <Circle/>
  
      <Image src={item.img}/>
      <Info>
        <Icon bg="1995AD">
          <ShoppingCartIcon style={{color: "black"}}/>
        </Icon>
        <Icon bg="F00F56">
          <FavoriteIcon style={{color: "black"}}/>
        </Icon>
      </Info>
    </Container>
  )
}

export default NewArrivalItem
