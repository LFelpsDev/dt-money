import { useContext } from 'react';

import entradaIcon from '../../assets/entrada.svg';
import saidaIcon from '../../assets/saida.svg';
import totalIcon from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);


  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amout;
      acc.total += transaction.amout;
    } else {
      acc.withdraws += transaction.amout;
      acc.deposits -= transaction.amout;
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })


  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaIcon} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)
          }

        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saidaIcon} alt="Saidas" />
        </header>
        <strong> -
        {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)
          }
        </strong>
      </div>


      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)
          }
        </strong>
      </div>


    </Container>
  );
}