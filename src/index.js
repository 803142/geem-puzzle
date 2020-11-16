import './style.scss';
import './assets/fonts/neucher.scss';

import App from './app';

import { simpleTag, qs } from './helper';

window.onload = async () => {
  let appTag = qs('.gem-puzzle');
  const script = qs('script');

  if (!appTag) {
    appTag = simpleTag({
      tagName: 'div',
      classTag: 'gem-puzzle',
    });
    document.body.insertBefore(appTag, script);
  }

  const app = new App(appTag);
  app.init();
  app.render();
  app.start();
};
