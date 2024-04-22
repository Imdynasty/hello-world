// 발표자를 선정하는 함수
function getRandomPresenter(people, count) {
  let selectedPeople = [];
  while (selectedPeople.length < count) {
    let randomIndex = Math.floor(Math.random() * people.length);
    let person = people[randomIndex];
    if (!selectedPeople.includes(person)) {
      selectedPeople.push(person);
    }
  }
  return selectedPeople;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
btn.addEventListener("click", function () {
  var numbers = getRandomPresenter(number, 7);
  result1.innerText = "";
  numbers.sort(function (a, b) {
    //로또 처럼 숫자 정렬
    return a - b;
  });

  var index = 0;
  var intervalId = setInterval(function () {
    if (index < numbers.length) {
      var span = document.createElement("span"); //네모칸을 넣어 숫자를 표시
      span.style.border = "1px solid black";
      span.style.margin = "3px";
      //span.style.padding = "0.2px";
      if (index === numbers.length - 1) {
        span.innerText = "+ " + numbers[index];
      } else {
        span.innerText = numbers[index];
      }
      result1.appendChild(span); //부모자식에 자식노드를 추가하는 메서드이다.append와 다르게 오직node객체만 받을 수 있다.
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 700);
});

// 랜덤 색상을 생성하는 함수
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; //버튼 눌러을때 색상 랜덤 배정
  }
  return color;
}

// 해당 색상을 텍스트에 적용하는 함수
function applyRandomColor(elementId) {
  var color = getRandomColor();
  document.getElementById(elementId).style.color = color;
}

// 랜덤 숫자가 생성될 때마다 이 함수를 호출하여 색상을 변경
// 예를 들어, 'result1'이라는 id를 가진 요소에 랜덤 색상을 적용하려면 다음과 같이 호출합니다.
applyRandomColor("result1");
