import cat1 from 'assets/cats/cat1.jpg';
import cat2 from 'assets/cats/cat2.jpg';
import cat3 from 'assets/cats/cat3.jpg';
import cat4 from 'assets/cats/cat4.jpg';
import cat5 from 'assets/cats/cat5.jpg';
import cat6 from 'assets/cats/cat6.jpg';
import cat7 from 'assets/cats/cat7.jpg';
import cat8 from 'assets/cats/cat8.jpg';
import cat9 from 'assets/cats/cat9.jpg';
import cat10 from 'assets/cats/cat10.jpg';
import cat11 from 'assets/cats/cat11.jpg';
import cat12 from 'assets/cats/cat12.jpg';
import cat13 from 'assets/cats/cat13.jpg';
import cat14 from 'assets/cats/cat14.jpg';
import cat15 from 'assets/cats/cat15.jpg';
import cat16 from 'assets/cats/cat16.jpg';
import cat17 from 'assets/cats/cat17.jpg';
import cat18 from 'assets/cats/cat18.jpg';

const images = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18];

export const fetchList = () => {
    return images.sort(() => Math.random() - Math.random());
};

export const fetch = (index: number) => {
    return images[index];
};
