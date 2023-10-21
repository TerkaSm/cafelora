import './style.css'

export const Layer = ({ color, layer })=>{
    return(
        <div className="layer">
            <div className="layer__color" style={color}></div>
            <div className="layer__label">{layer}</div>
        </div>
)}