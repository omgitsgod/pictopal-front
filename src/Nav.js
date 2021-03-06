import React, {useState, useEffect} from 'react';
import AccountMenu from './AccountMenu'
import SettingsMenu from './SettingsMenu'
import ColorPicker from './ColorPicker'
import SketchTools from './SketchTools'
import OnlineList from './OnlineList'
import LiveList from './LiveList'
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
  const [onlineList, setOnlineList] = useState(false)
  const [liveList, setLiveList] = useState(false)


  console.log(props.reff);
  return (
    <div className="App">
      <div className="Nav">
        {props.isAuthenticated && liveList?
        <LiveList />
          :
          null
        }
        {props.isAuthenticated && onlineList?
        <OnlineList />
          :
          null
        }
        {accountMenu ?
          <AccountMenu reff={props.reff} handleLive={props.handleLive} isAuthenticated={props.isAuthenticated} logout={props.logout} onlineList={onlineList} setOnlineList={setOnlineList} liveList={liveList} setLiveList={setLiveList}/>
        :
        null
        }
        {settingsMenu ?
          <SettingsMenu reff={props.reff} handleLive={props.handleLive}/>
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
          {props.user ?
            <img className='avatar' src={props.user.photo} alt={'avatar'} onClick={()=>setAccountMenu(!accountMenu)}/>
            :
            <div>
          <Icon path={mdiAccountCircle}
            className="bottomrighticon"
            size={2}
            color={props.user ? '#25839f' : '#92a3a8'}
            onClick={()=>setAccountMenu(!accountMenu)}
            data-tip data-for='account'
          />
          <ReactTooltip id='account' type='info'>
            <span>{props.user ? props.user.name : 'Account'}</span>
          </ReactTooltip>
          </div>
        }
      </div>
    </div>
  );
}


export default Nav;
