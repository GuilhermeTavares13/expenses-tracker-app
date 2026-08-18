import { Modal } from 'react-native';

export default function ModalItem({visible, children}) {
    return(
        <Modal visible={visible}>
            {children}
        </Modal>
    );
}

