import React from 'react';

import {Container, Row, DetailShow, Button} from './styles';

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

    // return (
    //     <Container>
    //         <Row>
    //             {images?.map((image, index) => (
    //                 <div key={index} className='img' onClick={() => onClickImage(image)} onMouseOver={() => onHoverImage(image)}>
    //                     <img src={isPhone ? image : images[images.length - 1 - index]} />
    //                 </div>
    //             ))}
    //         </Row>
    //         <DetailShow>
    //             <div className='img'>
    //                 <img src={isPhone ? currentImage : images?.[images.length - 3]} />
    //             </div>
    //             <Button onClick={onClickButton}>고정 해제</Button>
    //         </DetailShow>
    //     </Container>
    // );

    return (
        <Container>
            <Row>
                {images?.map((image, index) => (
                    <div key={index} className='img' onClick={() => onClickImage(image)} onMouseOver={() => onHoverImage(image)}>
                        <picture>
                            <source media='(min-width: 800px)' srcSet={images[images.length - 1 - index]} />
                            <img src={image} />
                        </picture>
                    </div>
                ))}
            </Row>
            <DetailShow>
                <div className='img'>
                    <picture>
                        <source media='(min-width: 800px)' srcSet={images?.[images.length - 3]} />
                        <img src={currentImage} />
                    </picture>
                </div>
                <Button onClick={onClickButton}>고정 해제</Button>
            </DetailShow>
        </Container>
    );
}
