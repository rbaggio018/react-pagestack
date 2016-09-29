React Page Stack
=========================

## Installation

react-cardstack requires **React 0.14 or later.**

```
npm install --save https://github.com/davezuko/react-redux-starter-kit.git
```

## Demo & Example

To build the example locally, clone this repo then run:

```
npm install
npm start
Then open localhost:8080 in a browser.
```

## Usage

An example use of React Page Stack looks like:

```js
import { PageStack, Page } from 'react-cardstack';

const App = (props) => (
	<div>
		<PageStack
			height={400}
			width={600}
			background="#f8f8f8"
			offset={50}>

			<Page>
				<TestComponent word="question library" backgroundColor="blue" />
			</Page>

			<Page>
				<TestComponent word="live session" backgroundColor="purple" />
			</Page>

		</PageStack>
	</div>
);

class TestComponent extends React.Component {
	render () {
		const testStyles = {
			...styles,
			backgroundColor: this.props.backgroundColor
		};
		return (
			<div style={testStyles}>
				<span>{this.props.word}</span>
		  </div>
		);
	}
}
```

## License

MIT Licensed Copyright (c) Cameron Bourke 2016
