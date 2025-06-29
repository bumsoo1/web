# 🧲 React Hook의 등장 배경

## ✅ 리액트 컴포넌트의 두 가지 형태
- **함수형 컴포넌트** (Functional Component)
- **클래스형 컴포넌트** (Class Component)

---

## 📜 리액트 초기 컴포넌트 사용 방식

- 일반적으로는 **함수형 컴포넌트**를 사용
- 하지만 다음과 같은 기능이 필요할 때만 클래스형 컴포넌트를 사용해야 했음:
  - 🎛️ **상태(state) 관리**
  - 🌀 **생명주기 메서드 (Lifecycle Methods)** 사용

---

## 🧱 클래스형 컴포넌트의 주요 단점

| ❌ 단점                          | 설명 |
|----------------------------------|------|
| 🔧 **복잡한 코드 구성**           | 컴포넌트 재사용성이 낮음 |
| 🚫 **최적화 어려움**              | 컴파일 단계에서 코드 최적화가 어려움 |
| ⚠️ **최신 기술 적용의 어려움**      | 새로운 패턴이나 기술 반영이 비효율적 |

---

## 💡 그래서 등장한 것이 바로...

# 🌀 **React Hook (리액트 훅)**

> 클래스형 컴포넌트의 단점을 보완하고,  
> 함수형 컴포넌트에서도 **상태 관리와 생명주기 기능**을  
> 사용할 수 있도록 만들어진 **혁신적인 기능**입니다!

---

## 🧩 React Hook이 해결해준 것
- ✔️ **간결한 코드**로 컴포넌트 작성 가능
- ✔️ **함수형 컴포넌트**에서도 상태 및 생명주기 로직 처리 가능
- ✔️ 최신 기술 및 패턴을 **더 유연하게 적용**

---

📌 **Hook은 함수형 컴포넌트를 더욱 강력하게 만들어주는 도구이며, React 개발의 새로운 표준으로 자리잡았습니다.**

# ⚛️ useState 훅(React Hook) 완전 정리

---

## 🔍 Reference

---

## 🎯 Parameters (매개변수)
- **initialState**: 상태의 초기값  
  - 모든 유형의 값이 될 수 있음  
  - 함수일 경우 특별한 동작 존재  
  - 초기 렌더링 이후에는 무시됨  
- **초기화 함수로서의 역할**  
  - `initialState`가 함수면 React는 컴포넌트 초기화 시 이 함수를 호출하여 반환값을 초기 상태로 저장  
  - 함수는 순수 함수여야 하며, 인자를 받지 않고 어떤 타입이든 반환해야 함  

---

## 🔄 Returns (반환값)
- `useState`는 **두 개의 값을 가진 배열**을 반환함  
  1. **현재 상태값**  
     - 첫 렌더링 시에는 `initialState` 값  
  2. **상태 업데이트 함수 (set 함수)**  
     - 상태를 변경하고, 리렌더링을 트리거하는 함수  

---

## ⚠️ Caveats (주의사항)
- `useState`는 **Hook이므로**  
  - 컴포넌트 최상위 레벨이나,  
  - 커스텀 Hook 내에서만 호출 가능  
- **조건문, 반복문 안에서 호출 불가!**  
  - 필요하면 새로운 컴포넌트를 분리하고 상태를 그 컴포넌트로 옮기자  
- **React Strict Mode**에서는 초기화 함수가 두 번 호출될 수 있음  
  - 개발 단계에서만 동작  
  - 순수 함수라면 문제 없음  
  - 호출 중 하나의 결과는 무시됨  

---

💡 **요약:**  
`useState`는 함수형 컴포넌트에서 상태를 선언하고 관리할 수 있게 해주는 기본 훅이며,  
초기값과 상태를 변경할 수 있는 함수를 함께 반환해 효율적인 상태 관리를 지원합니다.

