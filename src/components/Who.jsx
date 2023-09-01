import React from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, RenderTexture, Text} from '@react-three/drei'
import Cube from './Cube'

const Section = styled.div`
height: 100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align:center;
width:1250px;
display:flex;
justify-content:space-between;
`;

const Left = styled.div`
flex:1;

@media only screen and (max-width: 768px){
display: none;
}
`;

const Title = styled.h1`
font-size:74px;

@media only screen and (max-width: 768px){
  font-size:60px;
}
`;


const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
gap:20px;

@media only screen and (max-width: 768px){
align-items:center;
text-align: center;
}
`;

const WhatIDo = styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const Line = styled.img`
height:5px;
`;

const Subtitle = styled.h2`
color: #da4ea2;
`;

const Desc = styled.p`
font-size:24px;
color:lightgray:
`;

const Button = styled.button`
background-color:#da4ea2;
color:white;
font-weight:500;
width:100px;
padding:10px;
border:none;
border-radius:5px;
cursor:pointer;
`;


const Who = () => {
  return (
    <Section>
    <Container>
        <Left>                
        <Canvas camera={{fov:25, position:[5,5,5]}}>
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>
    <Cube />
    </Canvas>
        </Left>
        <Right> 
        <Title>Title</Title>
        <WhatIDo>
<Line src="./img/line.png" />
<Subtitle>What I Do</Subtitle>
        </WhatIDo>
        <Desc>lorem ipsum dolor</Desc>
        <Button>See Works</Button>
        </Right>
    </Container>
    </Section>
  )
}

export default Who