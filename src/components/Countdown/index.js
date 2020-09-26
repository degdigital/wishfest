import React, { useState, useEffect } from "react"

const calculateTimeLeft = () => {
  const difference = +new Date("2021-06-18") - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return timeLeft
}

const Countdown = ({ siteTitle }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return (
    <section className="countdown">
      <div className="page-wrapper page-wrapper--narrow">
        <div className="countdown__item">
          <div className="countdown__value">{timeLeft.days}</div>
          <div className="countdown__label">days</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__value">{timeLeft.hours}</div>
          <div className="countdown__label">hours</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__value">{timeLeft.minutes}</div>
          <div className="countdown__label">minutes</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__value">{timeLeft.seconds}</div>
          <div className="countdown__label">seconds</div>
        </div>
      </div>
    </section>
  )
}

export default Countdown
