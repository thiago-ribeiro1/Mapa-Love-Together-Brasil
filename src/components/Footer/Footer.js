import React from 'react';
import logo from '../../assets/img/LoveTogether.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '70vw' }}>
        
        {/* Logo e Ícones */}
        <div style={{ textAlign: 'center', margin: '10px' }}>
          <img src={logo} alt="Love Together Brazil" style={{ width: '100px' }} />
          <div style={{ marginTop: '10px' }}>
            <a href="https://www.instagram.com/lovetogetherbrasil" style={{ color: '#fff', margin: '0 5px' }}>
              <i className="fab fa-instagram" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="https://www.youtube.com/@lovetogetherbrasil" style={{ color: '#fff', margin: '0 5px' }}>
              <i className="fab fa-youtube" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="https://www.facebook.com/lovetogetherbrasil" style={{ color: '#fff', margin: '0 5px' }}>
              <i className="fab fa-facebook" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="https://www.linkedin.com/company/lovetogetherbrasil" style={{ color: '#fff', margin: '0 5px' }}>
              <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
          </div>
        </div>

        {/* Informações Gerais */}
        <div style={{ textAlign: 'left', margin: '10px', maxWidth: '300px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>INFORMAÇÕES GERAIS:</h3>
          <p>
            Nathalia Malta<br />
            (83) 99875-3138<br />
            ltb@lovetogetherbrasil.org
          </p>
        </div>

        {/* Endereço */}
        <div style={{ textAlign: 'left', margin: '10px', maxWidth: '300px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>ENDEREÇO:</h3>
          <p>
            Rua Ernestina de Araújo Silva, 52 – Centro – Piancó<br />
            CEP 58765-000 – Paraíba – Brasil
          </p>
        </div>

        {/* Saiba Mais */}
        <div style={{ textAlign: 'left', margin: '10px', maxWidth: '300px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>SAIBA MAIS:</h3>
          <p>Código de Ética e Conduta LTB<br />Política Geral de Proteção de Dados da LTB</p>
          <p>
            A Love Together Brasil trata com seriedade, transparência e responsabilidade todos os dados pessoais que são
            coletados e armazenados.
          </p>
          <p>
            Requisições relacionadas à LGPD? Entre em contato com o Encarregado de Dados da LTB:<br />
            encarregadodedados@lovetogetherbrasil.org
          </p>
        </div>
      </div>

      {/* Direitos Reservados */}
      <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '10px', borderTop: '1px solid #444' }}>
        <p style={{ fontSize: '14px', margin: '0' }}>© 2024 TODOS OS DIREITOS RESERVADOS | POLÍTICA DE PRIVACIDADE | TERMOS DE USO</p>
        <p style={{ fontSize: '14px', margin: '0' }}>Feito por <a href="https://unifacisa.edu.br" style={{ color: '#fff', textDecoration: 'underline' }}>Unifacisa</a></p>
      </div>
    </footer>
  );
};

export default Footer;
