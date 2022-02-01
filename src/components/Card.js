import React from 'react';

function Card({ link, name, onCardClick, likes }) {
  function handleCardClick() {
    onCardClick({ name, link });
  }
  return (
    <li className='elements__item'>
      <img onClick={handleCardClick} src={link} className='elements__image' alt={name + '.'} />
      <div className='elements__details-wrapper'>
        <h2 className='elements__title'>{name}</h2>
        <button className='button elements__like-btn' type='button' aria-label='Поставить лайк.'></button>
        <span className='elements__like-counter'>{likes.length}</span>
        <button className='button elements__delete-btn' type='button' aria-label='Удалить карточку.'></button>
      </div>
    </li>
  );
}

export default Card;
