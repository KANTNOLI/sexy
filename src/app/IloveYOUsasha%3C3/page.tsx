"use client"


import { useEffect, useState } from "react";
import style from "./page.module.scss"

export default function Home() {
  const [Page, setPage] = useState<number>(1)
  const size = 133;

  useEffect(() => {
    console.log(Page);

  }, [Page])

  const handlerNext = () => {
    if (Page < size) {
      setPage(before => before + 1)
    } else {
      setPage(1)
    }
  }

  const handlerBef = () => {
    if (Page > 1) {
      setPage(before => before - 1)
    } else {
      setPage(size)
    }
  }

  return (
    <div className={style.main}>
      <div className={style.img}>
        <img src={`./photo_${Page}_2025-09-10_21-49-50.jpg`} alt="" />
        <button onClick={() => handlerBef()} className={style.b1}>Назад</button>
        <button onClick={() => handlerNext()} className={style.b2}>Вперед</button>
      </div>
    </div>
  );
}
