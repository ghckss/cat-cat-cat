import * as React from 'react';

import {Container, Row, DetailShow, Button} from './styles';
import Image from 'components/Image';

import {fetchList} from 'utils/api';

export default function Home() {
    const [images, setImages] = React.useState<string[]>();
    const [currentImage, setCurrentImage] = React.useState<string>();
    const [isImageFixed, setIsImageFixed] = React.useState(false);

    React.useEffect(() => {
        setImages(fetchList());
    }, []);

    React.useEffect(() => {
        setCurrentImage(images?.[0]);
    }, [images]);

    const onHoverImage = React.useCallback(
        (image: string) => {
            if (!isImageFixed) {
                setCurrentImage(image);
            }
        },
        [isImageFixed]
    );

    const onClickImage = React.useCallback((image: string) => {
        setCurrentImage(image);
        setIsImageFixed(true);
    }, []);

    const onClickButton = React.useCallback(() => setIsImageFixed(false), []);

    return (
        <Container>
            <Row>
                {images &&
                    images.map((image, index) => (
                        <div key={index} className='img' onClick={() => onClickImage(image)} onMouseOver={() => onHoverImage(image)}>
                            <Image src={image} />
                        </div>
                    ))}
            </Row>
            <DetailShow>
                <div className='img'>
                    <Image src={currentImage} />
                </div>
                <Button onClick={onClickButton}>고정 해제</Button>
            </DetailShow>
        </Container>
    );
}
