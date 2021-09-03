import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    OpenTransactionModal: () => void
}

export function Header({ OpenTransactionModal }: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dtMoney" />
                <button type="button" onClick={OpenTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}