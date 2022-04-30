import React from 'react';
import style from './ClassComponent.module.css';

export class ClassComponent extends React.Component {
  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>5</p>
        <form className={style.form}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input className={style.input} type='number' id='user_number' />
          <button className={style.btn}>Угадать</button>
        </form>
      </div>
    );
  }
}
