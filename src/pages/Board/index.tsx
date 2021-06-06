import * as React from 'react';

import {Container, Row} from './styles';
import Image from 'components/Image';

import {fetchList} from 'utils/api';
import {ReactElement} from 'react';

export default function Board() {
    const images = fetchList();
    const createImageRow = (index: number) => {
        const imageRow = (
            <Row>
                <div className='img'>
                    <Image data-src={images[index]} />
                </div>
                {images[index + 1] && (
                    <div className='img'>
                        <Image data-src={images[index + 1]} />
                    </div>
                )}
                {images[index + 2] && (
                    <div className='img'>
                        <Image data-src={images[index + 2]} />
                    </div>
                )}
            </Row>
        );
        return imageRow;
    };
    const createImageRows = () => {
        let index = 0;
        const imageRows: ReactElement[] = [];
        for (let i = 0; i < images.length / 3; i++) {
            imageRows.push(createImageRow(index));
            index += 3;
        }
        return imageRows;
    };
    return <Container>{createImageRows()}</Container>;
}
