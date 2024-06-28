class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	helloWorldHandler = () => {
		const message = this.createChatBotMessage("Hello I'm not self aware. Luckily");
		this.setChatbotMessage(message);
	};

	todosHandler = () => {
		const message = this.createChatBotMessage("Sure! Here's your todos", {
			widget: 'todos',
		});

		this.setChatbotMessage(message);
	};

	setChatbotMessage = (message) => {
		this.setState((state) => ({ ...state, messages: [...state.messages, message] }));
	};
}

export default ActionProvider;
