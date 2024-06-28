class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	parse(message) {
		const lowercaseMessage = message.toLowerCase();

		if (lowercaseMessage.includes('hello world')) {
			this.actionProvider.helloWorldHandler();
		}

		if (lowercaseMessage.includes('todos')) {
			this.actionProvider.todosHandler();
		}
	}
}

export default MessageParser;
