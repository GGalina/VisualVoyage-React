import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock } from './ImageFinder.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, tags, onClose }) => {
    useEffect(() => {
        const handleEscPress = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscPress);
        return () => window.addEventListener('keydown', handleEscPress);
    }, [onClose]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalBlock>
                <img src={largeImageURL} alt={tags} />
            </ModalBlock>
        </Overlay>,
        modalRoot
    );
};