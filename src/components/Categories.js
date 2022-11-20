import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Container = styled.div`
    display: flex;
    padding: 0 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`
const Categories = () => {
  return (
    <div>
        <Title>
            <AutoAwesomeIcon style={{color:"#1995AD", fontSize:40}}/>
                SHOP BY CATEGORY
            <AutoAwesomeIcon style={{color:"#1995AD", fontSize:40}}/>
            </Title>
      <Container>
        {categories.map((item)=>
            <CategoryItem item={item} key={item.id}/>
        )}
      </Container>
    </div>
  )
}

export default Categories
