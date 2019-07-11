import React, {useState, useEffect} from 'react';
import {Tools} from 'react-sketch';
import Icon from '@mdi/react'
import {mdiUndo, mdiRedo, mdiArrowSplitHorizontal, mdiNewBox, mdiPencil, mdiChevronDoubleRight, mdiRayStartArrow, mdiRectangleOutline, mdiCircleOutline, mdiPan, mdiPalette} from '@mdi/js'
import ReactTooltip from 'react-tooltip'
import { isMobile } from "react-device-detect"
import './App.css';

function SketchTools(props) {
  return (
    <div className="tools">
    <Icon path={mdiNewBox}
      className="bottomlefticon"
      size={1.5}
      color="#92a3a8"
      onClick={props.reff.clear}
      data-tip data-for='new'
    />
    <ReactTooltip id='new' type='info'>
      <span>New</span>
    </ReactTooltip>

    <Icon path={mdiUndo}
      className="bottomlefticon"
      size={1.5}
      color="#92a3a8"
      onClick={props.reff.undo}
      data-tip data-for='undo'
    />
    <ReactTooltip id='undo' type='info'>
      <span>Undo</span>
    </ReactTooltip>
    <Icon path={mdiRedo}
      className="bottomlefticon"
      size={1.5}
      color="#92a3a8"
      onClick={props.reff.redo}
      data-tip data-for='redo'
    />
    <ReactTooltip id='redo' type='info'>
      <span>Redo</span>
    </ReactTooltip>
    <Icon path={mdiPalette}
      className="bottomlefticon"
      size={1.5}
      color={props.color}
      onClick={()=>props.setColorPicker(!props.colorPicker)}
      data-tip data-for='color'
    />
    <ReactTooltip id='color' type='info'>
      <span>Color</span>
    </ReactTooltip>
    {props.expand ?
      <div>
      <Icon path={mdiPencil}
        className="bottomlefticon"
        size={1.5}
        color="#92a3a8"
        onClick={()=>props.setTool(Tools.Pencil)}
        data-tip data-for='draw'
      />
      <ReactTooltip id='draw' type='info'>
        <span>Draw</span>
      </ReactTooltip>
      <Icon path={mdiRectangleOutline}
        className="bottomlefticon"
        size={1.5}
        color="#92a3a8"
        onClick={()=>props.setTool(Tools.Rectangle)}
        data-tip data-for='rectangle'
      />
      <ReactTooltip id='rectangle' type='info'>
        <span>Rectangle</span>
      </ReactTooltip>
      <Icon path={mdiCircleOutline}
        className="bottomlefticon"
        size={1.5}
        color="#92a3a8"
        onClick={()=>props.setTool(Tools.Circle)}
        data-tip data-for='circle'
      />
      <ReactTooltip id='circle' type='info'>
        <span>Circle</span>
      </ReactTooltip>
      <Icon path={mdiRayStartArrow}
        className="bottomlefticon"
        size={1.5}
        color="#92a3a8"
        onClick={()=>props.setTool(Tools.Line)}
        data-tip data-for='line'
      />
      <ReactTooltip id='line' type='info'>
        <span>Line</span>
      </ReactTooltip>
      <Icon path={mdiArrowSplitHorizontal}
        className="bottomlefticon"
        size={1.5}
        color="#92a3a8"
        onClick={()=>props.setWidthMenu(!props.widthMenu)}
        data-tip data-for='width'
      />
      <ReactTooltip id='width' type='info'>
        <span>Width</span>
      </ReactTooltip>
      <Icon path={mdiPan}
        className="bottomlefticon"
        size={1.5}
        color="#92a3a8"
        onClick={()=>props.setTool(Tools.Pan)}
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
      rotate={props.expand? 180 : 0}
      onClick={()=>props.setExpand(!props.expand)}
      data-tip data-for='open'
    />
    <ReactTooltip id='open' type='info'>
      <span>Open</span>
    </ReactTooltip>
    </div>
  )
}
export default SketchTools;
