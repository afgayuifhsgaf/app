import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511958773524', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="WhatsApp">
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;