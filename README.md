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
 Each child in an array or iterator should have a unique "key" prop. Check the render method of... <br/>
 ```
 와 같은 에러가 발생한다. map을 사용하는 코드에 key = {task.id} 혹은 key = {card.id} 를 사용하자.