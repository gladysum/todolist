import React from 'react';
import {connect} from 'react-redux';
import Task from './Task';

export class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ol>
        {this.props.tasks.length ? this.props.tasks.map((task, index)=>(
          <Task
            task={task}
            key={task.id}
          />
        )) : "No tasks added."}
      </ol>
    )
  }
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(List);
