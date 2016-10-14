

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Root from './root';
import "../style/main.less";

if(module.hot) {
    module.hot.accept();
}

/*
  Needed for onTouchTap
  Can go away when react 1.0 release
  Check this repo:
  https://github.com/zilverline/react-tap-event-plugin
*/
// injectTapEventPlugin();

render(<Root />, document.getElementById('root'));
