import { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Editor extends Component {
	render() {
		// const store = this.props.store; 
		return (
			<div>
				{`Editor`}
			</div>
		);
	}

}

export default Editor;