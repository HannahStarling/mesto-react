import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className='page root__page'>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name='edit-profile' title='Редактировать профиль'>
        <fieldset className='popup__input-container'>
          <label className='popup__input-label'>
            <input
              autoComplete='off'
              type='text'
              className='popup__item popup__item_el_name'
              id='name'
              name='name'
              placeholder='Имя профиля'
              minLength='2'
              maxLength='40'
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
              minLength='2'
              maxLength='200'
              autoComplete='off'
              required
            />
            <span className='popup__input-error popup__input-error_type_about'></span>
          </label>
          <button className='button popup__btn popup__btn_action_submit' type='submit'>
            Сохранить
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name='add-card' title='Новое место'>
        <fieldset className='popup__input-container'>
          <label className='popup__input-label'>
            <input
              autoComplete='off'
              type='text'
              className='popup__item popup__item_el_title'
              id='title'
              name='name'
              placeholder='Название'
              minLength='2'
              maxLength='30'
              required
            />
            <span className='popup__input-error popup__input-error_type_title'></span>
          </label>
          <label className='popup__input-label'>
            <input
              autoComplete='off'
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
      </PopupWithForm>
      <PopupWithForm name='edit-avatar' title='Обновить аватар'>
        <fieldset className='popup__input-container'>
          <label className='popup__input-label'>
            <input
              autoComplete='off'
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
      </PopupWithForm>
      <PopupWithForm name='delete-card' title='Вы уверены?'>
        <button className='button popup__btn popup__btn_action_submit' type='submit'>
          Да
        </button>
      </PopupWithForm>

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
      <div className='popup page__popup popup_type_error'>
        <div className='popup__container'>
          <form className='popup__form' id='error' name='error'>
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
