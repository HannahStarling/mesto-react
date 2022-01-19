import React from 'react';

function PopupWithForm({ name, isOpen, title, children, onClose, buttonText }) {
  return (
    <div className={`popup page__popup ${isOpen ? `popup_type_${name} popup_opened` : `popup_type_${name}`}`}>
      <div className='popup__container'>
        <form className='popup__form' id='card' name={name}>
          <h2 className='popup__title'>{title}</h2>
          <fieldset className='popup__input-container'>
            {children}
            <button className='button popup__btn popup__btn_action_submit' type='submit'>
              {buttonText}
            </button>
          </fieldset>
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
