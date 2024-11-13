import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImpactoCarousel.css';
import imgImpacto_3 from '../../assets/img/numero_de_impacto_3.png'
import projetoSaude from '../../assets/img/saude-8.png'
import projetoEducacao from '../../assets/img/educao-8.png'
import projetoSocial from '../../assets/img/social-8.png'
import pessoasAtendidas from '../../assets/img/total-8.png'

const ImpactoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      number: '164.049',
      subtitle: 'beneficiados no projeto "Água Para Quem Tem Sede"',
      description:
        'Ao longo de uma década de atuação, a Love Together Brasil já perfurou 58 poços artesianos no sertão nordestino.',
      image: imgImpacto_3,
    },
    {
      number: '152.564',
      subtitle: 'beneficiados pelo projeto saúde',
      description:
        'Serviços de atendimento gratuito para a população da região do Vale do Piancó.',
      image: projetoSaude,
    },
    {
      number: '10.920',
      subtitle: 'beneficiados pelo projeto educação',
      description:
        'Crianças e jovens com acesso a ensino de qualidade, além de atividades culturais.',
      image: projetoEducacao,
    },
    {
      number: '126.004',
      subtitle: 'beneficiados pelo projeto social',
      description:
        'Arrecadação de alimentos, roupas, além de outras ações para auxiliar famílias em situação de vulnerabilidade social.',
      image: projetoSocial,
    },
    {
      number: '453.627',
      subtitle: 'pessoas atendidas',
      description:
        'Todos os nossos esforços são voltados para servir, com excelência, as pessoas que têm suas vidas impactadas pela Love Together Brasil.',
      image: pessoasAtendidas,
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="inner-container">
        <button className="nav-button" onClick={goToPrevious}>
          <ChevronLeft size={16} />
        </button>

        <div className="content-wrapper">
          <h2 className="carousel-title">
            Qual o impacto da Love Together Brasil na prática?
          </h2>

          <div className="content-container">
            <div className="text-content">
              <div>
                <span className="number">{items[currentIndex].number}</span>
                <h3 className="subtitle">{items[currentIndex].subtitle}</h3>
              </div>
              <p className="description">{items[currentIndex].description}</p>
            </div>

            <div className="image-container">
              <img
                src={items[currentIndex].image}
                alt={items[currentIndex].subtitle}
                className="carousel-image"
              />
            </div>
          </div>

          <div className="mobile-buttons">
            <button className="nav-button" onClick={goToPrevious}>
              <ChevronLeft size={16} />
            </button>
            <button className="nav-button" onClick={goToNext}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <button className="nav-button" onClick={goToNext}>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ImpactoCarousel;