import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import * as S from './styles'

function EcoModal(props) {
  const {
    width,
    isOpen,
    onToggle,
    title,
    children,
    background,
    helpmodal,
    signupbonus
  } = props

  return (
    <div>
      <S.ModalWrapper
        isOpen={isOpen}
        toggle={onToggle}
        className="modal-styles"
        width={width}
        background={background}
        helpmodal={helpmodal}
        signupbonus={signupbonus}
      >
        <ModalHeader toggle={onToggle}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter />
      </S.ModalWrapper>
    </div>
  )
}

export default EcoModal
