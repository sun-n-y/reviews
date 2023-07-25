import get from './utils/getElement.js';

const people = [
  {
    image:
      'https://images.pexels.com/photos/16129700/pexels-photo-16129700/free-photo-of-man-in-glasses-working-on-pc-at-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'henry wells',
    role: 'student',
    description:
      'Im baby echo park unicorn umami lo-fi, tumeric portland marfa drinking vinegar grailed single-origin coffee aesthetic twee enamel pin tofu fanny pack. Deep v bitters keffiyeh ascot selvage wolf la croix.',
  },
  {
    image:
      'https://images.pexels.com/photos/3766189/pexels-photo-3766189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Susan Smith',
    role: 'student',
    description:
      'Banjo praxis cornhole migas bruh direct trade swag, hoodie skateboard. Whatever schlitz trust fund adaptogen, franzen sriracha swag master cleanse fashion axe forage scenester messenger bag organic subway tile. Ugh palo santo bushwick occupy quinoa kinfolk vinyl try-hard tattooed.',
  },
  {
    image:
      'https://images.pexels.com/photos/8192008/pexels-photo-8192008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Aton Jest',
    role: 'student',
    description:
      'Austin ethical roof party you probably havent heard of them slow-carb, gorpcore marfa tonx gentrify banh mi vape. Heirloom post-ironic messenger bag PBR&B thundercats. Locavore mukbang narwhal celiac.',
  },
  {
    image:
      'https://images.pexels.com/photos/8123856/pexels-photo-8123856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'joe dean',
    role: 'student',
    description:
      'Cliche praxis shoreditch taxidermy. Iceland tumblr keffiyeh freegan readymade lomo. Copper mug letterpress narwhal squid, air plant fanny pack cornhole green juice brunch.',
  },
];

const img = get('.hero-img');
const name = get('.name');
const role = get('.role');
const desc = get('.description');
const btns = document.querySelectorAll('.btn');

let personValue = 0;

function showperson(value) {
  img.src = people[value].image;
  name.textContent = people[value].name;
  role.textContent = people[value].role;
  desc.textContent = people[value].description;
}

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const click = e.target.classList[0];
    if (click === 'right') {
      personValue++;
    }
    if (click === 'left') {
      personValue--;
    }
    if (personValue > people.length - 1) {
      personValue = 0;
    }
    if (personValue < 0) {
      personValue = people.length - 1;
    }
    if (click === 'suprise') {
      personValue = Math.floor(Math.random() * people.length);
    }
    showperson(personValue);
  });
});
