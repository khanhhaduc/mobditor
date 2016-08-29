import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { autobind } from 'core-decorators';

@observer
export default class Section extends Component {
	render() {
		let section = this.props.data;
		return (
			<span onClick={this.toggleTick}>
				{`${section.text} - ${section.ticked ? 'ticked' : 'notticked'}`}
			</span>
		);
	}

	@autobind
	toggleTick() {
		const section = this.props.data;
		section.ticked = !section.ticked;
	}
}