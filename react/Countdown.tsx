//react/Countdown.tsx
import React, { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'

const DEFAULT_TARGET_DATE = (new Date('2020-06-25')).toString()

interface CountdownProps {
  targetDate: string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ targetDate = DEFAULT_TARGET_DATE }) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })
  tick(targetDate, setTime)
  return <div>
    {/* <h1>{targetDate}</h1> */}
    <h1>`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` </h1>
  </div>
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown