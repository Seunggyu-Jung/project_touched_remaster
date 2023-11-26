import React, { useState, useEffect, useRef } from 'react';
import { userState, nameState, textState, fontState, sizeState, imageState, textBackState, bgmState } from '../recoil';
import { useRecoilValue } from 'recoil';
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './TestPage.styled'

export default function TestPage() {
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);
  const text = useRecoilValue(textState);
  const font = useRecoilValue(fontState);
  const size = useRecoilValue(sizeState);
  const image = useRecoilValue(imageState);
  const background = useRecoilValue(textBackState)
  const bgm = useRecoilValue(bgmState)

  const handleCopyURL = () => {
    const targetPath = '/#/check'
    const githubDomain = 'https://seunggyu-jung.github.io'
    const fullURL = githubDomain + targetPath

    navigator.clipboard.writeText(fullURL)
      .then(() => {
        alert('편지가 잘 복사되었습니다. 받으실 분에게 보내보세요!')
      })
      .catch((error) => {
        console.log('복사에 오류가 있습니다.', error)
      })

  }

  const textStyle = {
    fontSize: `${size}px`,
    fontFamily: font,
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundContain: 'contain',
  };


  return (
    <S.testBody >
      <S.testDiv>
        <link
          href={`https://fonts.googleapis.com/css?family=${font}`}
          rel="stylesheet"
        />
        <svg viewBox="0 0 825 659" fill="none" xmlns="http://www.w3.org/2000/svg">
          <S.path d="M2.84869 175.277C11.9257 174.268 23.6574 163.974 30.6852 159.073C48.6249 146.563 63.7871 129.23 81.1649 115.657C118.668 86.3644 158.756 61.2755 198.639 35.6785C212.415 26.8375 226.476 18.5126 241.329 11.5812C247.357 8.76836 258.066 3.95909 264.595 3.27182C270.899 2.60823 261.09 5.54485 259.921 6.07625C252.576 9.41511 245.452 12.6575 238.317 16.463C218.181 27.2019 196.893 34.0514 176.827 45.3382C159.308 55.1926 150.708 75.5363 138.292 90.2091C119.931 111.909 118.765 138.487 118.765 165.929C118.765 185.412 115.766 206.64 126.659 223.887C136.336 239.208 158.428 255.263 175.685 258.994C213.148 267.094 253.607 265.018 291.809 265.018C307.278 265.018 313.003 259.749 324.423 249.646C339.194 236.579 343.118 219.449 350.702 202.386C358.525 184.784 357.549 167.005 358.076 148.271C358.331 139.226 361.815 131.294 361.815 122.096C361.815 114.341 361.815 106.586 361.815 98.8301C361.815 83.5778 358.491 82.0281 343.95 76.6024C332.043 72.1594 322.675 72.4477 309.674 72.4477C284.971 72.4477 250.485 89.4243 247.665 117.63C246.446 129.82 242.16 139.77 242.16 152.218C242.16 164.198 242.16 176.177 242.16 188.156C242.16 198.959 242.16 209.761 242.16 220.563C242.16 230.749 249.947 237.663 256.182 245.284C262.353 252.826 259.632 251.99 269.373 254.216C277.388 256.048 285.302 255.67 293.574 255.67C300.741 255.67 307.908 255.67 315.075 255.67C323.353 255.67 323.48 253.61 327.124 246.322C330.754 239.061 329.044 241.844 324.319 245.387C319.113 249.292 306.553 253.014 303.442 257.54C300.35 262.038 290.659 265.129 286.096 269.692C277.925 277.864 269.287 284.026 258.986 289.323C248.063 294.941 239.516 305.283 227.203 308.02C219.042 309.833 212.205 315.259 204.352 317.783C199.441 319.362 194.959 318.837 189.914 319.341C184.641 319.869 180.805 323.328 175.892 324.638C167.558 326.861 153.619 326.048 145.355 323.392C133.092 319.45 124.261 307.645 114.61 299.71C107.841 294.145 96.2208 286.127 92.6943 277.898C90.5454 272.884 83.0855 256.75 94.0445 267.304C102.211 275.167 107.635 285.458 114.195 294.517C121.514 304.625 124.443 317.096 133.307 326.3C140.798 334.08 149.813 341.476 156.157 350.086C167.127 364.973 172.939 382.324 181.709 398.177C189.754 412.72 198.15 432.956 201.859 449.384C204.511 461.127 206.637 474.726 206.637 486.776C206.637 499.611 211.997 512.174 212.246 524.895C212.83 554.696 214.116 584.277 214.116 614.222C214.116 618.55 214.116 622.877 214.116 627.205C214.116 630.436 213.585 620.232 211.415 617.442C208.058 613.125 207.694 604.744 206.222 599.68C202.549 587.047 198.353 573.8 196.25 560.834C192.423 537.233 193.55 512.404 193.55 488.542C193.55 474.879 193.944 464.888 198.328 451.98C207.951 423.646 234.815 412.59 259.61 398.592C272.884 391.098 289.274 386.258 303.234 380C315.125 374.67 332.139 372.525 342.288 364.108C357.548 351.454 374.4 340.344 389.756 327.547C403.706 315.922 409.074 303.076 417.904 287.869C420.529 283.349 419.774 277.962 419.774 272.912C419.774 271.529 419.79 282.648 419.67 284.753C419.134 294.122 414.773 302.096 410.01 309.889C406.319 315.93 399.289 316.734 394.43 321.107C388.822 326.154 382.081 331.798 375.838 335.96C370.779 339.332 364.73 341.722 359.115 344.373C351.699 347.875 341.506 354.67 333.667 356.63C326.626 358.39 315.427 364.578 309.466 369.094C302.399 374.447 293.082 378.963 287.135 385.505C274.388 399.527 268.335 408.638 268.335 427.779C268.335 435.376 264.809 443.731 267.504 451.046C271.74 462.544 275.714 474.642 281.006 485.633C291.659 507.758 302.416 528.662 320.268 545.877C336.593 561.619 352.081 563.605 372.618 569.766C383.869 573.142 393.173 573.506 404.921 573.506C418.403 573.506 428.238 568.088 440.755 563.326C470.544 551.994 489.202 524.035 502.141 496.54C517.537 463.822 513.255 427.326 513.255 392.153C513.255 380.524 514.21 362.836 505.361 353.306C498.06 345.444 483.581 343.29 473.993 339.803C461.479 335.253 450.204 328.963 436.6 328.585C427.963 328.346 419.272 328.585 410.633 328.585C399.634 328.585 388.597 328.288 377.603 328.585C365.439 328.914 358.279 339.542 349.663 346.243C346.773 348.491 343.747 350.602 340.834 352.891C334.793 357.637 333.131 365.81 326.293 369.717C321.992 372.174 321.596 372.819 320.476 377.299C319.047 383.016 312.569 385.886 310.401 391.425C300.536 416.636 296.379 438.274 296.379 464.964C296.379 488.395 300.703 505.109 310.401 526.661C319.429 546.723 338.952 550.25 357.661 556.263C366.508 559.107 376.357 561.646 384.978 565.196C393.048 568.519 404.429 566.182 411.88 570.597C443.83 589.53 471.906 540.573 477.316 515.547C479.368 506.061 483.17 497.508 484.795 487.919C485.637 482.95 487.873 479.672 489.884 475.247C492.036 470.513 491.043 465.267 493.624 460.394C507.205 434.74 518.143 406.738 527.069 379.273C530.763 367.906 533.542 352.195 533.82 340.219C533.883 337.514 534.539 333.211 531.016 332.429C526.564 331.439 528.212 345.5 528.212 347.697C528.212 371.799 528.831 396.544 532.989 420.197C537.233 444.33 533.109 469.282 539.325 493.112C544.587 513.282 543.869 533.659 550.751 553.875C556.918 571.99 567.469 587.267 576.822 603.835C590.73 628.473 622.583 655.769 652.022 655.769C659.293 655.769 666.563 655.769 673.834 655.769C680.83 655.769 685.771 647.491 689.934 642.785C694.322 637.824 699.259 634.407 702.917 628.763C708.286 620.479 710.677 610.875 716.004 602.589C726.894 585.648 739.43 568.505 744.36 548.785C747.657 535.598 755.097 523.667 757.759 510.354C759.813 500.085 762.192 489.377 766.069 479.609C771.676 465.479 769.437 449.22 775.105 435.05C778.55 426.437 778.621 419.007 778.74 409.81C778.905 397.12 782.383 385.45 783.934 373.041C786.274 354.317 789.958 337.439 789.958 318.51C789.958 314.915 793.401 287.393 793.697 300.126C794.147 319.45 793.748 338.256 795.982 357.253C797.443 369.664 803.849 416.458 821.742 416.458" />
        </svg>

        <S.testSection style={textStyle}>
          <S.userPtag> From {user}</S.userPtag>
          <S.textBox>
            {text}
          </S.textBox>
        </S.testSection>

        {image.length > 0 &&
          <S.photoBox style={{ fontFamily: font }}>
            <h2>우리가 함께한 추억 모음집</h2>
            <Carousel showArrows={true} selectedItem={0} showStatus={false} showThumbs={false}>
              {image.map((image, index) => (
                <div key={index}>
                  <img src={image} style={{ width: 300, margin: 'auto', display: 'block', alignItems: 'center' }} />
                </div>
              ))}
            </Carousel>
          </S.photoBox>
        }
        <YouTube videoId={bgm} style={{ marginTop: 30 }}
          opts={{
            width: '300',
            height: '200',
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            }
          }}
        />
        <button onClick={handleCopyURL}>전송</button>
      </S.testDiv>
    </S.testBody>
  );
}
