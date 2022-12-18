import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const Company = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    summary: text({ validation: { isRequired: true } }),
    content: document({
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
    year: timestamp({ validation: { isRequired: true }})    
  },
  ui: {
    listView: {
      initialColumns: ['name', 'summary', 'year'],
    },
  },
})
