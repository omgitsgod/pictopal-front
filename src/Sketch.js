import React, {useState, useEffect} from 'react';
import AccountMenu from './AccountMenu'
import SettingsMenu from './SettingsMenu'
import ColorPicker from './ColorPicker'
import Nav from './Nav'
import {SketchField, Tools} from 'react-sketch';
import Icon from '@mdi/react'
import GoogleButton from 'react-google-button'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import { SliderPicker } from 'react-color';
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function Sketch(props) {
  const [ref, setRef] = useState({undo: null})
  const [record, setRecord] = useState(false)

  const defaults = {
    objects: props.values,
    background: ''
  }

  useEffect(() => {
    console.log("Updating values!");
    console.log(props.values);
  }, [props.values])

  console.log(props.reff);
  return (
      <header className="App-header">
        <div className="sketchy">
          <SketchField width={isMobile ? '360px' : '1024px'}
                             height={isMobile ? '500px' : '768px'}
                             tool={props.tool}
                             lineColor={props.color}
                             lineWidth={props.width}
                             defaultValue = {defaults}
                             ref={props.setReff}
                             onChange={()=> props.sendSketch()}/>
        </div>


      </header>
  );
}

export default Sketch;
