import React, {useState, useEffect} from 'react';
import Sketch from './Sketch'
import Nav from './Nav'
import {SketchField, Tools} from 'react-sketch';
import Icon from '@mdi/react'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function App() {
  const [reff, setReff] = useState({undo: null})
  const [tool, setTool] = useState(Tools.Pencil)
  const [color, setColor] = useState('#fff')
  const [width, setWidth] = useState(3)
  const [record, setRecord] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const []
  return (
    <div className="App">
      <Sketch setReff={setReff} tool={tool} color={color} width={width} reff={reff}/>
      <Nav color={color} setColor={setColor}  reff={reff} record={record} setTool={setTool} setWidth={setWidth}/>
    </div>
  );
}

export default App;
