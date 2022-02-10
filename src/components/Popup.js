import React from 'react';

function Popup({ isForm, btnAriaText, onClose, className, children, ...props }) {
  return (
    <section className={`popup page__popup ${className}`}>
      <div className={`popup__container ${isForm ? '' : 'popup__container_type_image'}`.trim()}>
        {children}
        <button
          onClick={onClose}
          className='button popup__btn popup__btn_action_close'
          type='button'
          aria-label={btnAriaText}
        />
      </div>
    </section>
  );
}

export default Popup;
