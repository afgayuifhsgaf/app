import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Syringe, CheckCircle, Clock, Heart } from 'lucide-react';
import './Services.css';

const Vacinas = () => {
  return (
    <div className="service-page">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="service-hero vacinas-hero">
        <div className="service-hero-overlay">
          <div className="service-hero-container">
            <Syringe size={80} />
            <h1>Vacinação em Domicílio</h1>
            <p>
              Proteja seu pet com segurança e conforto
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-content">
        <div className="service-content-container">
          <div className="service-main">
            <h2>Vacinação Completa para Cães e Gatos</h2>
            <p>
              A vacinação é fundamental para manter a saúde do seu pet em dia. Nosso
              serviço de vacinação domiciliar garante que seu animal receba todas as
              doses necessárias no conforto do lar, sem o estresse do transporte e da
              espera em clínicas.
            </p>
            <p>
              Antes de aplicar qualquer vacina, realizamos uma avaliação completa para
              garantir que o animal está apto a ser imunizado. Trabalhamos apenas com
              vacinas de alta qualidade e seguimos rigorosamente o calendário de
              vacinação recomendado.
            </p>

            <div className="service-benefits">
              <h3>Vacinas Disponíveis:</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>V8 e V10 (polívalente para cães)</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Antirrábica (cães e gatos)</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Gripe canina (tosse dos canis)</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>V3, V4 e V5 (polívalente para gatos)</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Leishmaniose</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Giardia</span>
                </div>
              </div>
            </div>

            <div className="info-box">
              <h4>Importante:</h4>
              <p>
                Todas as vacinas são aplicadas após avaliação veterinária prévia. Mantemos
                registro completo da carteira de vacinação do seu pet.
              </p>
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
              <p>Entre em contato conosco e proteja seu pet</p>
              <button className="cta-button">WhatsApp: (11) 95877-3524</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vacinas;