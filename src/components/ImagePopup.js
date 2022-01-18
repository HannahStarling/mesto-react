import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup page__popup popup_type_image ${card && 'popup_opened'}`}>
      <div className='popup__container popup__container_type_image'>
        <figure className='popup__figure'>
          <img src={card ? card.link : '#'} className='popup__image' alt={card ? card.name + '.' : '#'} />
          <figcaption className='popup__caption'>{card.name}</figcaption>
        </figure>
        <button
          onClick={onClose}
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label='Закрыть картинку.'
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
