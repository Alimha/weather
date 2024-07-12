import React from 'react'
import s from './Current.module.scss'
import { useSelector } from 'react-redux'
import { weatherSelector } from "../../store/weather/weatherSlice"
import { getTime } from "../../utils/getTime"
import { weatherName } from "../../utils/getImg"
import { headerBg, temp, davlenie,osadki, wind } from "../../utils/exportImg"


const Current = () => {
    
    const { data } = useSelector(weatherSelector)
    const time = getTime(data.timezone)
    const description = data.current.weather[0].description
    const img = weatherName[description] ?? weatherName['пасмурно']
    const items = [
        {
            img: temp,
            text: 'Температура',
            value: `${Math.round(data.current.temp)}° - ощущается как ${Math.round(data.current.feels_like)}°`
        },
        {
            img: davlenie,
            text: 'Давление ',
            value: data.current.pressure
        },
        {
            img: osadki,
            text: 'Облачность',
            value: data.current.clouds + '%'
        },
        {
            img: wind,
            text: 'Ветер',
            value: data.current.wind_speed + 'м/с'
        },
    ]
    
  return (
    <>
        <section className={s.current}>
            <div className={s.current__left}>
                <p className={s.current__left_degree}>
                    {Math.round(data.current.temp)}°
                </p>
                <p className={s.current__left_today}>Сегодня</p>
                <p className={s.current__left_time}>Время: {time}</p>
                <p className={s.current__left_city}>Город: {data.timezone.split('/')[1]}</p>
                <img src={img} alt="" className={s.current__left_img} />
            </div>
            <div className={s.current__right}>
                <img src={headerBg} alt="" className={s.current__right_img} />
                {items.map((item) => (      
                    <div key={item.text} className={s.current__right_item}>
                        <div className={s.current__right_item_icon}>
                            <img src={item.img} alt="" />
                        </div>
                        <p className={s.current__right_item_text}>{item.text}</p>
                        <p className={s.current__right_item_value}>{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Current