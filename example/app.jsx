import { PageStack, Page } from '../src/index';
import React from 'react';
import ReactDOM from 'react-dom';

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

const styles = {
	height: '100%',
	width: '100%'
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
