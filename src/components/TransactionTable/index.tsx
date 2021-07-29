import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$12.000</td>
            <td>Entrada</td>
            <td>29/07/2021</td>
          </tr>

          <tr>
            <td>Alguel</td>
            <td className="withdraw">R$ - 1.000</td>
            <td>Casa</td>
            <td>25/07/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  )
}