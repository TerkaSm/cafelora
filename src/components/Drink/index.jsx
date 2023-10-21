import './style.css'
import { Layer } from '../Layer'

export const Drink = ({ id, name, ordered, image, layers })=>{
    const textTlacitka = ordered ? "Zrušit" : "Objednat"
    const tridaTlacitka = ordered ? "order-btn order-btn--ordered" : "order-btn"
    return(
        <div id={id} className="drink">
            <div className="drink__product">
            <div className="drink__cup">
                <img src={`http://localhost:4000${image}`}/>
            </div>
            <div className="drink__info">
                <h3>{name}</h3>
                {layers.map((layer) => {
                    const { color, label } = layer
                    return (
                    <Layer key={color} color={color} label={label} />)
                })}
                {/* <Layer color={layers.color} label={layers.layer} /> */}
            </div>
            </div>
            <div className="drink__controls">
            <form className='drink-form'>
            <button className={tridaTlacitka}>
                {textTlacitka}
            </button>
            <input type="hidden" value={id} />
            </form>
            </div>
        </div>
)}