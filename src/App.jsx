import './App.css';
import { Chatbot } from 'react-chatbot-kit';

import './assets/styles.css';

import config from './configs/config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function App() {
	return (
		<>
			<Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
		</>
	);
}

export default App;
