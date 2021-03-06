import React, {Component} from 'react';
import CardList from './CardList';
import SearchInput from './SearchInput';
import Scroll from './Scroll';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event)=> {
        this.setState({searchField: event.target.value});
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/Users')
        .then(response => response.json())
        .then(users => {
            this.setState({robots: users});
        })
    }
    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    <SearchInput onSearch={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
    
};

export default App;