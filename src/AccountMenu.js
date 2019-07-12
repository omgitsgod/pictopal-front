import React, {useState, useEffect} from 'react';
import Icon from '@mdi/react'
import GoogleButton from 'react-google-button'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function AccountMenu(props) {
  return (
    <div className="accountmenu">
    {props.isAuthenticated ?
      <button>
        Log Out
      </button>
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
