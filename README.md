# 주제
프로 리액트 책을 통한 React 개발 생태계 경험하기! <br/>
프로리액트에서 코드 버전이 낮아 (0.13.x) 실제 사용해보면 안되거나, deprecated된게 많다.<br/>
이에 대한 수정내용도 첨부하려고 함

## 정리
#### 1장
* React.render() 는 deprecated 되었다. ReactDom.render()로 변경해서 책의 내용을 따라가야 한다.
* 속성 : 리액트의 부모 컴포넌트에서 자식컴포넌트로 데이터를 전달하는 메커니즘, <br/>
자식 컴포넌트 안에서 변경할순 없으며, 부모 컴포넌트가 전달하고 소유 한다.
<br/> <br/>
* KanbanBoard에서 map 사용시에 key 속성을 사용하지 않으면 <br/>
 ```
 Each child in an array or iterator should have a unique "key" prop. Check the render method of... 
 ```
 <br/>
 와 같은 에러가 발생한다. map을 사용하는 코드에 key = {task.id} 혹은 key = {card.id} 를 사용하자.
 
#### 2장
 * DOM 이벤트 관리 <br/>
 기존 칸반앱의 Card.js 코드를 보면 아래와 같이 function을 사용한다.<br/>
 ```
 <div className="card__title" onClick={ ()=> this.setState({showDetails: !this.state.showDetails})}>
 ```
 <br/> 
 결국 DOM내부에 function을 포함시키므로 좋은 사용방법은 아니다. 그래서 이를 분리하도록 한다.<br/>
 ```
 toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
 }
 ..... 
 <div className="card__title" onClick={this.toggleDetails.bind(this)}>
 ```
 <br/>
 * JSX와 HTML의 차이 <br/>
 1) 태그의 attribute는 카멜케이스로 작성한다 <br/>
 2) 모든 요소는 짝이 맞아야 한다 (JSX는 XML 기반이므로) <br/>
 -> img 과 같이 종료태그가 없는 경우 <img ... />로 자체종료태그를 사용한다. <br/>
 3) attribute 이름이 DOM API 기반이다. <br/>
 일반적으로 javascript를 이용해서 DOM을 조작할때 사용하는 API이름이 JSX에서는 attribute 이름이다.<br/>
 예를 들어 id가 box인 element의 class를 변경하려면 아래와 같이 사용된다. <br/>
 ```
 document.getElementById('box').className='some-class';
 ```
 JSX에서는 위처럼 API이름이 attribute 이름이 된다. <br/>
 ```
  <div id="box" className="some-class"></div>
 ```
 <br/>
 이는 JSX가 javascript를 확장한 형태이기 때문이다. <br/>
 
 * JSX는 javascript이므로 HTML주석은 사용하지 못하고, javascript의 주석을 사용해야 한다.
 * 
 
 
 