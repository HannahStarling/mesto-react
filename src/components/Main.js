import React from 'react';

function Main(props) {
  return (
    <main className='content page__content'>
      <section className='profile content__center'>
        <div className='profile__avatar'>
          <img src="<%=require('./images/avatar.svg')%>" alt='Аватар пользователя.' className='profile__image' />
          <button className='button profile__btn profile__btn_action_avatar'></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__name'>Жак-Ив Кусто</h1>
          <p className='profile__description'>Исследователь океана</p>
          <button
            className='button profile__btn profile__btn_action_edit'
            type='button'
            aria-label='Редактировать профиль.'
          ></button>
        </div>
        <button
          className='button profile__btn profile__btn_action_add'
          type='button'
          aria-label='Добавить карточку-фотографию.'
        ></button>
      </section>
      <section className='elements content__center'>
        <ul className='elements__list'></ul>
      </section>
    </main>
  );
}

export default Main;
