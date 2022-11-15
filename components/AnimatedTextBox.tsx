// A view element with a title and an animation that cycles through the strings in an array

import { Typography } from '@mui/material'
import { useState } from 'react'

export default function AnimatedTextBox({ title, array }) {
  const [index, setIndex] = useState(0)

  function incrementIndex() {
    console.log(index)
    index >= array.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  return (
    <div className="backdrop-blur-sm">
      <Typography component="h2" variant="h5">
        {title}
      </Typography>

      <p className="animate-fadeInOut" onAnimationIteration={incrementIndex}>
        {array[index]}
      </p>
    </div>
  )
}
