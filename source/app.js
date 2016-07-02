/**
 * Created by jojoldu@gmail.com on 2016-06-03.
 */
import React from 'react';
import ReactDom from 'react-dom';

export default class Hello extends React.Component {
	render(){
		return (
			<h1>Hello World</h1>
		);
	}
}
ReactDom.render(<Hello />, document.getElementById('root'));
