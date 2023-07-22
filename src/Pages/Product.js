import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import { ProductItem } from '../data';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Image = styled.img`
  width: 70%;
  height: 75vh;
  object-fit: cover;
  border-radius: 8%;
  transition: all 0.5s ease;
  &:hover{
    box-shadow: 5px 5px 5px grey;
    transform: scale(1.07);
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  border-style: solid;
  border-color: #BCBABE;
  border-width: 2px;
  width: 20px;
  height: 20px;
  border-radius: 30%;
  background-color: ${(props) => props.color};
  margin: 0px 7px 0px 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    box-shadow: 3px 3px 3px grey;
    transform: scale(1.1);
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
const Item = styled.div`
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
      box-shadow: 3px 3px 3px grey;
      transform: scale(1.1);
    }
`
const Product = () => {
    const [count, setCount] = React.useState(1)
    
    const increment = () => {
        setCount(count => count + 1);
      };

      const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1);
          }
      };
     
  return (
    <Container>
        {ProductItem.map((item) =>
        <Wrapper key={item.id}>
            <ImgContainer>
            <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.description}</Desc>
            <Price>$ {item.price}</Price>
            <FilterContainer>
                <Filter>
                <FilterTitle>COLOR</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="white" />
                </Filter>
                <Filter>
                <FilterTitle>SIZE</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
            <Button>ADD TO CART</Button>
                <AmountContainer>
                    <Item><RemoveIcon onClick={decrement}/></Item>
                    <Amount>{count}</Amount>
                    <Item><AddIcon onClick={increment}/></Item>
                </AmountContainer>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
      )};
    </Container>
  );
};

export default Product;
