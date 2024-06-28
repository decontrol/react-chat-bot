/* had to convert it to jsx since it contains jsx syntax in customComponents - bot */
import { createChatBotMessage } from 'react-chatbot-kit';

import BotAvatar from '../components/BotAvatar';
import Todos from '../components/Todos';

const config = {
	initialMessages: [
		createChatBotMessage(
			`Hello world`
			// , {
			// widget: 'todos',
			// }
		),
	],
	botName: 'OctaBot',

	customComponents: {
		// Replace the default bot avatar
		botAvatar: (props) => <BotAvatar {...props} />,
	},
	customStyles: {
		botMessageBox: {
			backgroundColor: 'purple',
		},
		chatButton: {
			backgroundColor: 'purple',
		},
	},

	state: {
		todos: [],
	},

	/* widgets are components you create */
	widgets: [
		{
			widgetName: 'todos',
			widgetFunc: (props) => <Todos {...props} />,
			mapStateToProps: ['todos'],
		},
	],
};

export default config;
