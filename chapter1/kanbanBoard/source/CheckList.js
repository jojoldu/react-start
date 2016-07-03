/**
 * Created by jojoldu@gmail.com on 2016-07-03.
 */
import React from 'react';

class CheckList extends React.Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="javascript:;" className="checklist__task--remove" />
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default CheckList;