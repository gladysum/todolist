import reducer from './reducer';
import {ADD, DROP, REPLACE, LOAD_TASKS, add, drop, replace, load_tasks} from './reducer';

describe('reducer', () => {

  const task = {
    id: 3,
    content: 'Buy groceries'
  };

  const task0 = {
    id: 0,
    content: 'Refactor broken tests'
  };

  const task1 = {
    id: 1,
    content: 'Write backend tests'
  };

  const task2 = {
    id: 2,
    content: 'Create a user model'
  };

  const arrayOfTasks = [task0, task1, task2];

  it('has a default state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual({
      tasks:[]
    });
  });

  it('can handle ADD', () => {
    expect(reducer(undefined, {type: ADD, payload: task})).toEqual({
      tasks: [task]
    })
  });

  it('can handle DROP', () => {
    expect(reducer({tasks: arrayOfTasks}, {type: DROP, payload: 1})).toEqual({
      tasks: [task0, task2]
    })
  });

  it('can handle REPLACE', () => {
    expect(reducer({tasks: arrayOfTasks}, {type: REPLACE, payload: {id: 0, content: 'Refactor frontend tests'}})).toEqual({
      tasks: [{id: 0, content: 'Refactor frontend tests'}, task1, task2]
    })
  });

  it('can handle LOAD_TASKS', () => {
    expect(reducer(undefined, {type: LOAD_TASKS, payload: arrayOfTasks})).toEqual({
      tasks: arrayOfTasks
    })
  });

});

describe('action creators', () => {
  
  const task = {
    id: 3,
    content: 'Dust shelves'
  };

  const task0 = {
    id: 0,
    content: 'Refactor broken tests'
  };

  const task1 = {
    id: 1,
    content: 'Write backend tests'
  };

  const task2 = {
    id: 2,
    content: 'Create a user model'
  };

  const arrayOfTasks = [task0, task1, task2];

  it('can handle add', () => {
    expect(add(task)).toEqual({
      type: ADD,
      payload: task
    })
  });

  it('can handle drop', () => {
    expect(drop(task.id)).toEqual({
      type: DROP,
      payload: task.id
    })
  });

  it('can handle replace', () => {
    expect(replace(task.id, task.content)).toEqual({
      type: REPLACE,
      payload: {
        id: task.id,
        content: task.content
      }
    })
  });

  it('can handle load_tasks', () => {
    expect(load_tasks(arrayOfTasks)).toEqual({
      type: LOAD_TASKS,
      payload: arrayOfTasks
    })
  });

});

