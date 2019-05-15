import React, {Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';


let list = [ {
    "id": 1,
    "course": "Web Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 2,
    "course": "mobile Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 3,
    "course": "front end Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 4,
    "course": "back end Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 5,
    "course": "Machine Learning",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 6,
    "course": "Data science",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 7,
    "course": "django web Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 8,
    "course": "android app Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 9,
    "course": "reactjs Development",
    "des": "This is web related front end and backend course"
  },
  {
    "id": 10,
    "course": "nodejs Development",
    "des": "This is web related front end and backend course"
  }]

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
		
			this.setState({robots: list});
		
	}
	
	
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});

	}
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.course.toLowerCase().includes(searchfield.toLowerCase());
		});
		if (!robots.length) {
			return <h1 className="tc">Loading...</h1>
		} else {
		// console.log('render');
			return (
				<div className='tc'>
					<h1 className="f1">anylearn</h1>
					<span><big><a href="https://www.cognitoforms.com/ctc15/WelcomeToMostTrendingOnlineLearnings"><b>Register Here! \u00A0 </b> </a></big>
					
					|<big><a href="https://api.whatsapp.com/send?phone=919550579599&text=Hi AnyLearn!"><b> \u00A0 WhatsApp Link!</b> </a></big>
					</span>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
