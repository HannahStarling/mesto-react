import React, { useContext } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';

function Card({ link, name, onCardClick, likes, likes: { length }, owner: { _id: owner } }) {
  const { _id } = useContext(CurrentUserContext);
  const isOwn = owner === _id;
  const isLiked = likes.find(({ _id: id }) => id === _id);

  function handleCardClick() {
    onCardClick({ name, link });
  }
  return (
    <li className='elements__item'>
      <img onClick={handleCardClick} src={link} className='elements__image' alt={name + '.'} />
      <div className='elements__details-wrapper'>
        <h2 className='elements__title'>{name}</h2>
        <button
          className={`button elements__like-btn ${isLiked ? 'elements__like-btn_active' : ''}`.trim()}
          type='button'
          aria-label='Поставить лайк.'
        ></button>
        <span className='elements__like-counter'>{length}</span>
        <button
          className={`button ${isOwn ? 'elements__delete-btn' : 'elements__delete-btn_hidden'}`}
          type='button'
          aria-label='Удалить карточку.'
        ></button>
      </div>
    </li>
  );
}

export default Card;
