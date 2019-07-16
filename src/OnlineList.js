import React, {useState, useEffect} from 'react';
import Icon from '@mdi/react'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function OnlineList(props) {
  return (
    <div className="onlinelist">
    <Icon path={mdiRecord}
      size={1}
      color="#26a367"
    />
    </div>
  )
}
export default OnlineList;
