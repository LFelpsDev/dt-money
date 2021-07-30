import { useState } from 'react';
import Modal from 'react-modal'; // é preciso tipar ele, quando estar utilizando o TypeScript
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root'); // para acessibilidade

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header 
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}


