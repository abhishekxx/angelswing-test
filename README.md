# angelswing-frontend-test

- This README starts with an English instruction.
- 한국어 설명은 영어 텍스트가 끝나는 부분에서 시작합니다.

# The purpose of the test

We want to see following points from you:

1. A capability to exactly replicate the design from a given Figma prototype
2. A seasoned javascript (or typescript) capability
3. A capability to absorb new APIs
4. Understanding of javascript (or typescript) ecosystem

# Todo

## Setup

1. Please make changes so that the entire React project uses Typescript (except config files like webpack). Please try your best to make the best use of Typescript.
2. Please install any 3rd party library made for css-in-js and remove `src/index.css` accordingly by transferring the styles into the library.
3. Please organize files and components appropriately for separation of concerns.
4. Please install `jest` (you don't necessarily have to use Typescript here) and organize relevant config files if any, so that component testing is possible.

## Codes

Please make necessary changes to the project, so that following points are fulfilled:

1. When the webpage is first opened, the center of the Openlayers map should be [Seoul City Hall](https://www.google.com/maps/place/Seoul+City+Hall/@37.5662952,126.9779451,15z/data=!4m2!3m1!1s0x0:0xe92b70ac420cf0a8?sa=X&ved=2ahUKEwi62Yygm5_sAhUGMd4KHaCBDK0Q_BIwFHoECBcQBQ) at zoom level 16. In other words, the first thing you could see when opening the webpage must be Seoul City hall.
2. When the webpage is first opened, it should send a GET request to [Angelswing's serverless api for testing](https://angelswing-frontend-test-serverless-api.vercel.app/api/locations). The API will return this JSON object:

   ```json
   {
     "locations": [
       [37.56755685, 126.97328373],
       [37.56722338, 126.98351298],
       [37.56269872, 126.97860143]
     ]
   }
   ```

   you should then place circles on each of these three locations as follows (notice the blue circles at three distinct locations):

   ![blue circles](./blue-circles.png)

3. You should make components so that the UX/UI of web project looks exactly the same as the prototype provided on Figma.

   - The link to Figma is https://www.figma.com/file/GMxzmwuhjGaLqkgPOSf1c4/FE-TEST?node-id=0%3A1.

4. Please write at least three reasonable tests inside a single test suite for at least one component.

# Additional notes

Because we are not using Docker for the sake of simplicity, although it's unlikely, there might be problems testing the code on another computer. So please tick the box that matches your OS, so that we may be aware of it.

- [ ] macOS
- [#] Linux
- [#] Windows

# 테스트의 목적

저희는 이런 부분들을 보고 싶습니다.

1. 주어진 Figma 시안을 보고 디자인을 그대로 만들 수 있는 실력
2. 숙련된 자바스크립트 (혹은 타입스크립트) 실력
3. 새로운 API를 빠르게 습득하는 실력
4. 자바스크립트 (혹은 타입스크립트) 생태계에 대한 이해도

# Todo

## 셋업

1. 현재 프로젝트가 타입스크립트를 사용하는 리액트 프로젝트로 바뀔 수 있도록 (웹펙 config 등 환경설정 파일 제외) 바꿔주세요. 타입스크립트를 잘 쓰기 위해 최선을 다해주시길 바랍니다.
2. css-in-js 를 위해 만들어진 3rd party 라이브러리 중 하나를 선택하고 설치하여 사용해주세요. 따라서 `src/index.css`에 있는 로직을 삭제하고 해당 라이브러리는 사용하는 부분의 코드로 옮겨주시기 바랍니다.
3. 관심사의 분리(separation of conceerns)를 위해 파일이나 컴포넌트를 알맞게 나누고 구성해주세요.
4. 컴포넌트 테스트를 위해서 `jest` 를 설치하신 후 (여기서도 타입스크립트를 사용하실 필요는 없습니다), 관련된 환경설정 파일이 만약 필요하다면 만들어주세요.

## 코드

다음과 같은 사항들이 충족시켜주세요:

1. 웹페이지가 처음 열리면, 오픈레이어스 지도의 중심은 [서울 시청](https://www.google.com/maps/place/Seoul+City+Hall/@37.5662952,126.9779451,15z/data=!4m2!3m1!1s0x0:0xe92b70ac420cf0a8?sa=X&ved=2ahUKEwi62Yygm5_sAhUGMd4KHaCBDK0Q_BIwFHoECBcQBQ)으로, zoom level은 16에 설정되어 있어야 합니다. 다른 말로 하자면, 웹페이지를 열었을 때 처음 보이는 장소가 서울 시청이면 됩니다.
2. 웹페이지가 처음 열리면, [테스트를 위해 만들어진 엔젤스윙의 서버리스 API로 GET 요청](https://angelswing-frontend-test-serverless-api.vercel.app/api/locations)을 보내야 합니다. API는 다음과 같은 JSON object를 반환할 것입니다:

   ```json
   {
     "locations": [
       [37.56755685, 126.97328373],
       [37.56722338, 126.98351298],
       [37.56269872, 126.97860143]
     ]
   }
   ```

   그리고는 세 곳의 위치중 각각의 장소에 원을 나타내주세요 (세 곳의 다른 장소에 있는 푸른 원을 확인해주세요):

   ![blue circles](./blue-circles.png)

3. 웹페이지의 UX/UI가 Figma의 시안과 일치하도록 만들어주세요.

   - Figma 링크는 https://www.figma.com/file/GMxzmwuhjGaLqkgPOSf1c4/FE-TEST?node-id=0%3A1 입니다.

4. 최소 하나의 컴포넌트를 선택하여 하나의 test suite에 최소 3개의 test를 작성해주세요.

# 기타 사항

간단한 테스트를 유지하기 위해 Docker는 사용하지 않습니다. 하지만 그렇기 때문에 발생할 가능성은 적지만 다른 컴퓨터에서 테스트를 할 때 문제가 발생할 수 있습니다. 그러므로, 테스트 리뷰어를 위해 어느 OS를 사용하여 개발하셨는지 체크 표시를 부탁드립니다.

- [ ] macOS
- [ ] Linux
- [ ] Windows
