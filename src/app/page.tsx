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

function get2(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  formatted: string;
} {
  const targetDate = new Date(2025, 4, 3, 22, 19);
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

function get3(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  formatted: string;
} {
  const targetDate = new Date(2025, 4, 4, 19, 34); // 04.05.2025 19:34
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

function get4(): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  formatted: string;
} {
  const targetDate = new Date(2025, 8, 8, 22, 4); // 08.09.2025 22:04
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Time, setTime] = useState<any>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Time2, setTime2] = useState<any>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Time3, setTime3] = useState<any>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Time4, setTime4] = useState<any>()

  useEffect(() => {
    setTime(getTimeSinceMay182025())
    const i = setInterval(() => {
      setTime(getTimeSinceMay182025())
      setTime2(get2())
      setTime3(get3)
      setTime4(get4)
    }, 1000);

    return () => {
      clearInterval(i)
    }
  }, [])


  return (
    <div className={style.main}>
      <div className={style.block}>
        <p className={style.blockT}>Нам осталось прожить вместе, любя друг друга: </p>
        <p>Формат: ∞ </p>
        <p>Дней: ∞ </p>
        <p>Часов: ∞</p>
        <p>Минут: ∞ </p>
        <p>Секунд: ∞ </p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Мы встречаеся уже</p>
        <p>Формат: <span>{Time && Time.formatted ? Time.formatted : "Загрузка"}</span> <span>дд:чч:мм:cc</span></p>
        <p>Дней: <span>{Time && Time.days ? Time.days : "Загрузка"}</span></p>
        <p>Часов: <span>{Time && Time.totalHours ? Time.totalHours : "Загрузка"}</span></p>
        <p>Минут: <span>{Time && Time.totalMinutes ? Time.totalMinutes : "Загрузка"}</span></p>
        <p>Секунд: <span>{Time && Time.totalSeconds ? Time.totalSeconds : "Загрузка"} </span></p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Мы знакомы уже</p>
        <p>Формат: <span>{Time2 && Time2.formatted ? Time2.formatted : "Загрузка"}</span> <span>дд:чч:мм:cc</span></p>
        <p>Дней: <span>{Time2 && Time2.days ? Time2.days : "Загрузка"}</span></p>
        <p>Часов: <span>{Time2 && Time2.totalHours ? Time2.totalHours : "Загрузка"}</span></p>
        <p>Минут: <span>{Time2 && Time2.totalMinutes ? Time2.totalMinutes : "Загрузка"}</span></p>
        <p>Секунд: <span>{Time2 && Time2.totalSeconds ? Time2.totalSeconds : "Загрузка"} </span></p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Мы впервые списались ТТ ({Time2 && Time2.formatted ? Time2.formatted : "Загрузка"})</p>
        <p>03.05.2025 <span>3 мая</span></p>
        <p className={style.zakhar}>20:41 - У меня такая штука</p>
        <p className={style.sasha}>22:19 - ахаха дада)</p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Мы впервые списались ТГ ({Time3 && Time3.formatted ? Time3.formatted : "Загрузка"})</p>
        <p>04.05.2025 <span>4 мая</span></p>
        <p className={style.zakhar}>19:27 - Привет, я с тт)</p>
        <p className={style.sasha}>19:34 - привет привет</p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Начали встречаться ({Time && Time.formatted ? Time.formatted : "Загрузка"})</p>
        <p>18.05.2025 <span>18 мая</span></p>
        <p className={style.sasha}>05:57 - давай встречаться</p>
        <p className={style.zakhar}>05:57 - Ну раз уж ты настаиваешь</p>
      </div>

      <div className={style.block}>
        <p className={style.blockT}>Особенный день ({Time4 && Time4.formatted ? Time4.formatted : "Загрузка"})</p>
        <p>08.09.2025 <span>8 сентября</span></p>
        <p className={style.zakhar}>21:55 - Я клянусь котик, что я готов. Трезво и без эмоция говоря. Прожить с тобой всю жизнь вместе. Без измен, без другой хуйни, только с уважением к тебе и к нам. Я искренне заявляю что я люблю тебя. Правда. Я искренне говорю что ты красивая, умная и душевная. Я клянусь что с этого момента, этот час когда я с полной уверенностью в нас заявляю. Что я готов без дороги назад, не смотря на проблемы, быть с тобой. Чтобы не случилось. Но прожить эту жизнь с тобой. Выйти замуж за тебя и родить с тобой прекрасных наших маленьких  копий. Без дороги назад, только дорога вперед где только мы двоем. Я клянусь.</p>
        <p className={style.sasha}>22:04 - я клянусь, что я выбираю тебя. осознанно, искренне и всем сердцем. я выбираю жить эту жизнь рядом с тобой, любить тебя каждый день, уважать и беречь наш мир, который мы строим вместе.
          я клянусь быть рядом не только в моменты радости, но и в трудные времена, поддерживать тебя, когда будет тяжело, и делить с тобой каждый шаг, от мелочей до самых больших событий нашей жизни.
          я клянусь хранить верность тебе, нашим мечтам, нашей любви. никогда не искать никого другого, потому что для меня есть только ты.
          я клянусь прожить с тобой эту жизнь так, чтобы мы смогли однажды оглянуться назад и сказать, мы сделали это вместе, мы были счастливы. я хочу замуж за тебя, хочу детей от тебя, хочу наш общий путь, и только вперёд, без дороги назад.
          я клянусь любить тебя каждый день всё сильнее и никогда не забывать, какое счастье быть твоей</p>
      </div>
    </div>
  );
}
