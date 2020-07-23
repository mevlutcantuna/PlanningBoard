import React from 'react';
import '../style/Exit.css'

class Exit extends React.PureComponent {
    render() {
        const {history} = this.props
        return (
            <div className={'exit'}>
                {'See You Soon'}
                <button className={'back__page'} onClick={() => history && history.push('/board')}>Back to Page</button>
            </div>
        );
    }
}

export default Exit;