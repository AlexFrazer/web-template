import { connect } from 'react-redux';
import { compose } from 'recompose';
import { AppState } from 'src/reducer';
import { selectTodos } from './selectors';
import { clearTodos, deleteTodo } from '../actions';
import component, { Props } from './component';

const mapStateToProps = (state: AppState) => ({
  todos: selectTodos(state),
});

const mapDispatchToProps = {
  clearTodos,
  deleteTodo,
};

export default compose<Props, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(component);
