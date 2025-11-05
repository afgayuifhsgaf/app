import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Clock, Facebook, Instagram, Search, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-item">
            <Clock size={18} />
            <span>
              <strong>Atendimento</strong> Domingo à Domingo até às 22:00 horas
            </span>
          </div>
          <div className="top-bar-right">
            <div className="top-bar-item">
              <MessageCircle size={18} />
              <span>
                <strong>Envie sua mensagem:</strong> (11) 95877-3524
              </span>
            </div>
            <div className="top-bar-item">
              <Phone size={18} />
              <span>
                <strong>Fale conosco:</strong> (11) 95877-3524
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo">
            <span className="logo-dr">Dr</span>
            <span className="logo-pet">Pet</span>
            <p className="logo-subtitle">veterinário em domicílio</p>
          </Link>

          <ul className="nav-menu">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={isActive('/sobre') ? 'active' : ''}>
                SOBRE
              </Link>
            </li>
            <li 
              className="dropdown"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="dropdown-trigger">
                SERVIÇOS <ChevronDown size={16} />
              </button>
              {showServicesDropdown && (
                <div className="dropdown-menu">
                  <Link to="/consultas">Consultas</Link>
                  <Link to="/vacinas">Vacinas</Link>
                  <Link to="/cirurgias">Cirurgias</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/duvidas" className={isActive('/duvidas') ? 'active' : ''}>
                DÚVIDAS
              </Link>
            </li>
            <li>
              <Link to="/contato" className={isActive('/contato') ? 'active' : ''}>
                CONTATO
              </Link>
            </li>
          </ul>

          <div className="nav-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;