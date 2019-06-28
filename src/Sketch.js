import React, {useState, useEffect} from 'react';
import {SketchField, Tools} from 'react-sketch';
import Icon from '@mdi/react'
import {mdiContentSave, mdiRecord, mdiCctv, mdiTrashCanOutline, mdiShareOutline, mdiSettingsOutline, mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiAccountCircle, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiDragVertical, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import { SliderPicker } from 'react-color';
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function Sketch(props) {
  const [values, setValues] = useState(JSON.parse(localStorage.getItem("canvas")) ? JSON.parse(localStorage.getItem("canvas")).objects :  [{"type":"line","originX":"center","originY":"center","left":98.41,"top":133.92,"width":5,"height":162,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-2.5000111045611817,"x2":2.5000111045611817,"y1":-81.00166757284126,"y2":81.00166757284126},{"type":"line","originX":"center","originY":"center","left":121.41,"top":130.42,"width":41,"height":1,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-20.500091057401697,"x2":20.500091057401697,"y1":0.5000102936595141,"y2":-0.5000102936595141},{"type":"line","originX":"center","originY":"center","left":144.41,"top":121.42,"width":1,"height":187,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-0.5000022209122363,"x2":0.5000022209122363,"y1":-93.5019249143291,"y2":93.5019249143291},{"type":"line","originX":"center","originY":"center","left":187.41,"top":182.92,"width":33,"height":0,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-16.5000732901038,"x2":16.5000732901038,"y1":0,"y2":0},{"type":"line","originX":"center","originY":"center","left":202.41,"top":166.42,"width":3,"height":33,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":1.500006662736709,"x2":-1.500006662736709,"y1":16.500339690763965,"y2":-16.500339690763965},{"type":"line","originX":"center","originY":"center","left":184.41,"top":149.92,"width":35,"height":0,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":17.500077731928272,"x2":-17.500077731928272,"y1":0,"y2":0},{"type":"line","originX":"center","originY":"center","left":169.91,"top":182.42,"width":6,"height":65,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-3.000013325473418,"x2":3.000013325473418,"y1":-32.5006690878684,"y2":32.5006690878684},{"type":"line","originX":"center","originY":"center","left":189.91,"top":215.42,"width":34,"height":1,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":-17.000075511016036,"x2":17.000075511016036,"y1":-0.5000102936595141,"y2":0.5000102936595141},{"type":"line","originX":"center","originY":"center","left":235.91,"top":134.92,"width":10,"height":156,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":5.000022209122363,"x2":-5.000022209122363,"y1":78.00160581088417,"y2":-78.00160581088417},{"type":"line","originX":"center","originY":"center","left":260.91,"top":135.92,"width":12,"height":148,"fill":"black","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","x1":6.00002665094685,"x2":-6.00002665094685,"y1":74.00152346160806,"y2":-74.00152346160806},{"type":"circle","originX":"left","originY":"center","left":284.91,"top":154.92,"width":57.32,"height":57.32,"fill":"transparent","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":47.12,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","radius":28.65783551172888,"startAngle":0,"endAngle":6.283185307179586},{"type":"rect","originX":"left","originY":"top","left":374.91,"top":46.91,"width":14,"height":123,"fill":"#b0bc00","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","rx":0,"ry":0},{"type":"circle","originX":"left","originY":"center","left":373.91,"top":182.92,"width":21.93,"height":21.93,"fill":"#b0bc00","stroke":"black","strokeWidth":2,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":46.85,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","radius":10.96599903840613,"startAngle":0,"endAngle":6.283185307179586}])
  const [ref, setRef] = useState({undo: null})
  const [tool, setTool] = useState(Tools.Pencil)
  const [color, setColor] = useState('#fff')
  const [colorPicker, setColorPicker] = useState(false)
  const [expand, setExpand] = useState(false)
  const [width, setWidth] = useState(3)
  const [widthMenu, setWidthMenu] = useState(false)
  const [accountMenu, setAccountMenu] = useState(false)
  const [record, setRecord] = useState(false)

  const defaults = {
    objects: values,
    background: ''
  }

  console.log(ref);
  return (
    <div className="App">
      <header className="App-header">
        <div className="sketchy">
          <SketchField width={isMobile ? '360px' : '1024px'}
                             height={isMobile ? '500px' : '768px'}
                             tool={tool}
                             lineColor={color}
                             lineWidth={width}
                             defaultValue = {defaults}
                             ref={setRef}
                             onChange={()=>console.log(ref)}/>
        </div>


      </header>
      <div className="Nav">
        {accountMenu ?
          <div className="accountmenu">
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
              onClick={() => setRecord(!record)}
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
              onClick={()=>localStorage.setItem("canvas", JSON.stringify(ref.toJSON()))}
              data-tip data-for='save'
            />
            <ReactTooltip id='save' type='info'>
              <span>Save</span>
            </ReactTooltip>
            <Icon path={mdiSettingsOutline}
              size={2}
              color="#92a3a8"
              onClick={()=>alert("Profile!")}
              data-tip data-for='profile'
            />
            <ReactTooltip id='profile' type='info'>
              <span>Profile</span>
            </ReactTooltip>
          </div>
          :
          null
        }
        {colorPicker?
          <div>
          <SliderPicker
          width='5px'
          color={color}
          onChangeComplete={(color)=>setColor(color.hex)}/>
          <br />
          </div>
          :
          null
        }
        {widthMenu ?
          <input className="thick" style={{backgroundColor: color}} name="width" type="range" min="0" max="50" value={width} onChange={(e)=>setWidth(e.target.value)} />
          :
          null}
        <div className="tools">
        <Icon path={mdiNewBox}
          className="bottomlefticon"
          size={1.5}
          color="#92a3a8"
          onClick={ref.clear}
          data-tip data-for='new'
        />
        <ReactTooltip id='new' type='info'>
          <span>New</span>
        </ReactTooltip>

        <Icon path={mdiUndo}
          className="bottomlefticon"
          size={1.5}
          color="#92a3a8"
          onClick={ref.undo}
          data-tip data-for='undo'
        />
        <ReactTooltip id='undo' type='info'>
          <span>Undo</span>
        </ReactTooltip>
        <Icon path={mdiRedo}
          className="bottomlefticon"
          size={1.5}
          color="#92a3a8"
          onClick={ref.redo}
          data-tip data-for='redo'
        />
        <ReactTooltip id='redo' type='info'>
          <span>Redo</span>
        </ReactTooltip>
        <Icon path={mdiPalette}
          className="bottomlefticon"
          size={1.5}
          color={color}
          onClick={()=>setColorPicker(!colorPicker)}
          data-tip data-for='color'
        />
        <ReactTooltip id='color' type='info'>
          <span>Color</span>
        </ReactTooltip>
        {expand ?
          <div>
          <Icon path={mdiPencil}
            className="bottomlefticon"
            size={1.5}
            color="#92a3a8"
            onClick={()=>setTool(Tools.Pencil)}
            data-tip data-for='draw'
          />
          <ReactTooltip id='draw' type='info'>
            <span>Draw</span>
          </ReactTooltip>
          <Icon path={mdiRectangleOutline}
            className="bottomlefticon"
            size={1.5}
            color="#92a3a8"
            onClick={()=>setTool(Tools.Rectangle)}
            data-tip data-for='rectangle'
          />
          <ReactTooltip id='rectangle' type='info'>
            <span>Rectangle</span>
          </ReactTooltip>
          <Icon path={mdiCircleOutline}
            className="bottomlefticon"
            size={1.5}
            color="#92a3a8"
            onClick={()=>setTool(Tools.Circle)}
            data-tip data-for='circle'
          />
          <ReactTooltip id='circle' type='info'>
            <span>Circle</span>
          </ReactTooltip>
          <Icon path={mdiRayStartArrow}
            className="bottomlefticon"
            size={1.5}
            color="#92a3a8"
            onClick={()=>setTool(Tools.Line)}
            data-tip data-for='line'
          />
          <ReactTooltip id='line' type='info'>
            <span>Line</span>
          </ReactTooltip>
          <Icon path={mdiArrowSplitHorizontal}
            className="bottomlefticon"
            size={1.5}
            color="#92a3a8"
            onClick={()=>setWidthMenu(!widthMenu)}
            data-tip data-for='width'
          />
          <ReactTooltip id='width' type='info'>
            <span>Width</span>
          </ReactTooltip>
          <Icon path={mdiPan}
            className="bottomlefticon"
            size={1.5}
            color="#92a3a8"
            onClick={()=>setTool(Tools.Pan)}
            data-tip data-for='move'
          />
          <ReactTooltip id='move' type='info'>
            <span>Move</span>
          </ReactTooltip>
          </div>
          :
          null
        }
        <Icon path={mdiChevronDoubleRight}
          className="bottomlefticon"
          size={2}
          color="#92a3a8"
          rotate={expand? 180 : 0}
          onClick={()=>setExpand(!expand)}
          data-tip data-for='open'
        />
        <ReactTooltip id='open' type='info'>
          <span>Open</span>
        </ReactTooltip>
        </div>
          {record ?
            <div>
            <Icon path={mdiRecord}
              className="bottomrighticon"
              size={2}
              color="#FF0000"
              onClick={()=>setAccountMenu(!accountMenu)}
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
            onClick={()=>setAccountMenu(!accountMenu)}
            data-tip data-for='account'
          />
          <ReactTooltip id='account' type='info'>
            <span>Account</span>
          </ReactTooltip>
      </div>
    </div>
  );
}

export default Sketch;
