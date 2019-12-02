import React from 'react'

import step0 from '../images/step_0.png'
import step1 from '../images/step_1.png'
import step2 from '../images/step_2.png'
import step3 from '../images/step_3.png'
import step4 from '../images/step_4.png'
import step5 from '../images/step_5.png'
import step6 from '../images/step_6.png'
import step7 from '../images/step_7.png'

const images = [step0, step1, step2, step3, step4, step5, step6, step7]

const Snowman = props => {
  return <img src={images[props.bananas]} alt="snowman" />
}

export default Snowman
