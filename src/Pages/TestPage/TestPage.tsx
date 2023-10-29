import React from 'react';
import { userState, nameState, textState, fontState, sizeState, imageState } from '../recoil';
import { useRecoilValue } from 'recoil';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function TestPage() {
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);
  const text = useRecoilValue(textState);
  const font = useRecoilValue(fontState);
  const size = useRecoilValue(sizeState);
  const image = useRecoilValue(imageState)

  return (
    <div>
      <link
        href={`https://fonts.googleapis.com/css?family=${font}`}
        rel="stylesheet"
      />
      <p> 당신의 이름 : {user}</p>
      <p>편지를 받을 분의 이름: {name}</p>
      <p>편지 내용 : <p style={{ fontSize: `${size}px`, fontFamily: font }}>{text}</p></p>
      <p>사진 케럿셀 : </p>
      <Carousel showArrows={true} selectedItem={image.length - 1} showStatus={false} >
        {image.map((image, index) => (
          <div key={index}>
            <img src={image} style={{ maxWidth: 300, margin: 'auto', display: 'block', alignItems: 'center' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
