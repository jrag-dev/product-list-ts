import Modal from './Modal.tsx'
import OrderConfirmed from './OrderConfirmed.tsx'

interface IProps {
  handler: () => void;
}

const OrderConfirmedContainer = ({ handler }: IProps) => {
  
  return (
    <Modal handler={handler}>
      <OrderConfirmed/> 
    </Modal>
  )
}

export default OrderConfirmedContainer
