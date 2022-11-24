import React from 'react'
import styled from 'styled-components'
import { newArrivalItems } from '../data'
import NewArrivalItem from './NewArrivalItem'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from "react-router-dom";
const Container = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
`
const NewArrival = () => {
  return (
    <div>
        <Title>
            <AutoAwesomeIcon style={{color:"#1995AD", fontSize:40}}/>
                NEW ARRIVALS
            <AutoAwesomeIcon style={{color:"#1995AD", fontSize:40}}/>
        </Title>
        <Link to="/product">
            <Container>
            {newArrivalItems.map((item) => (
                <NewArrivalItem item = {item} key={item.id}/>
            ))}
            </Container>
        </Link>
        
    </div>
  )
}

export default NewArrival
