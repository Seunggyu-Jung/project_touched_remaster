import React, { useState } from 'react';
import * as S from './ImagePage.styled';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { imageState } from '../recoil';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImagePage() {
  const [selectImage, setSelectImage] = useState<string | null>(null);
  const [imageArray, setImageArray] = useRecoilState<string[]>(imageState);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectImage(imageUrl);
      setImageArray([...imageArray, imageUrl]);
    }
  }

  const deleteImage = (index: number) => {
    const filteredArray = [...imageArray];
    filteredArray.splice(index, 1);
    setImageArray(filteredArray);
  }

  return (
    <S.ImageDiv>
      <h1>여러분들이 함께한 추억을 올리는 단계입니다.</h1>
      <S.ImageInput type="file" accept='image/*' onChange={handleImageChange} />
      <S.ImageSection>
        <Carousel showArrows={true} selectedItem={imageArray.length - 1} showStatus={false} >
          {imageArray.map((image, index) => (
            <div key={index}>
              <img src={image} style={{ maxWidth: 300, margin: 'auto', display: 'block', alignItems: 'center' }} />
              <S.DeleteBtn onClick={() => deleteImage(index)}>삭제</S.DeleteBtn >
            </div>
          ))}
        </Carousel>
      </S.ImageSection>

      <Link to="/write">
        <button>이전</button>
      </Link>
      <Link to="/test">
        <button>다음</button>
      </Link>

    </S.ImageDiv>
  );
}
