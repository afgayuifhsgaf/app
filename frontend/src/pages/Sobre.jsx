import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Award, Heart, Users, Clock } from 'lucide-react';
import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="sobre-hero-container">
          <h1>Sobre Nós</h1>
          <p>Conheça a história do Dr. Pet Domiciliar</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="sobre-content">
        <div className="sobre-content-container">
          <div className="sobre-text">
            <h2>Quem Somos</h2>
            <p>
              O Dr. Pet Domiciliar nasceu do sonho de proporcionar atendimento
              veterinário de qualidade no conforto do lar de cada pet. Com mais de 10
              anos de experiência, nossa equipe é formada por profissionais altamente
              qualificados e apaixonados por animais.
            </p>
            <p>
              Acreditamos que o bem-estar do seu animal de estimação começa com um
              atendimento humanizado e sem estresse. Por isso, levamos toda a
              estrutura necessária até sua casa, garantindo procedimentos seguros e
              eficazes.
            </p>
          </div>
          <div className="sobre-image">
            <img
              src="https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?auto=format&fit=crop&w=800&q=80"
              alt="Veterinário com pet"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="sobre-stats">
        <div className="sobre-stats-container">
          <div className="stat-item">
            <Award size={50} />
            <h3>10+</h3>
            <p>Anos de Experiência</p>
          </div>
          <div className="stat-item">
            <Users size={50} />
            <h3>5000+</h3>
            <p>Pets Atendidos</p>
          </div>
          <div className="stat-item">
            <Heart size={50} />
            <h3>100%</h3>
            <p>Satisfação</p>
          </div>
          <div className="stat-item">
            <Clock size={50} />
            <h3>24/7</h3>
            <p>Atendimento</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="sobre-mission">
        <div className="sobre-mission-container">
          <div className="mission-card">
            <h3>Nossa Missão</h3>
            <p>
              Oferecer atendimento veterinário domiciliar de excelência, priorizando o
              conforto e bem-estar dos animais, enquanto proporcionamos tranquilidade
              e segurança aos seus tutores.
            </p>
          </div>
          <div className="mission-card">
            <h3>Nossa Visão</h3>
            <p>
              Ser referência em atendimento veterinário domiciliar em São Paulo,
              reconhecidos pela qualidade, humanização e inovação nos cuidados com
              animais de estimação.
            </p>
          </div>
          <div className="mission-card">
            <h3>Nossos Valores</h3>
            <p>
              Amor aos animais, ética profissional, excelência técnica, humanização no
              atendimento e compromisso com a saúde e bem-estar dos pets.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;