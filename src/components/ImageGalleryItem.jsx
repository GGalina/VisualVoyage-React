import { Card, CardImg } from './ImageFinder.styled';

export const ImageGalleryItem =({card, handleCardClick}) => {
  const { webformatURL, largeImageURL, tags } = card;
    return (
      <Card onClick={() => handleCardClick({ largeImageURL, tags })} >
        <CardImg src={webformatURL} alt={tags} />
      </Card>
    );
};