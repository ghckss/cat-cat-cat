import * as React from 'react';

import {Container, Row} from './styles';
import Image from 'components/Image';

import cat1 from 'assets/cats/cat1.jpg';

export interface IBoardProps {}

export default function Board(props: IBoardProps) {
    return (
        <Container>
            <Row>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
            </Row>
            <Row>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
            </Row>
            <Row>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
                <div className='img'>
                    <Image data-src={cat1} />
                </div>
            </Row>
        </Container>
    );
}
