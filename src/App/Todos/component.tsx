import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';

const List = React.lazy(() => import('./List'));

export interface Props extends RouteComponentProps<{}> {}

export default function Todos({ match: { url } }: Props) {
  return (
    <Switch>
      <Route exact path={url} component={List} />
    </Switch>
  );
}
