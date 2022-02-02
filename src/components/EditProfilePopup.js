import React, { useEffect, useState, useContext } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [userName, setUserName] = useState('');
  const [description, setDescription] = useState('');
  const { name, about } = useContext(CurrentUserContext);

  useEffect(() => {
    setUserName(name);
    setDescription(about);
  }, [name, about]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: userName,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name='edit-profile'
      title='Редактировать профиль'
      buttonText='Сохранить'
    >
      <label className='popup__input-label'>
        <input
          value={name}
          onChange={(e) => setUserName(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
    </PopupWithForm>
  );
}

export default EditProfilePopup;
