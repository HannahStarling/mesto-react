import React from 'react';

function ErrorPopup(props) {
  return (
    <div className='popup page__popup popup_type_error'>
      <div className='popup__container'>
        <form className='popup__form' id='error' name='error'>
          <h2 className='popup__title popup__title_type_noinputs'>Ошибка</h2>
          <button className='button popup__btn popup__btn_action_submit' type='submit'>
            Закрыть
          </button>
        </form>
        <button
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label='Закрыть сообщение об ошибке.'
        ></button>
      </div>
    </div>
  );
}

export default ErrorPopup;
