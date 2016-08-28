import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'components';
import EditorStore from './store/EditorStore';

ReactDOM.render(
	<Editor store={new EditorStore()} />,
	document.getElementById('editor')
);