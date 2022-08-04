## React Totolist


### 프로젝트의 목적
+ Redux 숙련
+ Styled Component 숙련
+ Router 숙련


### 파일구조
<img src="https://user-images.githubusercontent.com/108926635/182824742-143c211a-b20d-4f95-996d-d21186ec2523.png"/>



### 컴포넌트 구분 사유
+ components : 메인페이지를 header / form / todo 컴포넌트로 나누었고, todo의 자식컴포넌트로 todolist컴포넌트를 구성하였습니다. todolist는 map이나 filter와 같은 매서드를 적용하기에 필요하다고 생각했습니다
+ page : 페이지가 2개로 구성되어 있어 Main과 Subpage로 나눴습니다
+ redux
   + config : 중앙State관리소인 configStore.js를 만들어 설정을 하였숩나더
   + modules : Project에 사용한 State를 한번에 관리했습니다 (Ducks 패턴)





