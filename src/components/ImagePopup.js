import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup page__popup popup_type_image ${props.card && 'popup_opened'}`}>
      <div className='popup__container popup__container_type_image'>
        <figure className='popup__figure'>
          <img
            src={props.card ? props.card.link : '#'}
            className='popup__image'
            alt={props.card ? props.card.name + '.' : '#'}
          />
          <figcaption className='popup__caption'>{props.card.name}</figcaption>
        </figure>
        <button
          onClick={props.onClose}
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label='Закрыть картинку.'
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
