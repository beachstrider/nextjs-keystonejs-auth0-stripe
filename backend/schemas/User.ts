import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
} from '@keystone-6/core/fields';


export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    company: text({ validation: { isRequired: true } }),
    address: text({ defaultValue: "" }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    vendor: relationship({ ref: 'Vendor.user', many: true, ui: { displayMode: 'cards', cardFields: ['organizationName', 'vendorEmail', 'status'], } }),
    plan: text({ defaultValue: ""}),
    customerId: text({ defaultValue: "" }),
    subscriptionId: text({ defaultValue: "" }),
    subscriptionStatus: text({ defaultValue: 'no' })
  },
  ui: {
    listView: {
      initialColumns: ['name', 'email', 'plan', 'subscriptionStatus'],
    },
  },
  hooks: {
    afterOperation: ({ operation, item }) => {
      if (operation === 'create') {
        console.log(`New user created. Name: ${item.name}, Email: ${item.email}`)
      }
    }
  },
})
