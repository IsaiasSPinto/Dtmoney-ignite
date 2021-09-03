import { useEffect } from "react";
import { api } from "../../sevices/api";
import { Container } from "./styles";

export function TransitionsTable() {
    useEffect(() => {
        api.get('/transactions').then(response => response.data).then(data => console.log(data))
    }, [])



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Deselvonvimeto de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Venda</td>
                        <td>08/07/2021</td>
                    </tr>
                    <tr>
                        <td>Alugel</td>
                        <td className="withdraw">-R$1.100,00</td>
                        <td>Casa</td>
                        <td>20/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}