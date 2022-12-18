import 'dotenv/config';
import { config } from '@keystone-6/core';
import { withAuth, session } from './auth';

//Schema imports
import { User } from './schemas/User';
import { Vendor } from './schemas/Vendor';
import { Company } from './schemas/Company';

const databaseURL = process.env.DATABASE_URL || 'file:./keystone.db';

export default withAuth(
  config({
    //trying to connect the front end to the backend
    server: {
      cors: {
        origin: process.env.FRONTEND_URL, //originally had sqaure brackets around the url to force to string
        credentials: true,
      },
    },
    db: {
      provider: 'sqlite',
      url: databaseURL,
      //future todo: add seed data
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: {
      User,
      Vendor,
      Company
    },
    session,
  })
);


