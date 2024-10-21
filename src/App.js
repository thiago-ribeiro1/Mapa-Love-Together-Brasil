import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import MapSvg from './components/SvgMap/SvgMap';
import './App.css';

function App() {
  const [tooltip, setTooltip] = useState({
    active: false,
    content: '',
    position: { x: 0, y: 0 },
  });
  
  // Função que será chamada ao mover o mouse pela tela
  // Atualiza a posição do tooltip conforme o movimento do mouse
  const handleMouseMove = (e) => {
    setTooltip((prevState) => ({
      ...prevState,
      position: { x: e.pageX, y: e.pageY - 70 },
    }));
  };

  // useEffect que é executado ao montar o componente
  // Esse código adiciona event listeners para todos os elementos <path> no SVG, para interagir com o mouse
  useEffect(() => {
    // Seleciona todos os elementos <path> do SVG
    const paths = document.querySelectorAll('path');

    // Função chamada quando o mouse passa sobre um path
    const handleMouseOver = (event) => {
      const { id } = event.target;
      setTooltip({
        active: true, // Ativa o tooltip
        content: id, // Define o ID do path como o conteúdo do tooltip
        position: { x: event.pageX, y: event.pageY - 70 },
      });
    };

    // Função chamada quando o mouse sai de um path
    const handleMouseOut = () => {
      setTooltip((prevState) => ({ ...prevState, active: false })); // Desativa o tooltip
    };

    // Adiciona os event listeners (mouseover e mouseout) para cada elemento <path>
    paths.forEach((path) => {
      path.addEventListener('mouseover', handleMouseOver);
      path.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup: remove os event listeners quando o componente for desmontado
    return () => {
      paths.forEach((path) => {
        path.removeEventListener('mouseover', handleMouseOver);
        path.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <Router>
      <div>
        <Logo />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<MapSvg handleMouseMove={handleMouseMove} tooltip={tooltip} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
