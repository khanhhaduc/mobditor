import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import DevTools from 'mobx-react-devtools';

@observer
export default class Editor extends Component {
	render() {
		const store = this.props.store;

		return (
			<div>
				{'Editor'}
				<button onClick={this.newNode}>{'Add node'}</button>
				{store.nodes.map((node, key) =>
					<span key={`node-${key}`}>{node}</span>
				)}
				<DevTools />
			</div>
		);
	}

	@autobind
	newNode() {
		this.props.store.addNode('kennek');
	}
}