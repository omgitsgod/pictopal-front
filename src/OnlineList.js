import React, {useState, useEffect} from 'react';
import Icon from '@mdi/react'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function OnlineList(props) {
  const [online, setOnline] = useState([])
  useEffect(() =>{
    fetch(`https://pictopal-backend.herokuapp.com/onlineList`).then(r => r.json()).then(setOnline)
  }, [])
  let list = online.map(x =>
    <div>
    <Icon path={mdiRecord}
    size={1}
    color="#26a367"
    />
    <p>{x}</p>
    </div>
  )

  return (
    <div className="onlinelist">
    {list}
    </div>
  )
}
export default OnlineList;
