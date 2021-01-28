import React from 'react';
import Modal from '../Modal';

const StreamDelete = (props) => {
    const actions = (
        <React.Fragment>
            <div className = 'ui button negative'>Delete</div>
            <div className = 'ui button'>Cancel</div>
        </React.Fragment>
    );
    return (
        <div>
            <Modal title = 'Delete Stream' content = 'Are you sure you want to delete this stream' actions = {actions}/>
        </div>
    );
}

export default StreamDelete;