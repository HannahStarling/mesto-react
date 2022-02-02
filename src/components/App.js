import React, { useState, useEffect } from 'react';
import CurrentUserContext from '../context/CurrentUserContext';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({
    name: 'Загрузка данных...',
    about: 'Загрузка данных...',
    avatar: '',
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllInitialData()
      .then((data) => {
        const [cards, info] = data;
        setCurrentUser(info);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateAvatar(currentUserAvatar) {
    api.setAvatar(currentUserAvatar).then((avatar) => {
      setCurrentUser(avatar);
      closeAllPopups();
    });
  }

  function handleUpdateUser(currentUserInfo) {
    api.setUserInfo(currentUserInfo).then((info) => {
      setCurrentUser(info);
      closeAllPopups();
    });
  }

  function handleCardDelete({ id }) {
    console.log(id);
    api.deleteCard(id).then((_) => setCards((cards) => cards.filter((c) => c._id !== id)));
  }

  function handleCardLike({ likes, id }) {
    const isLiked = likes.find(({ _id: UserId }) => UserId === currentUser._id);
    api
      .changeLikeCardStatus(id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === id ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

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
    if (selectedCard.name && selectedCard.link) {
      setSelectedCard({ name: '', link: '' });
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page root__page'>
        <Header />
        <Main
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          name='add-card'
          title='Новое место'
          buttonText='Создать'
        >
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
        </PopupWithForm>
        <PopupWithForm onClose={closeAllPopups} name='delete-card' title='Вы уверены?' buttonText='Да' />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
