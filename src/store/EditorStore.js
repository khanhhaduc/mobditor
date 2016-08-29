import { observable, computed, action } from 'mobx';

export default class EditorStore {
	@observable sections = [];
	@observable nodes = [];
	@observable chunks = [];

	@computed get report() {
		if (this.nodes.length === 0) {
			return '<none>';
		}
		return `Total nodes: ${this.nodes.length}`;
	}

	@action
	addNode(node) {
		this.nodes.push(node);
	}

	@action
	addSection(section) {
		this.sections.push(section);
	}
}