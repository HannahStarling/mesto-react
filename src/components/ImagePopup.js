import React from 'react';

function ImagePopup(props) {
  return (
    <div className='popup page__popup popup_type_image'>
      <div className='popup__container popup__container_type_image'>
        <figure className='popup__figure'>
          <img src='#' className='popup__image' alt='#' />
          <figcaption className='popup__caption'></figcaption>
        </figure>
        <button
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label='Закрыть картинку.'
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
