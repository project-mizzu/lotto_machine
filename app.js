const randomBtn = document.querySelector('.random-btn');
const deleteBtn = document.querySelector('.delete-btn');
const numberBox = document.querySelector('.number-box');
const lottoMachineBall = document.querySelector('.lotto-machine-top');
const ballOne = document.querySelector('.one');
const ballTwo = document.querySelector('.two');
const ballThree = document.querySelector('.three');
const ballFour = document.querySelector('.four');
const ballFive = document.querySelector('.five');
const ballSix = document.querySelector('.six');
let lottoNumberBox = [];

function ballAnimation(ball, animation) {
  ball.classList.remove(animation),
  ball.offsetWidth,
  ball.classList.add(animation);
}

function renderNumber(lottoBox, num, delay) {
  setTimeout(function () {
    lottoBox[num].style.opacity = '1';
  }, delay);
}

randomBtn.addEventListener('click', () => {
  ballAnimation(ballOne, 'ballAni1');
  ballAnimation(ballTwo, 'ballAni2');
  ballAnimation(ballThree, 'ballAni3');
  ballAnimation(ballFour, 'ballAni4');
  ballAnimation(ballFive, 'ballAni5');
  ballAnimation(ballSix, 'ballAni6');
  for (let i = 0; i < 6; i++) {
    // 0 - 45번 사이의 로또번호 추출
    let randomNum = Math.floor(Math.random() * 45) + 1;
    // lottoNumberBox 배열 안에 없는 숫자일 경우만 주입
    if (lottoNumberBox.indexOf(randomNum) === -1) {
      lottoNumberBox.push(randomNum);
    } else {
      i--;
    }
  }
  // 로또번호 오름차순 정렬
  const sortedNum = lottoNumberBox.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  // sortedNum 중 번호 하나를 랜덤으로 골라 보너스 숫자로 추출
  const bounsNum = sortedNum[Math.floor(Math.random() * 6)];
  const lottoNum = sortedNum.filter((el) => el !== bounsNum);
  numberBox.innerHTML = `
  <div class="lotto-box one display-center">
    <p class="lotto-number display-center">${lottoNum[0]}</p>
  </div>
  <div class="lotto-box two display-center">
    <p class="lotto-number display-center">${lottoNum[1]}</p>
  </div>
  <div class="lotto-box three display-center">
    <p class="lotto-number display-center">${lottoNum[2]}</p>
  </div>
  <div class="lotto-box four display-center">
    <p class="lotto-number display-center">${lottoNum[3]}</p>
  </div>
  <div class="lotto-box five display-center">
    <p class="lotto-number display-center">${lottoNum[4]}</p>
  </div>
  <div class="lotto-box bonus display-center">
    <p class="lotto-number display-center">${bounsNum}</p>
  </div>`;
  // 숫자 범위에 따라 다른 배경색 적용
  const lottoBox = document.querySelectorAll('.lotto-box');
  for (let i = 0; i < lottoBox.length; i++) {
    lottoBox[i].style.opacity = '0';
    if (lottoNum[i] > 0 && lottoNum[i] < 11) {
      lottoBox[i].style.background =
        'linear-gradient(to bottom right, #f8bb3b, #f0a202)';
    } else if (lottoNum[i] >= 11 && lottoNum[i] < 21) {
      lottoBox[i].style.background =
        'linear-gradient(to bottom right, #79b1e7, #287ad0)';
    } else if (lottoNum[i] >= 21 && lottoNum[i] < 31) {
      lottoBox[i].style.background =
        'linear-gradient(to bottom right, #fb5941, #f5331f)';
    } else if (lottoNum[i] >= 31 && lottoNum[i] < 41) {
      lottoBox[i].style.background =
        'linear-gradient(to bottom right, #707271, #4f4f4f)';
    } else if (lottoNum[i] >= 41 && lottoNum[i] < 46) {
      lottoBox[i].style.background =
        'linear-gradient(to bottom right, #8ccc63, #4d9303)';
    }
  }
  // 숫자 차례로 렌더
  renderNumber(lottoBox, 0, 3700);
  renderNumber(lottoBox, 1, 4300);
  renderNumber(lottoBox, 2, 4900);
  renderNumber(lottoBox, 3, 5500);
  renderNumber(lottoBox, 4, 6100);
  renderNumber(lottoBox, 5, 6700);
  lottoNumberBox = [];
});