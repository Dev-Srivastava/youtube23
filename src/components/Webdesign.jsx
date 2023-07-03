import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Charm from './Charm'
import styled from 'styled-components'

const Desc = styled.div`
width: 200px;
height: 70px;
padding: 20px;
border-radius: 10px;
background-color:white;
position: absolute;
top: 100px;
right: 100px;

@media only screen and (max-width: 768px){
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
}
`;

const Webdesign = () => {
  return (
    <>
   <Canvas>
   {/* <Stage environment='dawn' intensity={0.6}> */}
   <ambientLight intensity={1}/>
    <directionalLight position={[3,2,1]}/>
 <Charm scale={20}/>
   {/* </Stage> */}
    <OrbitControls enableZoom={false}/>
   </Canvas>
   <Desc>
    lorem ipsum dolor
   </Desc>
    </>
  )
}

export default Webdesign