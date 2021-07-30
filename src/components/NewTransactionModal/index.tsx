import {useState} from 'react'
import Modal from 'react-modal';
import { Container, TransacitonTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/fechar.svg';
import withdrawImg from '../../assets/saida.svg';
import entryImg from '../../assets/entrada.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose, }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // a função que teve ser executada quando o usario aperta esc, ou clicar fora do modal   
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Titulo"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransacitonTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
          <img src={entryImg} alt="Entrada" />
          <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
          <img src={withdrawImg} alt="Saida" />
          <span>Saida</span>
          </RadioBox>
        </TransacitonTypeContainer>

        <input
          placeholder="Categoria"
        />


        <button type="submit">
          Cadastrar
        </button>


      </Container>
    </Modal>
  )
}