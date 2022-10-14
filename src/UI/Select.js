//Selection component for the main menu
import s from "./Select.module.scss";

function Select({ onClickHandler, children }) {
  return (
    <div className={s.select}>
      <button className={s.button} onClick={onClickHandler} >{children}</button>
    </div>
  );
}

export default Select;
