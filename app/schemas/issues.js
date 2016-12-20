import { request } from 'app/utils/api';
import { globalIdField } from 'graphql-relay';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

const IssueType = new GraphQLObjectType({
  name: 'Issue',
  description: 'A single issue',
  fields: () => ({
    id: globalIdField('Issue'),
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Issues',
  description: 'Github issues for a repository',
  fields: () => ({
    allIssues: {
      type: new GraphQLList(IssueType),
      resolve: async () => await request('/repos/rails/rails/issues'),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
