import React from 'react';

function Card(props) {
  console.log(props.likes.length);
  return (
    <li className='elements__item'>
      <img src={props.link} className='elements__image' alt={props.name + '.'} />
      <div className='elements__details-wrapper'>
        <h2 className='elements__title'>{props.name}</h2>
        <button className='button elements__like-btn' type='button' aria-label='Поставить лайк.'></button>
        <span className='elements__like-counter'>{props.likes.length}</span>
        <button className='button elements__delete-btn' type='button' aria-label='Удалить карточку.'></button>
      </div>
    </li>
  );
}

export default Card;
