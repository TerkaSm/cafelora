import './style.css';
import { Drink } from '../Drink';

export const Menu = ({drinks}) => {
    return (
        <section className="menu" id='menu'>
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
           {drinks.map((drink) => {
             const { id, name, ordered, image, layers } = drink

             return <Drink key={drink.id} id={drink.id} img={drink.img} name={drink.name} ordered={drink.ordered} image={drink.image} layers={drink.layers} />

           })}
          </div>

          <div className="order-detail">
            <a href="/objednavka">Detail objednávky</a>
          </div>
        </div>
      </section>
    )
} 