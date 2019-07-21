import React, {useState, useEffect} from 'react';
import Icon from '@mdi/react'
import GoogleButton from 'react-google-button'
import {mdiContentSave, mdiTestTube, mdiLogout, mdiAccountBox, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function AccountMenu(props) {
  return (
    <div className="accountmenu">
    {props.isAuthenticated ?
      <div>
      <Icon path={mdiTestTube}
        size={2}
        color="#92a3a8"
        onClick={()=>fetch('https://pictopal-backend.herokuapp.com/test')}
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
