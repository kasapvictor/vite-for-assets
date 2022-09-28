import 'normalize.css';

import '@root/scss/styles.scss';

const init = () => {
  const rootEl = document.getElementById('app');

  if (rootEl) {
    rootEl.innerHTML = '<h1>root el - id="app"</h1>';
  }
};

init();
