import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contato-page">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="service-hero contato-hero">
        <div className="service-hero-overlay">
          <div className="service-hero-container">
            <Mail size={80} />
            <h1>Entre em Contato</h1>
            <p>
              Estamos prontos para atender você e seu pet
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contato-content">
        <div className="contato-container">
          <div className="contato-info">
            <h2>Fale Conosco</h2>
            <p>
              Entre em contato conosco para agendar uma consulta ou tirar suas
              dúvidas. Estamos à disposição para cuidar do seu pet!
            </p>

            <div className="info-items">
              <div className="info-item">
                <Phone size={30} />
                <div>
                  <h3>Telefone</h3>
                  <p>(11) 95877-3524</p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={30} />
                <div>
                  <h3>Email</h3>
                  <p>pirajuvet@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={30} />
                <div>
                  <h3>Localização</h3>
                  <p>São Paulo - SP</p>
                  <p>Atendemos toda a região metropolitana</p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={30} />
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Domingo a Domingo</p>
                  <p>Até às 22:00 horas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contato-form-wrapper">
            <form className="contato-form" onSubmit={handleSubmit}>
              <h2>Envie sua Mensagem</h2>
              
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto">Assunto *</label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="consulta">Agendar Consulta</option>
                  <option value="vacina">Agendar Vacinação</option>
                  <option value="cirurgia">Informações sobre Cirurgia</option>
                  <option value="emergencia">Emergência</option>
                  <option value="duvida">Dúvida</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;