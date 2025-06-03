import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LotteryPage from './pages/LotteryPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LotteryPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;