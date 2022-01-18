import React, { useState, useEffect } from 'react';
import avatar from '../images/avatar.svg';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('Загрузка данных...');
  const [userDescription, setUserDescription] = useState('Загрузка данных...');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  console.log('render');

  useEffect(() => {
    api.getAllInitialData().then((data) => {
      console.log('effect');
      const [cards, info] = data;
      const { name, about, avatar } = info;
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
      setCards(cards);
    });
  }, []);

  return (
    <main className='content page__content'>
      <section className='profile content__center'>
        <div className='profile__avatar'>
          <img src={userAvatar ? userAvatar : avatar} alt='Аватар пользователя.' className='profile__image' />
          <button className='button profile__btn profile__btn_action_avatar' onClick={props.onEditAvatar}></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <p className='profile__description'>{userDescription}</p>
          <button
            onClick={props.onEditProfile}
            className='button profile__btn profile__btn_action_edit'
            type='button'
            aria-label='Редактировать профиль.'
          ></button>
        </div>
        <button
          onClick={props.onAddPlace}
          className='button profile__btn profile__btn_action_add'
          type='button'
          aria-label='Добавить карточку-фотографию.'
        ></button>
      </section>
      <section className='elements content__center'>
        <ul className='elements__list'>
          {cards.map(({ _id, ...props }) => (
            <Card key={_id} {...props} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
