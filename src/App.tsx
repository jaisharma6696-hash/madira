import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AgeGate } from './components/AgeGate';
import { HomePage } from './components/pages/HomePage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { InvestPage } from './components/pages/InvestPage';
import { PitchDeck } from './components/PitchDeck';
import { ICMemo } from './components/ICMemo';

export default function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProduct]);

  if (!ageVerified) {
    return (
      <div className="min-h-screen bg-brand-void">
        <NoiseOverlay />
        <AgeGate onVerified={() => setAgeVerified(true)} />
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onProductSelect={(p) => { setSelectedProduct(p); setCurrentPage('detail'); }} />;
      case 'products':
        return <ProductsPage onNavigate={setCurrentPage} onProductSelect={(p) => { setSelectedProduct(p); setCurrentPage('detail'); }} />;
      case 'detail':
        return <ProductDetailPage product={selectedProduct} onNavigate={setCurrentPage} />;
      case 'invest':
        return <InvestPage onNavigate={setCurrentPage} />;
      case 'pitchdeck':
        return <PitchDeck onSwitchToMemo={() => setCurrentPage('icmemo')} onNavigate={setCurrentPage} />;
      case 'icmemo':
        return <ICMemo onSwitchToDeck={() => setCurrentPage('pitchdeck')} onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const isStandalone = currentPage === 'pitchdeck' || currentPage === 'icmemo';

  return (
    <div className="min-h-screen bg-brand-void text-brand-cream overflow-x-hidden">
      <NoiseOverlay />
      <CustomCursor />
      {!isStandalone && <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen flex flex-col"
        >
          <div className="flex-1">
            {renderPage()}
          </div>
          {!isStandalone && <Footer onNavigate={setCurrentPage} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
