import React, {useState, useEffect} from 'react';
import Sketch from './Sketch';
import Nav from './Nav';
import {SketchField, Tools} from 'react-sketch';
import queryString from 'query-string';
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
  const [token, setToken] = useState('')
  console.log(props.location.search);
  console.log(token);

  const login = (x) => {
    setUser(x)
    setIsAuthenticated(true)
  //  window.localStorage.setItem("jwt", query.token)
    this.props.history.push("/")
  }

  useEffect(()=>{
    const query = queryString(props.location.search)
    if (query.token) {
    //  setToken(query.token)
      fetch(`https://pictopal-backend.herokuapp.com/getUser/${query.token}`)
      .then(r => r.json())
      .then(json => {
        login(json)
      })
    }
  },[])

  return (
    <div className="App">
      <Sketch setReff={setReff} tool={tool} color={color} width={width} reff={reff}/>
      <Nav isAuthenticated={isAuthenticated} color={color} setColor={setColor}  reff={reff} record={record} setTool={setTool} setWidth={setWidth}/>
    </div>
  );
}

export default App;
