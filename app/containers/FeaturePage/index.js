/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import './index.css';

export default class FeaturePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name='description'
            content='Feature page of React.js Boilerplate application'
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <div className='flex'>
          <div>flex布局</div>
          <div>flex第二次布局</div>
        </div>
      </div>
    );
  }
}
