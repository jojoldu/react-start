/**
 * Created by jojoldu@gmail.com on 2016-07-03.
 */
import React from 'react';
import Card from './Card';

class List extends React.Component {
    render() {
        var cards = this.props.cards.map( (card) => {
            return <Card key={card.id}
                         id={card.id}
                         title={card.title}
                         description={card.description}
                         tasks={card.tasks}/>
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}

export default List;