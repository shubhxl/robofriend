import React from 'react'
import CardList from './CardList';
import Scroll from './Scroll';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            search : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json()
        }).then(users =>{
            this.setState({robots : users})
        })
    }

    OnSearch = (event) =>{
       this.setState({search: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return(
            <div className="tc">
                <h1> RoboFriends</h1>
                <input placeholder="search robot" className="ma2" onChange={this.OnSearch}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
 
}

export default App;