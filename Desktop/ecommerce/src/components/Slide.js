import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {slideritems} from '../data' 


const Container = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  
  position: relative;
  margin-top:50px;
  overflow:hidden;


`
const Arrow = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  top: 0;
  bottom: 0;
  left:${props=>props.direction === "left" && "10px"};
  right:${props=>props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opaacity:0.5;
  z-index: 2;
  

`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform:translateX(${(props)=>props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`
const Slider = styled.div`
 width:100vw;
 height:100vh;
 display: flex;
align-items:center;
background-color:#${props=>props.bg};
`;
const ImageContainer = styled.div`
  height:100%
  flex: 1;

`;
const Image =styled.img`
  height:70%;
  margin-top: 10px;
`
const InfoContainer = styled.div`
  flex:1;
`
const Title =styled.h1`
  font-size:50px;
`;
const Desc =styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight:500px;
  letter-spacing:3px;
`
const Button =styled.button`
  padding: 20px;
  font-size:20px;
  background-color: transparent;
  cursor:pointer;
`;
const Slide = () => {
  const[sliderIndex,setSliderIndex]=useState(0);
  const handleClick = (direction)=>{
    if(direction === "left"){
      setSliderIndex(sliderIndex > 0 ? sliderIndex -1 : 2);
    }else{
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  }
  return (
    <Container>
      <Arrow direction= "left" onClick = {()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderIndex = {sliderIndex}>
        {slideritems.map((item)=>(
          <Slider bg={item.bg}>
          <ImageContainer>
            <Image  src={item.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>
                {item.title}
            </Title>
            <Desc>
              {item.desc}
            </Desc>
            <Button>
      	        GET IT NOW
            </Button>
          </InfoContainer>
        </Slider>
        ))}
       
        
      </Wrapper>
      <Arrow direction="right"  onClick = {()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
       
      
    </Container>
  )
}

export default Slide