import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Stethoscope, Syringe, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">VETERINÁRIO EM DOMICÍLIO</p>
            <h1 className="hero-title">Dr. Pet Domiciliar</h1>
            <p className="hero-description">
              Médicos veterinários de confiança e procedimentos desenvolvidos com
              carinho visando o bem-estar do seu bichinho, feito através de um
              atendimento domiciliar.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                NOSSOS SERVIÇOS <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary">
                <MessageCircle size={20} /> ENVIE SUA MENSAGEM
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-circle">
              <img
                src="https://images.pexels.com/photos/7470755/pexels-photo-7470755.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veterinária com pet"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <Stethoscope size={60} />
            </div>
            <h3>Consultas</h3>
            <p>
              Consultas de rotina e check-up geral para garantir que seu bichinho fique
              saudável em qualquer idade ou tamanho, sem o estresse causado nos pets
              durante visitas a consultórios veterinários.
            </p>
            <button className="service-link">
              SAIBA MAIS <ArrowRight size={18} />
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Syringe size={60} />
            </div>
            <h3>Vacinas</h3>
            <p>
              Examinação de cães e gatos para atestar se estão aptos para serem imunizados
              por vacinas contra raiva, gripe e outras doenças que podem comprometer a
              saúde de seu pet.
            </p>
            <button className="service-link">
              SAIBA MAIS <ArrowRight size={18} />
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Heart size={60} />
            </div>
            <h3>Cirurgias</h3>
            <p>
              Contamos com diferentes tipos de cirurgia que só ocorrerão após a examinação
              em sua própria casa. O seu bichinho será observado em nossa unidade física,
              no caso de cirurgias serem necessárias.
            </p>
            <button className="service-link">
              SAIBA MAIS <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Agende sua visita</h2>
            <p>
              Solicite uma consulta em casa agora mesmo! Atendemos de domingo a domingo
              até às 22h, após esse horário somente para clientes cadastrados. Agende
              pelo telefone, WhatsApp ou em nosso site.
            </p>
            <button className="btn btn-light">
              AGENDAR AGORA <ArrowRight size={20} />
            </button>
          </div>
          <div className="cta-image">
            <img
              src="https://images.pexels.com/photos/6235121/pexels-photo-6235121.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Agende sua consulta"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="why-us-container">
          <h2>Por que escolher o Dr. Pet Domiciliar?</h2>
          <div className="why-us-grid">
            <div className="why-item">
              <CheckCircle size={40} className="check-icon" />
              <h3>Atendimento 24/7</h3>
              <p>Estamos disponíveis todos os dias da semana para cuidar do seu pet.</p>
            </div>
            <div className="why-item">
              <CheckCircle size={40} className="check-icon" />
              <h3>Profissionais Experientes</h3>
              <p>Mais de 10 anos de experiência em atendimento veterinário domiciliar.</p>
            </div>
            <div className="why-item">
              <CheckCircle size={40} className="check-icon" />
              <h3>Conforto para seu Pet</h3>
              <p>Sem estresse de transporte, seu animal fica no ambiente familiar.</p>
            </div>
            <div className="why-item">
              <CheckCircle size={40} className="check-icon" />
              <h3>Equipamentos Modernos</h3>
              <p>Levamos todos os equipamentos necessários até sua casa.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const MessageCircle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default Home;