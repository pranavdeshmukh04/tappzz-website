import React from 'react'
import styled from 'styled-components'
import Marquee from'react-fast-marquee'

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
      <Marquee speed={100} gradient={false}>
        HURRY! Avail Today's Offer! Flat 20% Off Discount [ Use Coupon Code : TAPPZZ20 ]
      </Marquee>
    </Container>
  )
}

export default Announcement
