// A view element with a title and an animation that cycles through the strings in an array
import { useState } from 'react'

export default function AnimatedTextBox({ array }) {
  const [index, setIndex] = useState(0)

  function incrementIndex() {
    index >= array.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  return (
    <div className="grid place-items-center">
      <p
        className="text-semibold animate-fadeInOut p-5 text-center text-4xl text-white sm:text-7xl"
        onAnimationIteration={incrementIndex}
      >
        {array[index]}
      </p>
    </div>
  )
}
