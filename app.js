let items = ['milk', 'cheese', 'juice'];

let GroceryList = () => {
	return (<ul> 
	{items.map((item) => {
		return <GroceryListItem item={item}/> 
	})}
	</ul>)
}


// let GroceryListItem = (props) => {
// 	console.log(props)
// 	return <li>{props.item}</li>
// }

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false 
		};
	}
	onListItemClick() {
		this.setState({
			done: !this.state.done
		})
	}
	render() {
		let style = {
			textDecoration: this.state.done ? 'line-through': 'none'
		};
		return (
			<li style= {style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
		);
	}
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));
