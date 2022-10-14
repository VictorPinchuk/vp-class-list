//Save data alert window component

import { useState } from "react";
import s from "./SaveDataAlert.module.scss";
import React from "react";

function SaveDataAlert({ saveHandler, returnHandler }) {
  const [isByeShow, setIsByeShow] = useState(false);

  const byeBlock = () => {
    setIsByeShow(true);
  };

  return (
    <div>
      {isByeShow ? (
        <div className={s.byeBlock}>
          Дякуємо! <br /> Закрийте, будь ласка, <br /> вкладку або вікно
          браузера
        </div>
      ) : (
        <div className={s.alertBlock}>
          <p className={s.warning}>!</p>
          <p>Зберегти данні перед виходом ?</p>

          <div className={s.buttonBlock}>
            <button onClick={() => saveHandler()}>Так</button>
            <button onClick={() => byeBlock()}>Ні</button>
            <button onClick={() => returnHandler()}>Повернутися</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SaveDataAlert;
