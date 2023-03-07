import React from 'react'
import { List } from '../List/List';
import s from './Header.module.css'

export const Header = ({
  value,
  setValue,
  click,
  setClick,
  clickBtn,
  delAll,
  delOne,
  delDone,
  isDone,
  toggleIsDone,
}) => {
  return (
    <div className={s.container}>
      <div className={s.cont__card}>
        {/* <form class="input-field">*/}
        {/* <form> */}
        <div className={s.inputs__wrapper}>
          <input
            className={s.cont__input}
            type="text"
            placeholder="Введите задачу"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
          />
          <button className={`${s.cont__btn} ${s.btn__add}`} onClick={clickBtn}>
            Добавить
          </button>
        </div>
        {/* </form> */}
        <div className={s.check__wrapper}>
          <ul className={s.check__list}>
            {click.map((obj) => (
              <List
                key={obj.id}
                value={obj.text}
                delOne={delOne}
                id={obj.id}
                isDone={obj.isDone}
                toggleIsDone={toggleIsDone}
              />
            ))}
            {/* <li>{value}</li> */}
          </ul>
          <div className={s.buttons__wrapper}>
            {/* <button className={s.cont__btn}> */}
            <button
              className={`${s.cont__btn} ${s.cont__btnGray}`}
              onClick={delDone}
            >
              Удалить завершенные
            </button>
            <button
              className={`${s.cont__btn} ${s.cont__btnRed}`}
              onClick={delAll}
            >
              Удалить все
            </button>
            {/* <button className={s.cont__btn}>Удалить все</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
