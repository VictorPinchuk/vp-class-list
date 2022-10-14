//Button UI component
import s from "./Button.module.scss";

function Button({
  children,
  onClickHandler = () => {},
  itemId = "",
  title,
  type,
}) {
  return (
    <button
      onClick={() => onClickHandler(itemId)}
      className={s.btn}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
