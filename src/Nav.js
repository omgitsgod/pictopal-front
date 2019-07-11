import React, {useState, useEffect} from 'react';
import AccountMenu from './AccountMenu'
import SettingsMenu from './SettingsMenu'
import ColorPicker from './ColorPicker'
import SketchTools from './SketchTools'
import {SketchField, Tools} from 'react-sketch';
import Icon from '@mdi/react'
import GoogleButton from 'react-google-button'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import { SliderPicker } from 'react-color';
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function Nav(props) {
  const [values, setValues] = useState(JSON.parse(localStorage.getItem("canvas")) ? JSON.parse(localStorage.getItem("canvas")).objects :  [{"type":"line","originX":"center","originY":"center","left":98.41,"top":133.92,"width":5,"height":162,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-2.5000111045611817,"x2":2.5000111045611817,"y1":-81.00166757284126,"y2":81.00166757284126},{"type":"line","originX":"center","originY":"center","left":121.41,"top":130.42,"width":41,"height":1,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-20.500091057401697,"x2":20.500091057401697,"y1":0.5000102936595141,"y2":-0.5000102936595141},{"type":"line","originX":"center","originY":"center","left":144.41,"top":121.42,"width":1,"height":187,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-0.5000022209122363,"x2":0.5000022209122363,"y1":-93.5019249143291,"y2":93.5019249143291},{"type":"line","originX":"center","originY":"center","left":187.41,"top":182.92,"width":33,"height":0,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-16.5000732901038,"x2":16.5000732901038,"y1":0,"y2":0},{"type":"line","originX":"center","originY":"center","left":202.41,"top":166.42,"width":3,"height":33,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":1.500006662736709,"x2":-1.500006662736709,"y1":16.500339690763965,"y2":-16.500339690763965},{"type":"line","originX":"center","originY":"center","left":184.41,"top":149.92,"width":35,"height":0,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":17.500077731928272,"x2":-17.500077731928272,"y1":0,"y2":0},{"type":"line","originX":"center","originY":"center","left":169.91,"top":182.42,"width":6,"height":65,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-3.000013325473418,"x2":3.000013325473418,"y1":-32.5006690878684,"y2":32.5006690878684},{"type":"line","originX":"center","originY":"center","left":189.91,"top":215.42,"width":34,"height":1,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-17.000075511016036,"x2":17.000075511016036,"y1":-0.5000102936595141,"y2":0.5000102936595141},{"type":"line","originX":"center","originY":"center","left":235.91,"top":134.92,"width":10,"height":156,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":5.000022209122363,"x2":-5.000022209122363,"y1":78.00160581088417,"y2":-78.00160581088417},{"type":"line","originX":"center","originY":"center","left":260.91,"top":135.92,"width":12,"height":148,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":6.00002665094685,"x2":-6.00002665094685,"y1":74.00152346160806,"y2":-74.00152346160806},{"type":"circle","originX":"left","originY":"center","left":284.91,"top":154.92,"width":57.32,"height":57.32,"fill":"transparent","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":47.12,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","radius":28.65783551172888,"startAngle":0,"endAngle":6.283185307179586},{"type":"rect","originX":"left","originY":"top","left":374.91,"top":46.91,"width":14,"height":123,"fill":"#b0bc00","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","rx":0,"ry":0},{"type":"circle","originX":"left","originY":"center","left":373.91,"top":182.92,"width":21.93,"height":21.93,"fill":"#b0bc00","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":46.85,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","radius":10.96599903840613,"startAngle":0,"endAngle":6.283185307179586}])
  const [ref, setRef] = useState({undo: null})
  const [tool, setTool] = useState(Tools.Pencil)
  const [color, setColor] = useState('#fff')
  const [colorPicker, setColorPicker] = useState(false)
  const [expand, setExpand] = useState(false)
  const [width, setWidth] = useState(3)
  const [widthMenu, setWidthMenu] = useState(false)
  const [accountMenu, setAccountMenu] = useState(false)
  const [settingsMenu, setSettingsMenu] = useState(false)
  const [record, setRecord] = useState(false)

  const defaults = {
    objects: values,
    background: ''
  }
  const handleLive = () => {
    console.log("Live");
    setRecord(!record)
    if (!record) {
      const url = 'wss://pictopal-backend.herokuapp.com'
      const connection = new WebSocket(url)

      connection.onopen = () => {
        connection.send('hey')
        connection.send(JSON.stringify(ref.toJSON()))
      }

      connection.onerror = (error) => {
        console.log(`WebSocket error: ${error}`)
      }

      connection.onmessage = (e) => {
        console.log(e.data)
        // ref.fromJSON(e.data)
        // setValues(JSON.parse(e.data)
      }
    }
  }
  console.log(ref);
  return (
    <div className="App">
      <div className="Nav">
        {props.accountMenu ?
          <AccountMenu />
        :
        null
        }
        {props.settingsMenu ?
          <SettingsMenu reff={props.reff} handleLive={handleLive}/>
          :
          null
        }
        {props.colorPicker?
        <ColorPicker color={props.color} setColor={props.setColor}/>
          :
          null
        }
        {props.widthMenu ?
          <input className="thick" style={{backgroundColor: color}} name="width" type="range" min="0" max="50" value={props.width} onChange={(e)=>props.setWidth(e.target.value)} />
          :
          null}
        <SketchTools reff={props.reff} setColorPicker={props.setColorPicker} colorPicker={props.colorPicker} setTool={props.setTool} setWidthMenu={props.setWidthMenu} widthMenu={props.widthMenu} expand={props.expand} setExpand={props.setExpand} color={props.color}/>
          {props.record ?
            <div>
            <Icon path={mdiRecord}
              className="bottomrighticon"
              size={2}
              color="#FF0000"
              onClick={()=>props.setAccountMenu(!accountMenu)}
              data-tip data-for='record'
            />
            <ReactTooltip id='record' type='info'>
              <span>Recording</span>
            </ReactTooltip>
            </div>
            :
            null
          }
          <Icon path={mdiAccountCircle}
            className="bottomrighticon"
            size={2}
            color="#92a3a8"
            onClick={()=>props.setAccountMenu(!props.accountMenu)}
            data-tip data-for='account'
          />
          <Icon path={mdiSettingsOutline}
            className="bottomrighticon"
            size={2}
            color="#92a3a8"
            onClick={()=>props.setSettingsMenu(!props.settingsMenu)}
            data-tip data-for='settings'
          />
          <ReactTooltip id='account' type='info'>
            <span>Account</span>
          </ReactTooltip>
      </div>
    </div>
  );
}


export default Nav;
