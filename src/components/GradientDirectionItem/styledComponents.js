// Style your elements here
import styled from 'styled-components'

export const Direction = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0;
`
export const CustomButton = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  border-style: none;
  margin: 0;
  opacity: ${props => (props.active ? 1 : 0.5)};
  background-color: ${props => (props.generate ? '#00c9b7' : null)};
`
