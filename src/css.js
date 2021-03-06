const string = `
/*
 * Are you ready ?
 */
 
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.skin *::before, .skin *::after {
  box-sizing: border-box;
}

.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}

/*
 * First, draw Pikachu's nose
 */
 
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0;
  height: 0;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}

.circle {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: black;
}

/*
 * Then, draw Pikachu's eyes
 */

.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}

.eye::before {
  content: '';
  display: block;
  border: 2px solid #000;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 8px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translate(100px);
}

/*
 * Now, draw Pikachu's mouth
 */

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up {
  position: relative;
  top: -54px;
  z-index: 1;
}

.mouth .up .lip {
  height: 25px;
  width: 80px;
  border: 2px solid black;
  border-top: none;
  position: absolute;
  top:48px;
  background: #FEE433;
}

.mouth .up .lip.left {
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-right: none;
  transform: rotate(-20deg);
}

.mouth .up .lip.right {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-left: none;
  transform: rotate(20deg);
}

.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .bigcircle {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px / 300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .bigcircle .bigcircle2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}

.face > img {
  position: absolute;
  top: 50%;
  left: 50%;
}

.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}

.face.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}

.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}

/*
 * Thanks for watching,
 * Hope you like it !
 * See you next time !
 */
`

export default string