//Student list with search option and numbering.
//Item id is not shown.

import { useState } from "react";

import s from "./List.module.scss";
import Student from "./Student";

function List({ list, deleteItemById, editItemById }) {
  const [search, setSearch] = useState("");

  const onSearchHandler = (e) => setSearch(e.target.value);
  
  return (
    <div className={s.list}>
      <input
        type="text"
        className={s.search}
        placeholder="Пошук..."
        value={search}
        onChange={onSearchHandler}
      ></input>
      <div className={s.listContent}>
        {list
          .filter((obj) => {
            const searchString = (
              obj.class +
              obj.firstName +
              obj.lastName +
              obj.nick
            ).toLowerCase();
            return searchString.includes(search.toLowerCase());
          })
          .sort((a, b) => (a.lastName < b.lastName ? -1 : 1))
          .map((obj, index) => (
            <Student
              key={index}
              student={obj}
              index={index}
              deleteItemById={deleteItemById}
              editItemById={editItemById}
            />
          ))}
      </div>
    </div>
  );
}

export default List;
