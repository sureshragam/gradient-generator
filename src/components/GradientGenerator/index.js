import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Heading,
  Para,
  Directions,
  Colors,
  Color,
  Input,
} from './styledComponents'
import {CustomButton} from '../GradientDirectionItem/styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: 'to top,#8ae323,#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
  }

  onChangeDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {color1, color2, activeGradientDirection} = this.state
    console.log(activeGradientDirection, color1, color2)
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {color1, color2, gradientValue, activeGradientDirection} = this.state
    return (
      <GradientContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS color Gradient</Heading>
        <Para>Choose Direction</Para>
        <Directions>
          {gradientDirectionsList.map(eachDirection => {
            const {directionId} = eachDirection
            return (
              <GradientDirectionItem
                directionDetails={eachDirection}
                key={directionId}
                onChangeDirection={this.onChangeDirection}
                activeGradientDirection={activeGradientDirection}
              />
            )
          })}
        </Directions>
        <Para>Pick the Colors</Para>
        <Colors>
          <Color>
            <p>{color1}</p>
            <Input type="color" onChange={this.onChangeColor1} value={color1} />
          </Color>
          <Color>
            <p>{color2}</p>
            <Input type="color" onChange={this.onChangeColor2} value={color2} />
          </Color>
        </Colors>
        <CustomButton generate onClick={this.onGenerate}>
          Generate
        </CustomButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
