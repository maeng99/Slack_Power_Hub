# 🌏[우수상 수상] SlackPower Hub: Slack으로 누구나 간편하게 구축하는 스마트홈 (환경9조대팀)🌏
- "AWS Cloud를 활용한 2024 「INHA SW NET-Zero 공동해커톤」" 우수상 수상 (과학기술정보통신부 · 정보통신기획평가원 주관)
    - "2024 INHA SW NET-Zero 공동 해커톤 대회 성료" (https://www.inha.ac.kr/bbs/kr/11/38182/artclView.do)
<img src="https://github.com/user-attachments/assets/fa01dcc0-a26a-4cea-b874-4158d01c2ff9" width="300px"/>
<br/>
<br/>

## 1. Project Overview
- **프로젝트 이름: SlackPower Hub**
- 프로젝트 설명: 슬랙으로 누구나 간편하게 구축하는 스마트홈
<br/>

## 2. Team Members
| 김재현 | 김단이 | 김수현 | 맹의현 | 조찬희 |
|:------:|:------:|:------:|:------:|:------:|
| PL | PPT | BE | FE | BE |
<br/>

## 3. Key Features
- **일정시간 미사용 전기 자동 제어 기능**:

- **API 통합**:
  - Slack과 연동 및 제어

- **실시간 전력 사용량 모니터링을 통한 에너지 절약 및 탄소중립**:
    - 자동제어 모드를 활용하면, 설정한 시간(기본값 30분)이상 전력사용량이 0인 스마트 플러그를 자동 차단!

- **사용 패턴 학습**:
  - 사용자 개인의 전력 사용 패턴을 분석하고 최적화
<br/>

## 4. Technology Stack
- **FrontEnd:** React.js
  
- **BackEnd:** Node.js/Next.js, Spring
  
- **Database:** MySQL

- **Cooperation:** Git, Notion
<br/>

## 5. Project Structure
```plaintext
slackpowerhub/
│  README.md
│  SlackPower Hub.pdf
│
├─backend-node/
│  │  .env.back
│  │  .eslintrc.js
│  │  .gitignore
│  │  .prettierrc
│  │  docker-compose.yml
│  │  nest-cli.json
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │  tsconfig.build.json
│  │  tsconfig.json
│  │  yarn.lock
│  │
│  ├─migrations/
│  │      .snapshot-exampledb.json
│  │      .snapshot-rescue_db.json
│  │      20240719233851_undefined.ts
│  │      20240719234548_undefined.ts
│  │
│  ├─src/
│  │  │  app.controller.spec.ts
│  │  │  app.controller.ts
│  │  │  app.module.ts
│  │  │  app.service.ts
│  │  │  main.ts
│  │  │  mikro-orm.config.ts
│  │  │
│  │  ├─entities/
│  │  │      plugs.entity.ts
│  │  │      user.entity.ts
│  │  │
│  │  └─modules/
│  │      ├─plugs/
│  │      │  ├─add-plug/
│  │      │  │      add-plug.controller.ts
│  │      │  │      add-plug.module.ts
│  │      │  │      add-plug.service.ts
│  │      │  │      plug.dto.ts
│  │      │  │
│  │      │  ├─delete-plug/
│  │      │  │      delete-plug.controller.ts
│  │      │  │      delete-plug.module.ts
│  │      │  │      delete-plug.service.ts
│  │      │  │      plug.dto.ts
│  │      │  │
│  │      │  ├─get-plug/
│  │      │  │      get-plug.controller.ts
│  │      │  │      get-plug.module.ts
│  │      │  │      get-plug.service.ts
│  │      │  │      plug.dto.ts
│  │      │  │
│  │      │  ├─list-plug/
│  │      │  │      list-plug.controller.ts
│  │      │  │      list-plug.module.ts
│  │      │  │      list-plug.service.ts
│  │      │  │      plug.dto.ts
│  │      │  │
│  │      │  └─update-plug/
│  │      │          plug.dto.ts
│  │      │          update-plug.controller.ts
│  │      │          update-plug.module.ts
│  │      │          update-plug.service.ts
│  │      │
│  │      └─users/
│  │              users.module.ts
│  │              users.service.spec.ts
│  │              users.service.ts
│  │
│  └─test/
│          app.e2e-spec.ts
│          jest-e2e.json
│
├─backend-spring/
│  │  .gitignore
│  │  .gitkeep
│  │  build.gradle
│  │  gradlew
│  │  gradlew.bat
│  │  settings.gradle
│  │
│  ├─gradle/
│  │  └─wrapper/
│  │          gradle-wrapper.jar
│  │          gradle-wrapper.properties
│  │
│  └─src/
│      ├─main/
│      │  ├─java/
│      │  │  └─com/
│      │  │      └─example/
│      │  │          └─IotController/
│      │  │              │  IotControllerApplication.java
│      │  │              │
│      │  │              └─domain/
│      │  │                  ├─Energy/
│      │  │                  │  ├─dto/
│      │  │                  │  │      AutoOffRequest.java
│      │  │                  │  │      EnergyResponse.java
│      │  │                  │  │
│      │  │                  │  ├─model/
│      │  │                  │  │      Energy.java
│      │  │                  │  │
│      │  │                  │  ├─repository/
│      │  │                  │  │      EnergyRepository.java
│      │  │                  │  │
│      │  │                  │  └─service/
│      │  │                  │          EnergyService.java
│      │  │                  │
│      │  │                  ├─Iot/
│      │  │                  │  ├─controller/
│      │  │                  │  │      IoTController.java
│      │  │                  │  │
│      │  │                  │  └─service/
│      │  │                  │          IoTService.java
│      │  │                  │
│      │  │                  ├─Metric/
│      │  │                  │  ├─model/
│      │  │                  │  │      Metric.java
│      │  │                  │  │
│      │  │                  │  ├─reposiotry/
│      │  │                  │  │      MetricRepository.java
│      │  │                  │  │
│      │  │                  │  └─service/
│      │  │                  │          MetricService.java
│      │  │                  │
│      │  │                  ├─Plugs/
│      │  │                  │  ├─controller/
│      │  │                  │  │      PlugController.java
│      │  │                  │  │
│      │  │                  │  ├─dto/
│      │  │                  │  │      AddPlugDto.java
│      │  │                  │  │
│      │  │                  │  ├─model/
│      │  │                  │  │      Plugs.java
│      │  │                  │  │
│      │  │                  │  ├─repository/
│      │  │                  │  │      PlugRepository.java
│      │  │                  │  │
│      │  │                  │  └─service/
│      │  │                  │          PlugService.java
│      │  │                  │
│      │  │                  └─User/
│      │  │                      ├─model/
│      │  │                      │      Users.java
│      │  │                      │
│      │  │                      ├─repository/
│      │  │                      │      UserRepository.java
│      │  │                      │
│      │  │                      └─service/
│      │  │                              UserService.java
│      │  │
│      │  └─resources/
│      │          application.properties
│      │
│      └─test/
│          └─java/
│              └─com/
│                  └─example/
│                      └─IotController/
│                              IoTControllerApplicationTests.java
│
├─frontend/
│  │  .gitignore
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │
│  ├─public/
│  │  │  index.html
│  │  │  manifest.json
│  │  │  robots.txt
│  │  │
│  │  └─img/
│  │          circle-1.png
│  │          circle-2.png
│  │          circle-3.png
│  │          circle-4.png
│  │          guide1.PNG
│  │          guide2.PNG
│  │          guide3.PNG
│  │          main_logo.png
│  │          rotate-right.png
│  │          slack.png
│  │          small_logo.png
│  │          trash.png
│  │
│  └─src/
│      │  App.css
│      │  App.js
│      │  App.test.js
│      │  index.css
│      │  index.js
│      │  logo.svg
│      │  reportWebVitals.js
│      │  setupTests.js
│      │
│      ├─components/
│      │      button.tsx
│      │      nav.tsx
│      │
│      └─tabs/
│              addIoT.tsx
│              dashboard.tsx
│              guideline.tsx
│              login.tsx
│              signup.tsx
│
└─slack-app/
        lambda1.py
        lambda2.py
        layer.zip
        README.md
```
<br/>

## 6. Architecture
<img src="https://github.com/user-attachments/assets/774c32c7-8dd5-4ba8-8685-5d6e49cdd1aa" width="750px"/>
<br/>

## 7. 발표 PDF
- 프로젝트 자세히 알아보기

[slck_power_hub_PDF](https://github.com/maeng99/slack-power-hub/blob/master/SlackPower%20Hub.pdf)
