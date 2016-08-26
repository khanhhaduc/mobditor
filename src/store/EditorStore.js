import { observable, computed, action } from 'mobx';

class EditorStore {
	@observable nodes = [];

	@computed get report() {
		if (this.nodes.length === 0)
			return "<none>";
		return `Total nodes: ${this.nodes.length}`; 
	}

	@action
	addNode(node) {
		this.nodes.push(node);
	}
}