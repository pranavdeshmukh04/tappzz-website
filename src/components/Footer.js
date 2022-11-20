import React from 'react'
import styled from 'styled-components'
import LogoImage from '../images/tappzLogo2.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
  display: flex;
  background-color: #F1F1F2;
`
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const LogoTitle = styled.img`
    width: 130px;
    height: 60px;
    margin-bottom: -10px;
`

const SocialLogoContainer = styled.div`
  display: flex;
`
const SocialLogo = styled.div`
  margin-top: -15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const CenterContainer = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`
const RightContainer = styled.div`
  flex: 1;
  padding: 20px;
`

const Footer = () => {
  return (
    <Container>
        <LeftContainer>
            <LogoTitle src={LogoImage}/>
            {/* <Description>TAPPZZ Website</Description> */}
            <Title>KEEP IN TOUCH</Title>
            <SocialLogoContainer>
              <SocialLogo>
                <InstagramIcon style={{fontSize:28}}/>
              </SocialLogo>
              <SocialLogo>
                <FacebookIcon style={{fontSize:28}}/>
              </SocialLogo>
              <SocialLogo>
                <TwitterIcon style={{fontSize:28}}/>
              </SocialLogo>
              <SocialLogo>
                <LinkedInIcon style={{fontSize:28}}/>
              </SocialLogo>
            </SocialLogoContainer>
        </LeftContainer>

        <CenterContainer>
          <Title>ONLINE SHOPPING</Title>
          <List>
            <ListItem>MEN</ListItem>
            <ListItem>WOMEN</ListItem>
            <ListItem>KIDS</ListItem>
            <ListItem>HOME & LIVING</ListItem>
            <ListItem>BEAUTY</ListItem>
            <ListItem>GIFT CARDS</ListItem>
          </List>
        </CenterContainer>
        <RightContainer>
          <Title>USEFUL LINKS</Title>
            <List>
              <ListItem>CONTACT US</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>TRACK ORDERS</ListItem>
              <ListItem>SHIPPING</ListItem>
              <ListItem>CANCELLATION</ListItem>
              <ListItem>RETURNS</ListItem>
            </List>
        </RightContainer>
    </Container>
  )
}

export default Footer
