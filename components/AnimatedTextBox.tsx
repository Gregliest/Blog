// A view element with a title and an animation that cycles through the strings in an array
import { Typography } from '@mui/material'
import { useState } from 'react'

export default function AnimatedTextBox({ title, array }) {
  const [index, setIndex] = useState(0)

  function incrementIndex() {
    index >= array.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  return (
    <div className="backdrop-blur-sm">
      <p className="p-5 text-center text-xl text-white">{title}</p>

      <p
        className="animate-fadeInOut p-5 text-center text-5xl text-white"
        onAnimationIteration={incrementIndex}
      >
        {array[index]}
      </p>
    </div>
  )
}
