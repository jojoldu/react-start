/**
 * Created by jojoldu@gmail.com on 2016-07-03.
 */
import React from 'react';
import CheckList from './CheckList';
import marked from 'marked';

class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        }
    };

    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }

        return (
            <div className="card">
                <div className="card__title" onClick={
          ()=>this.setState({showDetails: !this.state.showDetails})
        }>{this.props.title}</div>
                {cardDetails}
            </div>
        );
    }
}

export default Card;