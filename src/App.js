import React, {useState, useEffect} from 'react';
import Sketch from './Sketch';
import Nav from './Nav';
import {HELLOWELCOME} from './constants'
import {SketchField, Tools} from 'react-sketch';
import Icon from '@mdi/react';
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js';
import ReactTooltip from 'react-tooltip';
import { isMobile } from "react-device-detect";
import './App.css';

function App(props) {
  const [reff, setReff] = useState({undo: null})
  const [tool, setTool] = useState(Tools.Pencil)
  const [color, setColor] = useState('#fff')
  const [width, setWidth] = useState(3)
  const [record, setRecord] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [wsConnection, setWsConnection] = useState(null)
  const [values, setValues] = useState(JSON.parse(localStorage.getItem("canvas")) ? JSON.parse(localStorage.getItem("canvas")).objects : HELLOWELCOME)
  const [moveList, setMoveList] = useState([])
  const [moveCount, setMoveCount] = useState(0)
  console.log(props.location.search);
  const login = (x) => {
    console.log(x)
    props.history.push('/')
    setUser(x)
    setIsAuthenticated(true)
    console.log('currently logged in as: ', x.name)
  }
  const logout = () => {
    fetch(`https://pictopal-backend.herokuapp.com/logout`,{method: 'GET',
credentials: 'include'})
    setIsAuthenticated(false)
    setUser(null)
    if (wsConnection) {
      setWsConnection(null)
      setRecord(null)
    }
  }

  const handleLive = () => {
    console.log("Live");
    setRecord(!record)
    if (!record) {
      const url = 'wss://pictopal-backend.herokuapp.com'
      let connection = new WebSocket(url)

      connection.onopen = () => {
        connection.send('hey')
        connection.send(JSON.stringify(reff.toJSON()))
      }

      connection.onclose = () => {
        console.log("Closing socket!");
        setWsConnection(null)
      }

      connection.onerror = (error) => {
        console.log(`WebSocket error: ${error}`)
      }

      connection.onmessage = (e) => {
        console.log(e.data)
        let objects = JSON.parse(e.data).objects
        // props.reff.fromJSON(e.data)
         setValues(objects)
      }
      setWsConnection(connection)
    } else {
        wsConnection.close()
    }
  }
  const sendSketch = () => {
    console.log("ref object: ", reff);
    updateMoves()
    if (wsConnection) {
      console.log("Sending sketch!");
      wsConnection.send(JSON.stringify(reff.toJSON()))
    }
  }

  const updateMoves = () => {
    setMoveList(reff.toJSON().objects)
    setMoveCount(reff.toJSON().objects.length)
    console.log("moveCount updated to: ", moveCount);
  }

  useEffect(()=>{
      fetch(`https://pictopal-backend.herokuapp.com/getUser`,{method: 'GET',
credentials: 'include'})
      .then(r => r.json())
      .then(json => {
        if (json.email){
        login(json)
      }
      })
      return () => {
        if (wsConnection) {
          wsConnection.close()
        }
      }
  },[])

  return (
    <div className="App">
      <Sketch setReff={setReff} tool={tool} color={color} width={width} reff={reff} sendSketch={sendSketch} values={values}/>
      <Nav isAuthenticated={isAuthenticated} user={user} logout={logout} color={color} setColor={setColor} handleLive={handleLive} reff={reff} record={record} setTool={setTool} setWidth={setWidth}/>
    </div>
  );
}

export default App;
