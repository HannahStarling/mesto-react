import React from 'react';
import Popup from './Popup';

function PopupWithForm({ name, isOpen, title, children, onClose, buttonText, onSubmit }) {
  return (
    <Popup
      isForm={true}
      onClose={onClose}
      btnAriaText='Закрыть форму.'
      className={`${isOpen ? `popup_type_${name} popup_opened` : `popup_type_${name}`}`}
    >
      <form onSubmit={onSubmit} className='popup__form' id='card' name={name}>
        <h2 className='popup__title'>{title}</h2>
        <fieldset className='popup__input-container'>
          {children}
          <button className='button popup__btn popup__btn_action_submit' type='submit'>
            {buttonText}
          </button>
        </fieldset>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
