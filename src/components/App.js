import React, { useState } from 'react';
import ErrorPopup from './ErrorPopup';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function closeAllPopups() {
    if (isEditProfilePopupOpen === true) {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    if (isEditAvatarPopupOpen === true) {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    if (isAddPlacePopupOpen === true) {
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  return (
    <div className='page root__page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen}
        name='edit-profile'
        title='Редактировать профиль'
      >
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
      <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name='add-card' title='Новое место'>
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
      <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name='edit-avatar' title='Обновить аватар'>
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
      <PopupWithForm onClose={closeAllPopups} name='delete-card' title='Вы уверены?'>
        <button className='button popup__btn popup__btn_action_submit' type='submit'>
          Да
        </button>
      </PopupWithForm>

      <ImagePopup />
      <ErrorPopup />
    </div>
  );
}

export default App;
