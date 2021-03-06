import React, {useState, useEffect} from 'react';
import Icon from '@mdi/react'
import GoogleButton from 'react-google-button'
import SettingsMenu from './SettingsMenu'
import {MAYBEMAYBE} from './constants'
import {mdiContentSave, mdiNuke, mdiTestTube, mdiLogout, mdiAccountBox, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function AccountMenu(props) {
  const [settingsMenu, setSettingsMenu] = useState(false)
  return (
    <div className="accountmenu">
    {props.isAuthenticated ?
      <div>
      {settingsMenu ?
        <SettingsMenu reff={props.reff} handleLive={props.handleLive}/>
        :
        null
      }
      <Icon path={mdiSettingsOutline}
        size={2}
        color="#92a3a8"
        onClick={()=>setSettingsMenu(!settingsMenu)}
        data-tip data-for='settings'
      />
      <ReactTooltip id='settings' type='info'>
        <span>Settings</span>
      </ReactTooltip>
      <Icon path={mdiTestTube}
        size={2}
        color="#92a3a8"
        onClick={()=> props.reff.fromJSON(MAYBEMAYBE)}
      />
      <Icon path={mdiAccountBox}
        size={2}
        color="#d11935"
        onClick={()=>props.setLiveList(!props.liveList)}
      />
      <Icon path={mdiAccountBox}
        size={2}
        color="#92a3a8"
        onClick={()=>props.setOnlineList(!props.onlineList)}
      />
      <Icon path={mdiLogout}
        size={2}
        color="#d11935"
        onClick={props.logout}
      />
      </div>
      :
      <a href="https://pictopal-backend.herokuapp.com/auth/google">
      <GoogleButton
        onClick={() => { console.log('Google button clicked') }}
      />
      </a>
    }
    </div>
  )
}
export default AccountMenu;
