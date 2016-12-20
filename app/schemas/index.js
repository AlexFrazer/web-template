import Relay from 'react-relay';
import RelayLocalSchema from 'relay-local-schema';

import IssueSchema from 'app/schemas/issues';

Relay.injectNetworkLayer(
  new RelayLocalSchema.NetworkLayer({
    IssueSchema,
  }),
);
