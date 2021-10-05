import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 1rem 0;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0.5rem 0;

    .img {
        position: relative;
        width: 100%;
        height: 12rem;
        margin-right: 1rem;
        cursor: pointer;

        &:first-child {
            margin-left: 1rem;
        }
    }
`;

export const DetailShow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .img {
        position: relative;
        width: 80%;
        padding-top: 60%;
        margin-top: 1rem;
    }
`;

export const Button = styled.div`
    background-color: white;
    width: 10rem;
    padding: 1rem 2rem;
    text-align: center;
    cursor: pointer;
    margin-top: 1rem;
`;
