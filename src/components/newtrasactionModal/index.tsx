import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import { Container, WrapperButtons, RadioBox } from './style'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactionContext'

interface NewTrasactionModalProps {
    isModalOpen: boolean;
    CloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isModalOpen, CloseNewTransactionModal }: NewTrasactionModalProps) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');
    const { createTransactions } = useTransactions()

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransactions({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')


        CloseNewTransactionModal()

    }
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={CloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={CloseNewTransactionModal} className="react-modal-close">
                <img src={CloseImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transaçoes</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number" placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <WrapperButtons>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>

                </WrapperButtons>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}