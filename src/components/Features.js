import React from 'react'
import styled from 'styled-components'
import { features } from '../data'

const Container = styled.div`
    display: flex;
    padding: 2rem 2rem 0;
    justify-content: space-between;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    margin: 10px 40px 10px 40px;
`
const Features = () => {
  return (
    <div>
      <Container>
        {features.map((item)=>
            <Image src={item.img}/>
        )}
      </Container>
    </div>
  )
}

export default Features
