"use client"

import { useEffect, useState } from "react";
import style from "./page.module.scss"

function getTimeSinceMay182025(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  formatted: string;
} {
  const targetDate = new Date(2025, 4, 18, 3, 57); // 18 мая 2025, 5:57
  const currentDate = new Date();

  const differenceMs = Math.max(0, currentDate.getTime() - targetDate.getTime());

  // Рассчитываем общее количество единиц времени
  const totalSeconds = Math.floor(differenceMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Рассчитываем остатки для форматирования
  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;
  const days = totalDays;

  // Форматируем строку
  const formatted = `${days}.${hours.toString().padStart(2, '0')}.${minutes.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalHours,
    totalMinutes,
    totalSeconds,
    formatted
  };
}



export default function Home() {
  const [Time, setTime] = useState<any>()

  useEffect(() => {
    setTime(getTimeSinceMay182025())
  }, [])


  return (
    <div className={style.main}>
      <div className={style.block}>
        <p className={style.blockT}>Мы впервые списались ТТ</p>
        <p>03.05.2025 <span>3 мая</span></p>
        <p className={style.zakhar}>20:41 - У меня такая штука</p>
        <p className={style.sasha}>22:19 - ахаха дада)</p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Мы впервые списались ТГ</p>
        <p>04.05.2025 <span>4 мая</span></p>
        <p className={style.zakhar}>19:27 - Привет, я с тт)</p>
        <p className={style.sasha}>19:34 - привет привет</p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Начали встречаться</p>
        <p>18.05.2025 <span>18 мая</span></p>
        <p className={style.sasha}>05:57 - давай встречаться</p>
        <p className={style.zakhar}>05:57 - Ну раз уж ты настаиваешь</p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Мы встречаеся уже</p>
        <p>Формат: <span>{Time && Time.formatted ? Time.formatted : "Загрузка"}</span> <span>дд:чч:мм:cc</span></p>
        <p>Дней: <span>{Time && Time.days ? Time.days : "Загрузка"}</span></p>
        <p>Часов: <span>{Time && Time.totalHours ? Time.totalHours : "Загрузка"}</span></p>
        <p>Минут: <span>{Time && Time.totalMinutes ? Time.totalMinutes : "Загрузка"}</span></p>
        <p>Секунд: <span>{Time && Time.totalSeconds ? Time.totalSeconds : "Загрузка"} </span></p>
      </div>
    </div>
  );
}
