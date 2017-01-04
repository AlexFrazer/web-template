import React from 'react';
import renderer from 'react-test-renderer';
import List from '../patterns/molecules/List';

test('Creates a list that requests data', () => {
  let isFetching = true;
  let data = [{ id: 1 }];
  const retrieve = () => {
    return new Promise(resolve => {

    });
    isFetching = true;
    setTimeout(() => {
      isFetching = false;
      return data;
    }, 200);
  }

  const component = renderer.create(
    <List
      data={data}
      retrieve={retrieve}
      isFetching={isFetching}
    >
      {entry => <div key={entry.id} />}
    </List>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
