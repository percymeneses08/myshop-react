import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import Products from '../../components/Products/products'

describe('ProductHeader Component', () => {

  it('has an h2 tag', () => {

    const component = ReactTestUtils.renderIntoDocument(<Products />);
    let button = ReactTestUtils.findRenderedDOMComponentWithTag(
      component, 'button'
    );

  });

  // it('is wrapped inside a title class', () => {
  // })
})