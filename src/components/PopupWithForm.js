import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup page__popup popup_type_${props.name}`}>
      <div className='popup__container'>
        <form className='popup__form' id='card' name={props.name}>
          <h2 className='popup__title'>{props.title}</h2>
          {props.children}
        </form>
        <button
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label='Закрыть форму.'
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
