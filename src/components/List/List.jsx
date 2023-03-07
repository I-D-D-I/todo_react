import React from 'react'
import s from './List.module.css'

export const List = ({ value, delOne, id, isDone, toggleIsDone, delDone }) => {
  return (
    <li className={s.li}>
      <input
        className={s.check}
        type="checkbox"
        checked={isDone}
        onChange={() => toggleIsDone(id)}
      />
      <span className={s.check__text}>{value}</span>
      <button
        className={`${s.cont__cross} ${s.btn__del}`}
        onClick={() => delOne(id)}
      >
        ❌
      </button>
    </li>
  );
};
