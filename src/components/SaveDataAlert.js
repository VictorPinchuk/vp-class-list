import s from "./SaveDataAlert.module.scss";

function SaveDataAlert({ saveHandler, notSaveHandler, exitHandler }) {
  return (
    <div className={s.alertBlock}>
      <p className={s.warning}>!</p>
      <p>Зберегти данні перед виходом ?</p>

      <div className={s.buttonBlock}>
        <button onClick={() => saveHandler()}>Так</button>
        <button onClick={() => notSaveHandler()}>Ні</button>
        <button onClick={() => exitHandler()}>Повернутися</button>
      </div>
    </div>
  );
}

export default SaveDataAlert;
