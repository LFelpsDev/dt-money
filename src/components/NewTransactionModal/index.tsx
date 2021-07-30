import Modal from 'react-modal';
import { Container } from './styles'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose,}: NewTransactionModalProps){
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose} // a função que teve ser executada quando o usario aperta esc, ou clicar fora do modal   
      >
        <Container>
          
        </Container>
      </Modal>
  )
}