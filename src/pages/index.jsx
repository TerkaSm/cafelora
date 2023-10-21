import { render } from '@czechitas/render';
import { Banner } from '../components/Banner';
import  { Contact } from '../components/Contact';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const navButtonElement = document.querySelector('.nav-btn')
const rolloutNavElement = document.querySelector('.rollout-nav')
navButtonElement.addEventListener('click', () => {
  rolloutNavElement.classList.toggle('nav-closed')
})

rolloutNavElement.addEventListener('click', () => {
  rolloutNavElement.classList.add('nav-closed')
})