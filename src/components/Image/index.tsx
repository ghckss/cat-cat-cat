import {HTMLAttributes, ComponentType} from 'react';
import styled, {StyledComponent} from 'styled-components';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src?: File | string;
    'data-src'?: File | string;
}

const Image: StyledComponent<ComponentType<ImageProps>, any, ImageProps> = styled.img.attrs<ImageProps>(({className}) => ({className: `lazyload ${className ?? ''}`}))<ImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: 'object-fit: cover', serif;
    object-fit: cover;
`;

export default Image;
