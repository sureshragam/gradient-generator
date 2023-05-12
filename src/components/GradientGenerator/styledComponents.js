// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  background: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  text-align: center;
  color: white;
  font-size: 40px;
  margin-top: 0px;
`
export const Para = styled.p`
  text-align: center;
  color: white;
  font-size: 26px;
  margin-top: 0px;
`
export const Directions = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Colors = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
`
export const Color = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  padding: 0px;
  background-color: transparent;
  outline: none;
  border-style: none;
  width: 100px;
  height: 40px;
`
