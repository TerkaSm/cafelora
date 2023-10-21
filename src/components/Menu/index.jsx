import './style.css';
import { Drink } from '../Drink';

export const Menu = () => {
    return (
        <section className="menu" id='menu'>
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">

          <Drink
            id={0}
            name="Romano"
            ordered={false}
            image="/cups/espresso.png"
            layers={[
              {
                color: '#fbdf5b',
                label: 'espresso',
              },
              {
                color: '#613916',
                label: 'espresso',
              },
            ]}
          />

            {/* <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/doppio.png" />
                </div>
                <div className="drink__info">
                  <h3>Doppio</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <div className="drink__controls">
                <button className="order-btn">
                  Objednat
                </button>
              </div>
            </div>

            <div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src="/cups/lungo.png" />
                </div>
                <div className="drink__info">
                  <h3>Lungo</h3>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#b0dee1' }} />
                    <div className="layer__label">voda</div>
                  </div>
                  <div className="layer">
                    <div className="layer__color" style={{ backgroundColor: '#613916' }} />
                    <div className="layer__label">espresso</div>
                  </div>
                </div>
              </div>
              <div className="drink__controls">
                <button className="order-btn">
                  Objednat
                </button>
              </div>
            </div>*/}
          </div>

          <div className="order-detail">
            <a href="/objednavka">Detail objednávky</a>
          </div>
        </div>
      </section>
    )
} 