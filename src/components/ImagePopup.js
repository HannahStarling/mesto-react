import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup page__popup ${card.name && card.link ? `popup_type_image popup_opened` : `popup_type_image`}`}
    >
      <div className='popup__container popup__container_type_image'>
        <figure className='popup__figure'>
          <img src={card.link ? card.link : '#'} className='popup__image' alt={card.name ? card.name + '.' : '#'} />
          <figcaption className='popup__caption'>{card.name && card.name}</figcaption>
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
