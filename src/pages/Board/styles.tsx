import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    margin: 1rem 0;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    .img {
        position: relative;
        width: calc(33% - 1rem);
        height: 15rem;
        margin-right: 1rem;
        &:first-child {
            margin-left: 1rem;
        }
    }
`;
