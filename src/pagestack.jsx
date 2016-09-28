import React from 'react';

const equalsZero = (num) => num === 0;
const errorMessage = 'PageStack component must have at least one child Card components. Please check the children of this PageStack instance.';

class PageStack extends React.Component {
	constructor (props) {
		super(props);
		const childrenLength = props.children.length || 0;

		if (childrenLength < 1) throw new Error(errorMessage);

		this.state = {
			selectedId: childrenLength-1
		};
	}

	handleCardClick (id) {
		const {selectedId} = this.state;

		const nextState = () => {
			return {
				selectedId: id
			};
		};

		this.setState(nextState);
	}

	renderPages () {
		const clonePage = (child, i) => React.cloneElement(child, {
			key: i,
			pageId: i,
			selected: this.state.selectedId == i,
			offset: this.props.offset*i,
			width: this.props.width-(this.props.children.length-1)*this.props.offset,
			zindex: this.state.selectedId == i ? this.props.children.length : i,
			onClick: this.handleCardClick.bind(this)
		});

		return this.props.children.map(clonePage);
	}

	render () {
		const stackStyles = {
			...styles,
			background: this.props.background,
			height: this.props.height,
			width: this.props.width
		};
		return (
			<ul style={stackStyles}>
				{this.renderPages()}
			</ul>
		);
	}
}

const styles = {
	position: 'relative',
	overflow: 'hidden',
	padding: 0,
	margin: 0
};

PageStack.propTypes = {
	background: React.PropTypes.string,
	height: React.PropTypes.number,
	width: React.PropTypes.number,
	offset: React.PropTypes.number
};

PageStack.defaultProps = {
	width: 350,
	height: 600,
	background: 'f8f8f8'
};

export default PageStack;
