import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #1995AD;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;

`
const Announcement = () => {
  return (
    <Container>
        Hurry! Avail Today's Offer! Flat 20% Off Discount [ Use Coupon Code : TAPPZZ20 ]
    </Container>
  )
}

export default Announcement
