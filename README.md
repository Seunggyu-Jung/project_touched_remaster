# Project-Toched-Remaster : 편지 작성 홈페이지
![스크린샷(64)](https://github.com/Seunggyu-Jung/project_touched_remaster/assets/106158869/f87a16e3-01dc-4629-b251-f1c7f30f4594)


# 홈페이지 링크 : https://project-touched-remaster.vercel.app/

---------------------------------------------------

## 1. 페이지의 기능 :

- 사용자가 원하는대로 웹페이지의 바탕색을 **그라데이션으로 커스텀 가능**함
- 편지에 담길 content의 용량에 제한을 두지 않아 **원하는 양 만큼 텍스트 작성 가능**
- 작성될 편지의 **폰트, 배경, 글자 크기를 커스텀**할 수 있는 기능 구현
- **원하는 양만큼 이미지**를 업로드 가능하며, **carousel 방식**으로 편리하게 감상할 수 있는 기능 구현
- **유튜브 URL 주소만 있으면 어느 영상이든 배경음으로 사용할 수 있는 커스텀 기능** 구현

## 2. 사용기술 :

### 2-1. 기술 스텍
- React
- TypeScript
- Styled-Component

### 2-2. 디테일
- React과의 호환성이 좋고 Redux보다 훨씬 가볍고 실용적인 **Recoil**을 사용하여 전역 상태 관리를 진행함
- react-youtube, react-responsive-carousel, react-colorful 등 **다양한 react library를 활용**하여 편지를 보다 더욱 다체롭게 커스텀할 수 있도록 제작함
- 모바일을 통한 웹 접속 빈도가 높은 현제 트렌드에 맞춰 **모바일 친화적인** 방향으로 페이지를 제작함
- 다양한 연령층의 사용자 보다 손쉽게 사용할 수 있도록 각 페이지에 상세한 guide-section 작성하여 **접근성 향상**
- alert 경고창을 사용하지 않고 별도로 커스텀한 **모달창**을 사용

## 3. 한계 :
- 서버가 구축이 되어있지 않아, 단지 local환경에서만 저장이 가능하다는 한계가 존재
- 이는 추후에 firebase를 통해 서버리스 메일링을 할 수 있도록 리펙토링할 예정

## 4. lighthouse 점수 💡
![스크린샷(66)](https://github.com/Seunggyu-Jung/project_touched_remaster/assets/106158869/8037ccfd-ed2f-4bba-b025-17c46c7aaa65)

