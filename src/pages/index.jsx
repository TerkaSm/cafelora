import { render } from '@czechitas/render';
import { Banner } from '../components/Banner';
import  { Contact } from '../components/Contact';
import { Gallery } from '../components/Gallery';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import '../global.css';
import './index.css';

const answer = await fetch('http://localhost:4000/api/drinks', {
  method: 'GET',
});

const bodyOfResult = await answer.json()
console.log(bodyOfResult)
console.log(bodyOfResult.result)

const drinks = bodyOfResult.result

console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
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

document.querySelectorAll('.drink-form').forEach((item) => {
  item.addEventListener("submit", async (e) => {
    console.log('Ahoj')
    e.preventDefault()
    const formElement = e.target
    const id = formElement.querySelector("input").value

    await fetch (`http://localhost:4000/api/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
      [{ op: 'replace', path: '/ordered', value: true }]
      )
    })

    window.location.reload()
  })
})