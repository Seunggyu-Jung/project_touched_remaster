import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import * as S from './FirstPage.styled';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import { guide2 } from '../../img/img';
import { guide3 } from '../../img/img';
import { img2 } from '../../img/img';
import { heart } from '../../img/img';

export default function FirstPage() {


  const imageArray = [guide2, guide3, img2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };


  return (
    <>
      <S.mainDiv>
        <Header />
        <S.mainSection>
          <Carousel showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showIndicators={false} stopOnHover={false} selectedItem={currentIndex}  >
            {imageArray.map((image, index) => (
              <div key={index}>
                <section>
                  <img src={image} style={{ maxHeight: 400, margin: 'auto', display: 'block', alignItems: 'center' }} />
                </section>
                <S.carouselController>
                  <button onClick={handlePrevClick}>{"< "}</button>
                  <p>{index + 1} / {imageArray.length}</p>
                  <button onClick={handleNextClick}>{" >"}</button>
                </S.carouselController>
              </div>
            ))}
          </Carousel>

        </S.mainSection>
        <h2>감사한 분에게 여러분만의 편지를 만들어 마음을 전달해봐요</h2>
        <Link to="/background">
          <S.mainButton>
            <S.buttonImage src={heart} ></S.buttonImage>
          </S.mainButton>
        </Link>
      <Footer />
        </S.mainDiv>
    </>
  );
}
