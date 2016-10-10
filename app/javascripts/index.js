import request from 'axios';

const DOM = {
  app: document.getElementById('app'),
  needle: document.getElementById('needle'),
  label: document.getElementById('label'),
};

export default () => {
  request
    .get('http://api.openpseudonym.org/api/headings/average')
    .then(({ data: { value, abbreviation } }) => {
      DOM.needle.style.transform = `translate(-50%, -50%) rotate(-${value}deg)`;
      DOM.needle.style.opacity = 1;
      DOM.label.innerHTML = abbreviation;
      DOM.label.style.opacity = 1;
    });
};
