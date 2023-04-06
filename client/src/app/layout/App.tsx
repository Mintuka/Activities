import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { List } from 'semantic-ui-react';
import { Activity } from '../../interface/activity';
import './index.css';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  console.log(activities)
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(res => {
      setActivities(res.data)
    })
  },[])
  return (
    <div className="App">
        <NavBar/>
        <List>
          {
            activities.map(activity => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            ))
          }
        </List>
    </div>
  );
}

export default App;