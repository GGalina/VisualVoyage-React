import { LoadMoreBtn, BtnContainer } from './ImageFinder.styled';

export const Button = ({ handleLoadMore }) => {
    return (
        <BtnContainer>
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
                Load more
            </LoadMoreBtn>
        </BtnContainer>
    );
};