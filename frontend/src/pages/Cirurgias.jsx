import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Heart, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import './Services.css';

const Cirurgias = () => {
  return (
    <div className="service-page">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="service-hero cirurgias-hero">
        <div className="service-hero-overlay">
          <div className="service-hero-container">
            <Heart size={80} />
            <h1>Cirurgias Veterinárias</h1>
            <p>
              Procedimentos cirúrgicos com segurança e cuidado
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-content">
        <div className="service-content-container">
          <div className="service-main">
            <h2>Cirurgias e Procedimentos Especializados</h2>
            <p>
              Realizamos diversos tipos de cirurgias e procedimentos cirúrgicos com
              total segurança. Nosso protocolo começa com uma avaliação pré-cirúrgica
              completa no domicílio. Cirurgias são realizadas em nossa unidade física,
              equipada com centro cirúrgico moderno e completo.
            </p>
            <p>
              Trabalhamos com anestesia segura e monitoramento constante durante todo
              o procedimento. Após a cirurgia, oferecemos acompanhamento pós-operatório
              domiciliar para garantir a recuperação adequada do seu pet.
            </p>

            <div className="service-benefits">
              <h3>Cirurgias Realizadas:</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Castração (machos e fêmeas)</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Cesaréias de emergência</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Remoção de tumores</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Suturas e reparações</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Cirurgias odontológicas</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={24} />
                  <span>Procedimentos de emergência</span>
                </div>
              </div>
            </div>

            <div className="info-box warning">
              <AlertCircle size={24} />
              <div>
                <h4>Importante:</h4>
                <p>
                  Cirurgias ortopédicas complexas e procedimentos que exigem
                  equipamentos especializados são encaminhados para hospitais
                  veterinários parceiros. Realizamos a avaliação inicial e
                  acompanhamento.
                </p>
              </div>
            </div>
          </div>

          <div className="service-sidebar">
            <div className="sidebar-card">
              <Clock size={40} />
              <h3>Atendimento</h3>
              <p>Avaliação pré-cirúrgica domiciliar</p>
              <p className="highlight">Cirurgias na unidade física</p>
            </div>

            <div className="sidebar-card">
              <Heart size={40} />
              <h3>Agende uma Avaliação</h3>
              <p>Entre em contato para agendar uma consulta pré-cirúrgica</p>
              <button className="cta-button">WhatsApp: (11) 95877-3524</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cirurgias;