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
            glassColor = '#c0efff'
            color = '#0d05ef'
        />
    </LoaderContainer>
    )
};
