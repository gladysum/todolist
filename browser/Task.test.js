import Task from './Task';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux'
import store from './store';

describe('Task Component', () => {

  it('renders the expected task', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.task-field');
    expect(p.text()).toBe('Buy Milk');
  });

  it('Edit button becomes Save button when clicked', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    expect(p.text()).toBe('Save');
  });

  it('Save button becomes Edit button when clicked', () => {
    const todo = { task: 'Buy Milk', index: 0 };
    const wrapper = mount(
      <Provider store={store}>
        <Task
          task={todo.task}
          index={todo.index}
        />
      </Provider>
    );
    const p = wrapper.find('.edit-button');
    p.simulate('click');
    p.simulate('click');
    expect(p.text()).toBe('Edit');
  });

  // it('Clicking Edit button calls handleEdit function', () => {
  //   const todo = { task: 'Buy Milk', index: 0 };
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <Task
  //         task={todo.task}
  //         index={todo.index}
  //       />
  //     </Provider>
  //   );
  //   const p = wrapper.find('.edit-button');
  //   p.simulate('click');
  // });

});