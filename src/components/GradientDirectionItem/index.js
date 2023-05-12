// Write your code here
import {Component} from 'react'
import {Direction, CustomButton} from './styledComponents'

class GradientDirectionItem extends Component {
  onClickButton = () => {
    const {directionDetails, onChangeDirection} = this.props
    const {value} = directionDetails
    onChangeDirection(value)
  }

  render() {
    const {directionDetails, activeGradientDirection} = this.props
    const {directionId, displayText, value} = directionDetails

    return (
      <Direction key={directionId}>
        <CustomButton
          type="button"
          onClick={this.onClickButton}
          active={activeGradientDirection === value}
        >
          {displayText}
        </CustomButton>
      </Direction>
    )
  }
}

export default GradientDirectionItem
