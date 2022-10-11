import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { RiCheckFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

import Button from "../UI/Button";

import s from "./Form.module.scss";

function Form({ handleEditedItem, edditedItem, setEmptyEditedItem }) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  useEffect(() => {
    setValue("class", edditedItem.class);
    setValue("lastName", edditedItem.lastName);
    setValue("firstName", edditedItem.firstName);
    setValue("nick", edditedItem.nick);
  }, [edditedItem]);

  const onSubmit = (data, event) => {
    handleEditedItem({ ...data, id: edditedItem.id });
    event.target.reset();
  };

  const clearFormHandler = () => {
    setEmptyEditedItem();
  };

  const twoErr = errors.class && errors.lastName;

  return (
    <div className={s.form}>
      {(errors.class || errors.lastName) && !edditedItem.id ? (
        <div className={`${s.inputErrors} ${s.message}`}>
          {`Пол${twoErr ? "я" : "е"} ${
            errors.class?.message ? errors.class.message : ""
          } ${twoErr ? "і" : ""} 
            ${errors.lastName?.message ? errors.lastName.message : ""} не мож${
            twoErr ? "уть" : "е"
          } бути пустим${twoErr ? "и" : ""}
            `}
        </div>
      ) : (
        <div className={s.message}>Форма для вводу/редагування данних </div>
      )}
      <form className={s.formContent} onSubmit={handleSubmit(onSubmit)}>
        
        <div className={s.studentBlock}>
          <select
            className={s.class}
            {...register("class", {
              required: '"Клас"',
            })}
          >
            <option value="">Клас</option>
            <option value="6А">6А</option>
            <option value="6Б">6Б</option>
            <option value="6В">6В</option>
            <option value="7А">7А</option>
            <option value="7Б">7Б</option>
            <option value="7В">7В</option>
          </select>
          <input
            className={s.lastName}
            type="text"
            placeholder="Прізвище"
            {...register("lastName", {
              required: '"Прізвище"',
             
            })}
          ></input>
          <input
            className={s.firstName}
            type="text"
            placeholder="Імя"
            {...register("firstName")}
          ></input>
          <input
            className={s.nick}
            type="text"
            placeholder="Нік"
            {...register("nick")}
          ></input>
        </div>
        <div className={s.buttonBlock}>
          <Button type="submit">
            <RiCheckFill className={s.submit} />
          </Button>
          <Button type="reset" onClickHandler={clearFormHandler}>
            <RiCloseFill className={s.reset} />
          </Button>
        </div>
      </form>


    </div>
  );
}

export default Form;
