## Smart Farm Project

### 기능 :

웹에 들어가면 자신의 식물을 선택하고 아이디/비밀번호를 입력하고 신규 가입자라면 자신의 식물을 추가하고 그 식물을 클릭하면 그 식물의 현재상태를 볼수있음 <br>

### 식물의 현재정보 :

온도 && 습도 : 온습도센서에서 온도를 재고 int형으로 전송 <br>
식물의 물상태 : 수위센서를 이용하여 boolean형으로 전송 <br>
물 시간 : 물시간이 0일때부터 몇초정도가 지났는지 int형으로 전송 <br>
식물의 지금상태는 어떤지 : ESP32 cam에서 사진을 찍고 AI를 활용하여 A,B,C,D,E,F char형으로 전송 <br>

### 역할 :

| Name | role |
| --- | --- |
| 김동욱 | IoT, DB, Circuit Diagram |
| 신희성 | Front - End, Design |
| 조윤서 | Back - End |

### 언어 :

| Role | Language | Tool |
| --- | --- | --- |
| Front - End | HTML, CSS, JS | VSCode |
| Back - End | Node.JS | VSCode |
| Database | Firebase Realtime | Firebase |
| IoT | C++ | Arduino IDE, VSCode |
| Circuit Diagram | Fritzing | Fritzing |

나중에 내용추가 예정 <br>