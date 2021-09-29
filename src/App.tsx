import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useState } from "react";
import { NewTransactionModal } from "./components/newtrasactionModal";
import Modal from 'react-modal'
import { TransactionProvider } from "./hooks/useTransactionContext";


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header OpenTransactionModal={handleOpenNewTransactionModal} />


      <Dashboard />


      <NewTransactionModal isModalOpen={isNewTransactionModalOpen} CloseNewTransactionModal={handleCloseNewTransactionModal} />

      <GlobalStyles />
    </TransactionProvider>

  );
}

