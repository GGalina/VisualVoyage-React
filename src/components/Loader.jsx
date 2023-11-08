import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer } from './ImageFinder.styled';

export const Loader = () => {
    return (
    <LoaderContainer>
        <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#F6FEFF'
            color = '#557A95'
        />
    </LoaderContainer>
    )
};
