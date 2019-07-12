import React, {useState, useEffect} from 'react';
import AccountMenu from './AccountMenu'
import SettingsMenu from './SettingsMenu'
import ColorPicker from './ColorPicker'
import SketchTools from './SketchTools'
import Icon from '@mdi/react'
import {mdiRecord, mdiSettingsOutline, mdiAccountCircle} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function Nav(props) {
  const [ref, setRef] = useState({undo: null})
  const [colorPicker, setColorPicker] = useState(false)
  const [expand, setExpand] = useState(false)
  const [widthMenu, setWidthMenu] = useState(false)
  const [accountMenu, setAccountMenu] = useState(false)
  const [settingsMenu, setSettingsMenu] = useState(false)
  const [record, setRecord] = useState(false)


  const handleLive = () => {
    console.log("Live");
    setRecord(!record)
    if (!record) {
      const url = 'wss://pictopal-backend.herokuapp.com'
      const connection = new WebSocket(url)

      connection.onopen = () => {
        connection.send('hey')
        connection.send(JSON.stringify(props.reff.toJSON()))
      }

      connection.onerror = (error) => {
        console.log(`WebSocket error: ${error}`)
      }

      connection.onmessage = (e) => {
        console.log(e.data)
        // props.reff.fromJSON(e.data)
        // setValues(JSON.parse(e.data)
      }
    }
  }
  console.log(props.reff);
  return (
    <div className="App">
      <div className="Nav">
        {accountMenu ?
          <AccountMenu isAuthenticated={props.isAuthenticated}/>
        :
        null
        }
        {settingsMenu ?
          <SettingsMenu reff={props.reff} handleLive={handleLive}/>
          :
          null
        }
        {colorPicker?
        <ColorPicker color={props.color} setColor={props.setColor}/>
          :
          null
        }
        {widthMenu ?
          <input className="thick" style={{backgroundColor: props.color}} name="width" type="range" min="0" max="50" value={props.width} onChange={(e)=>props.setWidth(e.target.value)} />
          :
          null}
        <SketchTools reff={props.reff} setColorPicker={setColorPicker} colorPicker={colorPicker} setTool={props.setTool} setWidthMenu={setWidthMenu} widthMenu={widthMenu} expand={expand} setExpand={setExpand} color={props.color}/>
          {props.record ?
            <div>
            <Icon path={mdiRecord}
              className="bottomrighticon"
              size={2}
              color="#FF0000"
              onClick={()=>setAccountMenu(!accountMenu)}
              data-tip data-for='record'
            />
            <ReactTooltip id='record' type='info'>
              <span>Recording</span>
            </ReactTooltip>
            </div>
            :
            null
          }
          <Icon path={mdiAccountCircle}
            className="bottomrighticon"
            size={2}
            color={props.user.name? '#25839f' : '#92a3a8'}
            onClick={()=>setAccountMenu(!accountMenu)}
            data-tip data-for='account'
          />
          <ReactTooltip id='account' type='info'>
            <span>{props.user.name || 'Account'}</span>
          </ReactTooltip>
          <Icon path={mdiSettingsOutline}
            className="bottomrighticon"
            size={2}
            color="#92a3a8"
            onClick={()=>setSettingsMenu(!settingsMenu)}
            data-tip data-for='settings'
          />
          <ReactTooltip id='settings' type='info'>
            <span>Settings</span>
          </ReactTooltip>
      </div>
    </div>
  );
}


export default Nav;
