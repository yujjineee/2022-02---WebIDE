
๐ก Web IDE ๋ฌธ์ ์ํ <a name="TOP"></a>
===========
<br>

๋๊ตญ๋ํ๊ต ์ปดํจํฐ๊ณตํ๊ณผ

2022๋ 2ํ๊ธฐ ๊ฐ๋ณ์ฐ๊ตฌ

<br>

## ๐ป ํ๋ก์ ํธ ์๊ฐ
<br>

* Web IDE๋ก ์๊ณ ๋ฆฌ์ฆ์ ํ์ตํ  ์ ์๋ ๋ฌธ์ ์ํ ์ฌ์ดํธ์๋๋ค.
* <kbd>python</kbd> ์ง์
  
<br>


## ๐ฅ๏ธ ๊ฐ๋ฐ ํ๊ฒฝ ##
<br>

* Backend


<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

* Database

<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

* Frontend

<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

* inner IDE
  
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">

๊ฐ๋ฐ ์ํฉ์ ๋ฐ๋ผ C, JAVA ๋ฑ ์ถ๊ฐ ์์ 

* Docker

<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">

* IDE

<img src="https://img.shields.io/badge/VS code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">


* badge ์ถ์ฒ

https://simpleicons.org/?q=node

<br><br>

## ๐ ๏ธ ํ๊ฒฝ ์ค์  ##

<br>

__๋ฐ์ดํฐ๋ฒ ์ด์ค ์ค์ __
    
    Local - mongodb://docker.for.mac.host.internal:27017/webide
    
    ๊ทธ ์ธ (๊ธฐ๋ณธ ์ค์ ) - mongodb+srv://yujin:1234@webide.mju5iud.mongodb.net/?retryWrites=true&w=majority
    
__Docker Build__

    docker build <Dockerfile์ด ์๋ ๊ฒฝ๋ก> -t web-ide:1.0.0
    ex) docker build . -t web-ide:1.0.0

__๋์ปค ๋ฐ ๋ช๋ น์ด__

    docker run -d -p 4000:7000 web-ide:1.0.0

__์ปจํ์ด๋ ์ญ์  / ์ด๋ฏธ์ง ์ญ์ __

    1. ์ปจํ์ด๋
        docer ps
        docker rm [Container id]

    2. ์ด๋ฏธ์ง
        docker images
        docker rmi [Image id]

    3. ํ๋ฒ์
        docker rmi -f [Image id]

__CodeMirror ํ์ผ ์ถ๊ฐ__

    https://codemirror.net/5/doc/releases.html ์ ์
    Version 5.65.10 ๋ค์ด๋ก๋ - public/assets ํด๋์ ์์ถ ํด์ 


__์ค์  ์๋ฃ__

git clone - docker build - docker run

<kbd> localhost:4000 </kbd> ์ผ๋ก ์ ์ํ๋ฉด ํ๊ฒฝ ์ค์  ์๋ฃ!


## ๐ ๏ธ ๋ฏธ๋ฆฌ๋ณด๊ธฐ ##


