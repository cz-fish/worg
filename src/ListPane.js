import React from 'react';
import 'antd/dist/antd.css';

class ListPane extends React.Component {
    render() {
        const items = this.props.entities ? this.props.entities.map((entity) => this.renderEntity(entity)) : null;
        return <div className="list-pane">
            {items}
        </div>;
    }

    renderEntity(entity) {
        return <div key={entity.id} className="entity">{entity.id}</div>;
    }
};

export default ListPane;