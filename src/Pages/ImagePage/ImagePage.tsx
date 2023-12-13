import React, { useState } from 'react';
import * as S from './ImagePage.styled';
import { Carousel } from 'react-responsive-carousel';
import { useRecoilState } from 'recoil';
import { imageState } from '../recoil';
import Button from '../../Common/Button/Button'
import Guide from '../../Common/GuideSection/GuideSection';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function ImagePage() {
  const [imageArray, setImageArray] = useRecoilState<string[]>(imageState);


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    let imageUrlList = [...imageArray];
    if (file) {
      for (let i = 0; i < file.length; i++) {
        const imageUrl = URL.createObjectURL(file[i]);
        imageUrlList.push(imageUrl)
      }
      setImageArray(imageUrlList);
    }
  }

  const deleteImage = (index: number) => {
    const filteredArray = [...imageArray];
    filteredArray.splice(index, 1);
    setImageArray(filteredArray);
  }

  const handlingSection = () => {
    if (imageArray.length === 0) {
      return "none"
    } else {
      return "block"
    }
  }

  return (
    <>
      <Header title='ImagePage' />
      <S.ImageDiv>
        <h1>여러분들이 함께한 추억을 올리는 단계입니다.</h1>
        <Guide title='이미지 업로드하는 방법' step1='- 파일선택 버튼을 클릭하여 원하시는 사진을 업로드 해주세요.' step2={null} step3={null}></Guide>
        <S.ImageInput type="file" multiple accept='image/*' onChange={handleImageChange} placeholder='사진을 올려주세요.' />
        <S.ImageSection style={{ display: handlingSection() }}>
          <Carousel showArrows={true} selectedItem={imageArray.length - 1} showStatus={false} >
            {imageArray.map((image, index) => (
              <div key={index}>
                <img src={image} style={{ maxWidth: 300, margin: 'auto', display: 'block', alignItems: 'center' }} />
                <S.DeleteBtn onClick={() => deleteImage(index)}>삭제</S.DeleteBtn >
              </div>
            ))}
          </Carousel>
        </S.ImageSection>

        <Button previousLink='/write' nextLink='/bgm' />

      </S.ImageDiv>
      <Footer />
    </>

  );
}
