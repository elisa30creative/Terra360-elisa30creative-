import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', fontSize: '3em', margin: '20px' }}>🌍 Terra360 HtmlTerra</h1>
      <p style={{ color: '#666', fontSize: '1.2em' }}>Projeto de demonstração</p>
      <p style={{ color: '#999', marginTop: '20px' }}>Desenvolvido por: elisa30creative</p>
      <a href="https://github.com/elisa30creative/Terra360" style={{
        marginTop: '40px',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>Ver no GitHub</a>
    </div>
  );
};

export default Home;
