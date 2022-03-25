import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const CountDownAds = ({ startdate, starttime, url }) => {
  const oneSecondTime = 1000
  const oneMinuteTime = oneSecondTime * 60
  const oneHourTime = oneMinuteTime * 60
  const oneDayTime = oneHourTime * 24
  const [days, setDays] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  useEffect(() => {
    setInterval(eachTime, 1000)
  }, [])
  const eachTime = () => {
    let startingDate = new Date(startdate)
    let timeSplit = starttime.split(':')
    startingDate.setHours(timeSplit[0])
    startingDate.setMinutes(timeSplit[1])
    startingDate.setSeconds(timeSplit[2])
    let currentDate = new Date()

    let remainTime = startingDate - currentDate

    let remainDay = convertMiliToDay(remainTime)
    setDays(remainDay)
    let remainHour = convertMiliToHour(
      remainTime - convertDaysToMili(remainDay)
    )
    setHours(remainHour)
    let remainMinute = convertMiliToMinute(
      remainTime - convertDaysToMili(remainDay) - convertHourToMili(remainHour)
    )
    setMinutes(remainMinute)
    let remainSecond = convertMiliToSeconds(
      remainTime -
        convertDaysToMili(remainDay) -
        convertHourToMili(remainHour) -
        convertMinutesToMilli(remainMinute)
    )
    setSeconds(remainSecond)
    console.log(
      `${remainDay} : ${remainHour} : ${remainMinute} : ${remainSecond}`
    )
  }
  const convertDaysToMili = (days) => {
    return days * oneDayTime
  }
  const convertHourToMili = (hours) => {
    return hours * oneHourTime
  }
  const convertMinutesToMilli = (mins) => {
    return mins * oneMinuteTime
  }
  const convertMiliToHour = (mili) => {
    return parseInt(mili / 1000 / 60 / 60)
  }
  const convertMiliToMinute = (mili) => {
    return parseInt(mili / 1000 / 60)
  }
  const convertMiliToSeconds = (mili) => {
    return parseInt(mili / 1000)
  }
  const convertMiliToDay = (mili) => {
    return parseInt(mili / 1000 / 60 / 60 / 24)
  }

  return (
    <div className={styles.countdown}>
      {url && <img src={url} width='200' />}

      <div className={styles.pallet}>
        <div className={styles.each}>
          <div className={styles.digit}>{days}</div>
          <div className={styles.txt}>DAYS</div>
        </div>
        <div className={styles.each}>
          <div className={styles.digit}>{hours}</div>
          <div className={styles.txt}>HRS</div>
        </div>
        <div className={styles.each}>
          <div className={styles.digit}>{minutes}</div>
          <div className={styles.txt}>MINS</div>
        </div>
        <div className={styles.each}>
          <div className={styles.digit}>{seconds}</div>
          <div className={styles.txt}>SECS</div>
        </div>
      </div>
    </div>
  )
}
