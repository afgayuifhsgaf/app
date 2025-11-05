import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>MENU</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/duvidas">Dúvidas</Link></li>
            <li><Link to="/artigos">Artigos</Link></li>
            <li><Link to="/politica">Política de privacidade</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/mapa">Mapa do site</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>NOSSOS SERVIÇOS</h3>
          <ul>
            <li><Link to="/consultas">Consultas</Link></li>
            <li><Link to="/vacinas">Vacinas</Link></li>
            <li><Link to="/cirurgias">Cirurgias</Link></li>
            <li><Link to="/vermifugos">Vermífugos</Link></li>
            <li><Link to="/internacoes">Internações</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>ONDE ATENDEMOS</h3>
          <p>São Paulo</p>
          <div className="footer-hours">
            <h4>ATENDIMENTO</h4>
            <p><strong>De Domingo à Domingo</strong></p>
            <p>Até às 22:00</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>FALE CONOSCO</h3>
          <p>Tel.: (11) 95877-3524</p>
          <p>WhatsApp: (11) 95877-3524</p>
          <p className="footer-email">pirajuvet@gmail.com</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Todos os direitos reservados</p>
        <div className="footer-badges">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ctext x='5' y='25' font-family='Arial' font-size='20' fill='%23fff'%3EHTML5%3C/text%3E%3C/svg%3E" alt="HTML5" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ctext x='5' y='25' font-family='Arial' font-size='20' fill='%23fff'%3ECSS3%3C/text%3E%3C/svg%3E" alt="CSS3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;