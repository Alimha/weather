import React from 'react'
import { getDate } from "../../utils/getDate"
import { weatherName } from "../../utils/getImg"
import s from './Daily.module.scss'

const Day = ({ day, i }) => {
    
    const description = day.weather[0].description
    const img = weatherName[description] ?? weatherName['пасмурно']
    const weekDay       = i == 0 ? 'Сегодня' : i == 1 ? 'Завтра' : getDate(day.dt, 'weekday')
    const month         = getDate(day.dt, 'month')
    const monthDay      = getDate(day.dt, 'day')
    
    
  return (
    <div className={s.daily__item}>
        <p className={s.daily__item_day}>{weekDay}</p>
        <p className={s.daily__item_date}>{monthDay} {month}</p>
        <img src={img} alt="" className={s.daily__item_img} />
        <p className={s.daily__item_temp}>Макс {Math.round(day.temp.max)}°</p>
        <p className={s.daily__item_temp2}>Мин {Math.round(day.temp.min)}°</p>
        <p className={s.daily__item_info}>{description}</p>
    </div>
  )
}

export default Day