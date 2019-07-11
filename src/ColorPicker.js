import React, {useState, useEffect} from 'react';
import { SliderPicker } from 'react-color';
import ReactTooltip from 'react-tooltip'
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
