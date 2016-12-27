import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressGraphQL from 'express-graphql';
import expressSession from 'express-session';

const app = express();

app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({
  secret: 'keyboard cat',
}));
