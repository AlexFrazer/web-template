import { Store, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from 'connected-react-router';
import createReducer, { AppState } from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

/**
 * Creates a new instance of the app's central store.
 * @param initialState
 */
export default function configure(initialState?: AppState): Store<AppState> {
  const store = createStore(
    createReducer(history),
    initialState!,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        createLogger({
          collapsed: true,
          predicate: (_, { type }) =>
            type !== CALL_HISTORY_METHOD && type !== LOCATION_CHANGE,
        }),
      ),
    ),
  );

  sagaMiddleware.run(saga);

  return store;
}
