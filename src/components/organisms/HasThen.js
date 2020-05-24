;import React from 'react';
import Helper from '../../services/Helper';
import NotFound from './NotFound';

const HasThen = ({ data, component, children, notfound }) => {
  if (!Helper.notEmpty(data)) {
    return notfound || <NotFound />;
  }
  if (component === undefined) {
    return children;
  }
  return typeof component === 'function' ? component() : component;
};

export default HasThen;
