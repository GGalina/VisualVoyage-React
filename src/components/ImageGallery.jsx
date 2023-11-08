import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getSearchedImgApi } from './Api';
import { Loader } from './Loader';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Modal } from './Modal';
import { Gallery, GlobalStyles} from './ImageFinder.styled';
import 'react-toastify/dist/ReactToastify.css';

export const ImageGallery = ({ propKeyword }) => {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [totalHits, setTotalHits] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [modalData, setModalData] = useState(false);

    useEffect(() => {
        if (keyword !== propKeyword) {
            setPage(1);
            setKeyword(propKeyword);
        }
    }, [keyword, propKeyword]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                if (keyword === '') {
                    setCards([]);
                    return;
                }
                const data = await getSearchedImgApi(keyword, page);
                if (data.hits.length === 0) {
                    toast.error(`Sorry, there is no image found by ${keyword} keyword`, { theme: "colored" });
                    setCards([]);
                }
                setCards(prevCards => (page === 1 ? data.hits : [...prevCards, ...data.hits]));
                setTotalHits(data.totalHits);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [keyword, page]);

    const changePage = () => {
       setPage(prevPage => prevPage + 1);
    };

    const openModal = modalData => {
        document.body.classList.add('modal-open');
        setModalData(modalData);

    };

    const closeModal = () => {
        document.body.classList.remove('modal-open');
        setModalData(null);
    };

    return (
        <>
        {error ? (
            <h2>{error}</h2>
            ) : (
            <>
            <Gallery>
                {cards && cards.map(card => {
                    return (
                    <ImageGalleryItem
                        key={card.id}
                        card={card}
                        handleCardClick={openModal}
                    />
                    );
                })}
            </Gallery>

            {cards.length > 0 && !isLoading && cards.length !== totalHits && (
                <Button handleLoadMore={changePage} />
            )}
            {isLoading && <Loader />}
            </>
            )}
        <GlobalStyles />
        {modalData && <Modal onClose={closeModal} {...modalData} />}
        </>
    );
};