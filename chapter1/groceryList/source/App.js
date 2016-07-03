/**
 * Created by jojoldu@gmail.com on 2016-06-03.
 */
import React from 'react';
import ReactDom from 'react-dom';

export default class GroceryList extends React.Component {
	render(){
		return (
			<ul>
				<ListItem quantity="1" name="Bread" />
				<ListItem quantity="6" name="Eggs" />
				<ListItem quantity="2" name="Milk" />
			</ul>
		);
	}
}

class ListItem extends React.Component {
	render() {
		return (
			<li>
				{this.props.quantity} * {this.props.name}
			</li>
		)
	}
}

ReactDom.render(<GroceryList />, document.getElementById('root'));
