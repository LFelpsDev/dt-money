import entradaIcon from '../../assets/entrada.svg';
import saidaIcon from '../../assets/saida.svg';
import totalIcon from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaIcon} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saidaIcon} alt="Saidas" />
        </header>
        <strong>R$1000</strong>
      </div>

      
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>R$1000</strong>
      </div>

      
    </Container>
  );
}