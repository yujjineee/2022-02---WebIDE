
💡 Web IDE 문제은행 <a name="TOP"></a>
===========
<br>

2022년 2학기 개별연구

<br>

## 💻 프로젝트 소개
<br>

* Web IDE로 알고리즘을 학습할 수 있는 문제은행 사이트입니다.
* <kbd>python</kbd> 지원
  
<br>


## 🖥️ 개발 환경 ##
<br>

* Backend


<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

* Database

<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

* Frontend

<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

* inner IDE
  
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">

개발 상황에 따라 C, JAVA 등 추가 예정

* Docker

<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">

* IDE

<img src="https://img.shields.io/badge/VS code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">


* badge 출처

https://simpleicons.org/?q=node

<br><br>

## 🛠️ 환경 설정 ##

<br>

__데이터베이스 설정__
    
    Local - mongodb://docker.for.mac.host.internal:27017/webide
    
    그 외 (기본 설정) - mongodb+srv://yujin:1234@webide.mju5iud.mongodb.net/?retryWrites=true&w=majority
    
__Docker Build__

    docker build <Dockerfile이 있는 경로> -t web-ide:1.0.0
    ex) docker build . -t web-ide:1.0.0

__도커 런 명령어__

    docker run -d -p 4000:7000 web-ide:1.0.0

__컨테이너 삭제 / 이미지 삭제__

    1. 컨테이너
        docer ps
        docker rm [Container id]

    2. 이미지
        docker images
        docker rmi [Image id]

    3. 한번에
        docker rmi -f [Image id]

__설정 완료__

git clone - docker build - docker run

<kbd> localhost:4000 </kbd> 으로 접속하면 환경 설정 완료!


## 🛠️ 미리보기 ##


