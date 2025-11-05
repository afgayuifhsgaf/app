import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Stethoscope, CheckCircle, Clock, Heart } from 'lucide-react';
import './Services.css';

const Consultas = () => {
  return (
    <div className="service-page">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="service-hero consultas-hero">
        <div className="service-hero-overlay">
          <div className="service-hero-container">
            <Stethoscope size={80} />
            <h1>Consultas Veterinárias em Domicílio</h1>
            <p>
              Atendimento completo e personalizado no conforto da sua casa
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-content">
        <div className="service-content-container">
          <div className="service-main">
            <h2>Consultas de Rotina e Check-up Geral</h2>
            <p>
              Nosso serviço de consulta veterinária domiciliar oferece o mesmo padrão de
              qualidade de uma clínica tradicional, porém com o diferencial de ser
              realizado no ambiente familiar do seu pet, reduzindo drasticamente o
              estresse do animal.
            </p>
            <p>
              Durante a consulta, nossos veterinários realizam uma avaliação completa
              do estado de saúde do seu bichinho, verificando sinais vitais, condições
              gerais, e orientando sobre cuidados preventivos e nutrição adequada.
            </p>

            <div className="service-benefits">
              <h3>O que está incluído na consulta:</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Avaliação completa do estado de saúde</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Verificação de sinais vitais</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Exame físico detalhado</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Orientações sobre nutrição</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Prescrição de medicamentos se necessário</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Dicas de cuidados preventivos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-sidebar">
            <div className="sidebar-card">
              <Clock size={40} />
              <h3>Horário de Atendimento</h3>
              <p>Domingo a Domingo</p>
              <p className="highlight">Até 22:00 horas</p>
            </div>

            <div className="sidebar-card">
              <Heart size={40} />
              <h3>Agende Agora</h3>
              <p>Entre em contato conosco e agende sua consulta</p>
              <button className="cta-button">WhatsApp: (11) 95877-3524</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultas;