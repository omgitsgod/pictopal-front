import React, {useState, useEffect} from 'react';
import {SketchField, Tools} from 'react-sketch';
import Icon from '@mdi/react'
import GoogleButton from 'react-google-button'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import { SliderPicker } from 'react-color';
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function SettingsMenu(props) {
  return (
    <div className="settingsmenu">
      <Icon path={mdiTrashCanOutline}
        size={2}
        color="#92a3a8"
        onClick={() => localStorage.removeItem("canvas")}
        data-tip data-for='trash'
      />
      <ReactTooltip id='trash' type='info'>
        <span>Trash</span>
      </ReactTooltip>
      <Icon path={mdiCctv}
        size={2}
        color="#92a3a8"
        onClick={props.handleLive}
        data-tip data-for='live'
      />
      <ReactTooltip id='live' type='info'>
        <span>Live</span>
      </ReactTooltip>
      <Icon path={mdiShareOutline}
        size={2}
        color="#92a3a8"
        onClick={() => alert("Share!")}
        data-tip data-for='share'
      />
      <ReactTooltip id='share' type='info'>
        <span>Share</span>
      </ReactTooltip>
      <Icon path={mdiContentSave}
        size={2}
        color="#92a3a8"
        onClick={()=>localStorage.setItem("canvas", JSON.stringify(props.ref.toJSON()))}
        data-tip data-for='save'
      />
      <ReactTooltip id='save' type='info'>
        <span>Save</span>
      </ReactTooltip>
    </div>
  )
}
export default SettingsMenu;
