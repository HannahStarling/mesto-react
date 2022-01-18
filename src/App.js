import React from 'react';
import headerLogo from './images/logo.svg';

function App() {
  return (
    <div className='page root__page'>
      <header className='header page__header'>
        <a href='#' className='logo logo_place_header link-opacity'>
          <img
            className='logo__pic'
            src={headerLogo}
            alt='Логотип приложения Место. Слово Место латиницей с подписью Россия на английском языке.'
          />
        </a>
      </header>
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
      <footer className='footer page__footer'>
        <p className='footer__copyright'>&copy; 2021 Mesto Russia</p>
      </footer>
      <div className='popup page__popup popup_type_edit-profile'>
        <div className='popup__container'>
          <form className='popup__form' id='user' name='user' novalidate>
            <h2 className='popup__title'>Редактировать профиль</h2>
            <fieldset className='popup__input-container'>
              <label className='popup__input-label'>
                <input
                  autocomplete='off'
                  type='text'
                  className='popup__item popup__item_el_name'
                  id='name'
                  name='name'
                  placeholder='Имя профиля'
                  minlength='2'
                  maxlength='40'
                  required
                />
                <span className='popup__input-error popup__input-error_type_name'></span>
              </label>
              <label className='popup__input-label'>
                <input
                  type='text'
                  className='popup__item popup__item_el_about'
                  id='about'
                  name='about'
                  placeholder='Описание профиля'
                  minlength='2'
                  maxlength='200'
                  autocomplete='off'
                  required
                />
                <span className='popup__input-error popup__input-error_type_about'></span>
              </label>
              <button className='button popup__btn popup__btn_action_submit' type='submit'>
                Сохранить
              </button>
            </fieldset>
          </form>
          <button
            className='button popup__btn popup__btn_action_close'
            type='button'
            aria-label='Закрыть форму редактирования профиля.'
          ></button>
        </div>
      </div>
      <div className='popup page__popup popup_type_add-card'>
        <div className='popup__container'>
          <form className='popup__form' id='card' name='card' novalidate>
            <h2 className='popup__title'>Новое место</h2>
            <fieldset className='popup__input-container'>
              <label className='popup__input-label'>
                <input
                  autocomplete='off'
                  type='text'
                  className='popup__item popup__item_el_title'
                  id='title'
                  name='name'
                  placeholder='Название'
                  minlength='2'
                  maxlength='30'
                  required
                />
                <span className='popup__input-error popup__input-error_type_title'></span>
              </label>
              <label className='popup__input-label'>
                <input
                  autocomplete='off'
                  type='url'
                  className='popup__item popup__item_el_link'
                  id='link'
                  name='link'
                  placeholder='Ссылка на картинку'
                  required
                />
                <span className='popup__input-error popup__input-error_type_link'></span>
              </label>
              <button className='button popup__btn popup__btn_action_submit' type='submit'>
                Создать
              </button>
            </fieldset>
          </form>
          <button
            className='button popup__btn popup__btn_action_close'
            type='button'
            aria-label='Закрыть форму добавления нового места.'
          ></button>
        </div>
      </div>
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
      <div className='popup page__popup popup_type_edit-avatar'>
        <div className='popup__container'>
          <form className='popup__form' id='user-avatar' name='avatar' novalidate>
            <h2 className='popup__title'>Обновить аватар</h2>
            <fieldset className='popup__input-container'>
              <label className='popup__input-label'>
                <input
                  autocomplete='off'
                  type='url'
                  className='popup__item popup__item_el_avatar'
                  id='avatar'
                  name='avatar'
                  placeholder='Ссылка на аватар'
                  required
                />
                <span className='popup__input-error popup__input-error_type_avatar'></span>
              </label>
              <button className='button popup__btn popup__btn_action_submit' type='submit'>
                Сохранить
              </button>
            </fieldset>
          </form>
          <button
            className='button popup__btn popup__btn_action_close'
            type='button'
            aria-label='Закрыть форму редактирования аватара.'
          ></button>
        </div>
      </div>
      <div className='popup page__popup popup_type_delete-card'>
        <div className='popup__container'>
          <form className='popup__form' id='confirm' name='confirm' novalidate>
            <h2 className='popup__title popup__title_type_noinputs'>Вы уверены?</h2>
            <button className='button popup__btn popup__btn_action_submit' type='submit'>
              Да
            </button>
          </form>
          <button
            className='button popup__btn popup__btn_action_close'
            type='button'
            aria-label='Отменить удаление карточки.'
          ></button>
        </div>
      </div>
      <div className='popup page__popup popup_type_error'>
        <div className='popup__container'>
          <form className='popup__form' id='error' name='error' novalidate>
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
    </div>
  );
}

export default App;
