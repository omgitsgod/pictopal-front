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
    <div>
    <SliderPicker
    width='5px'
    color={props.color}
    onChangeComplete={(color)=>props.setColor(color.hex)}
  />
    <br />
    </div>
  )
}
export default SettingsMenu;
