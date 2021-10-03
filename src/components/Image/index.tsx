import {HTMLAttributes, ComponentType} from 'react';
import styled, {StyledComponent} from 'styled-components';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src?: File | string;
    'data-src'?: File | string;
}

const Image: StyledComponent<ComponentType<ImageProps>, any, ImageProps> = styled.img.attrs<ImageProps>(({className}) => ({className}))<ImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default Image;
