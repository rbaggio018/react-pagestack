import React from 'react';

class Page extends React.Component {
	constructor (props) {
		super(props);
	}

	handleClick () {
		const {pageId} = this.props;
		this.props.onClick(pageId);
	}

	render () {
		const {pageId, selected, offset} = this.props;
		const transform = `translate3d(${offset}px,0,0)`;
		const pageStyles = {
			...styles,
			transform,
			WebkitTransform: transform,
			width: this.props.width,
			zIndex: this.props.zindex,
			listStyle: "none"
		};
		return (
			<li
				style={pageStyles}
				onClick={this.handleClick.bind(this)}>
					{this.props.children}
			</li>
		);
	}
}

const styles = {
	position: 'absolute',
	top: 0,
	height: '100%',
	transition: '0.5s transform ease',
	WebkitTransition: '-webkit-transform 0.5s ease',
};

export default Page;
