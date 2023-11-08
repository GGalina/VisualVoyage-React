import styled, { createGlobalStyle } from 'styled-components';

//-----Styles of Searchbar component------
export const SearchbarContainer = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 12px;
    color: #FFFFFF;
    background-color: #7395AE;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

//-----Styles of SearchForm component------
export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 320px;
    max-height: 40px;
    background-color: #FFFFFF;
    border-radius: 3px;
    overflow: hidden;
`; 

export const SearchBtn = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 1;
    }
`;

export const SearchBtnLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;

export const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    font-family: inherit;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    &::placeholder {
        font-family: inherit;
        font-size: 18px;
    }
`;

//-----Styles of ImageGallery component-----
export const Gallery = styled.div`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 24px;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`;

// -----Styles of ImageGalleryItem component-----
export const Card = styled.li`
    border-radius: 2px;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 265px;
    object-fit: cover;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.05);
        cursor: zoom-in;
    }
`;

//----- Styles of Modal component-----
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
    cursor: pointer;
    overflow: auto;
`;

export const ModalBlock = styled.div`
    cursor: auto;
`;

export const Image = styled.img`
    object-fit: cover;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px); 
`;

//------Styles of body and scrollbar------
export const GlobalStyles = createGlobalStyle`
    body.modal-open {
        overflow: hidden;
    }

    &::-webkit-scrollbar {
        width: 8px; 
    }

    &::-webkit-scrollbar-track {
        background: #F1F1F1; 
    }

    &::-webkit-scrollbar-thumb {
        background: #557A95; 
        border-radius: 3px; 
    }
`;

// ----- Styles of Buton (Load more) component-----
export const LoadMoreBtn = styled.button`
    padding: 10px 5px;
    border-radius: 5px;
    background-color: #7395AE;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #FFFFFF;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 18px;
    font-style: normal;
    font-weight: 500;
    width: 150px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    &:hover,
    &:focus {
        background-color: #557A95;
    }
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
`;