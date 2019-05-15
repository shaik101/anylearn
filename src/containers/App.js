import React, {Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
		// console.log('constructor');
	}

	componentDidMount() {
		fetch('https://api.myjson.com/bins/1abw76')
		.then(response => {
			return response.json();
		}).then(users => {
			this.setState({robots: users});
		})
		// console.log('componentDidMount');
	}
	
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});

	}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.course.toLowerCase().includes(searchfield.toLowerCase());
		});
		
			return (
				<div className='tc'>
					<h1 className="f1">anylearn</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}


export default App;
