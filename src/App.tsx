import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Modal from 'react-modal'
import { useState } from "react";

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header OpenTransactionModal={handleOpenNewTransactionModal} />


      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transaçoes</h2>
      </Modal>


      <GlobalStyles />
    </>

  );
}

