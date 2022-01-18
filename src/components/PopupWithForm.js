import React from 'react';

function PopupWithForm({ name, isOpen, title, children, onClose }) {
  return (
    <div className={`popup page__popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <form className='popup__form' id='card' name={name}>
          <h2 className='popup__title'>{title}</h2>
          {children}
        </form>
        <button
          onClick={onClose}
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label='Закрыть форму.'
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
