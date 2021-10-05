import React from 'react';

import img1 from 'assets/performance/img(pc1).png';
import img2 from 'assets/performance/img(pc2).png';
import img3 from 'assets/performance/img(phone1).png';
import img4 from 'assets/performance/img(phone2).png';
import img5 from 'assets/performance/picture-responsive(pc1).png';
import img6 from 'assets/performance/picture-responsive(pc2).png';
import img7 from 'assets/performance/picture-responsive(phone1).png';
import img8 from 'assets/performance/picture-responsive(phone2).png';
import img9 from 'assets/performance/picture-responsive(phone3).png';
import img10 from 'assets/performance/picture(pc1).png';
import img11 from 'assets/performance/picture(pc2).png';
import img12 from 'assets/performance/picture(phone1).png';
import img13 from 'assets/performance/picture(phone2).png';
import styled from 'styled-components';

const Performance = () => {
    return (
        <Container>
            <h1>PC</h1>
            <div className='section'>
                <h2>img tag with react-responsive</h2>
                <div className='images'>
                    <img src={img1} />
                    <img src={img2} />
                </div>
                <h2>picture tag and react-responsive (not real use)</h2>
                <div className='images'>
                    <img src={img5} />
                    <img src={img6} />
                </div>
                <h2>just picture tag</h2>
                <div className='images'>
                    <img src={img10} />
                    <img src={img11} />
                </div>
            </div>
            <h1>Phone</h1>
            <div className='section'>
                <h2>img tag with react-responsive</h2>
                <div className='images'>
                    <img src={img3} />
                    <img src={img4} />
                </div>
                <h2>picture tag and react-responsive (not real use)</h2>
                <div className='images'>
                    <img src={img7} />
                    <img src={img8} />
                    <img src={img9} />
                </div>
                <h2>just picture tag</h2>
                <div className='images'>
                    <img src={img12} />
                    <img src={img13} />
                </div>
            </div>
        </Container>
    );
};

export default Performance;

const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    .images {
        display: flex;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 300px;
        height: 300px;
    }

    div,
    img {
        margin: 1rem 1rem;
    }
`;
