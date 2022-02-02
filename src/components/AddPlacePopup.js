import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({ name, link });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name='add-card'
      title='Новое место'
      buttonText='Создать'
    >
      <label className='popup__input-label'>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
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
          onChange={(e) => setLink(e.target.value)}
          value={link}
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
    </PopupWithForm>
  );
}

export default AddPlacePopup;
