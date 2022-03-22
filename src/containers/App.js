import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../Scroll.js";
import "./App.css";

function App() {
    // State Hook
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    const onSearchChange = (event) => { 
        setSearchField( event.target.value );
    }

    // Effect Hook
    // useEffect is ran every time App is rendered so adding [] as a second parameter 
    // makes the fetch not run again because nothing is going to change in an empty array
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
    },[])
        
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (!robots.length) ? 
        <div className="tc">
            <h1>Loading...</h1>
        </div>
        : 
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    
}

export default App;