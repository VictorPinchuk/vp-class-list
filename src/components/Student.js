import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin2Fill } from "react-icons/ri";

import Button from "../UI/Button";

import s from "./Student.module.scss";

function Student({ student, index, deleteItemById, editItemById }) {
  
  return (
    <div className={s.student}>
      {/* <div className={s.id}>{student.id}</div> */}
      <div className={s.index}>{index + 1}</div>
      <div className={s.class}>{student.class}</div>
      <div className={s.name}>
        {student.lastName} {student.firstName}
      </div>
      <div className={s.nick}>{student.nick}</div>
      <Button
        className={s.editBtn}
        title="Редагувати"
        onClickHandler={editItemById}
        itemId={student.id}

      >
        <RiEdit2Fill className={s.editBtn} />
      </Button>
      <Button
        className={s.delete_btn}
        title="Видалити"
        onClickHandler={deleteItemById}
        itemId={student.id}
      >
        <RiDeleteBin2Fill className={s.deleteBtn} />
      </Button>
    </div>
  );
}

export default Student;
