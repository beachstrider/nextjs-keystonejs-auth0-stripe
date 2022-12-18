import { list } from "@keystone-6/core";
import { relationship, select, text } from "@keystone-6/core/fields";

export const Vendor = list({
  //Todo access control
  access: {
    operation: {
      // query: 
    }
  },
  fields: {
    organizationName: text({ validation: { isRequired: true } }),
    vendorEmail: text({ validation: { isRequired: true } }),
    status: select({
      options: [
        { label: "Submitted", value: "SUBMITTED" },
        { label: "Pending", value: "PENDING" },
        { label: "Approved", value: "APPROVED" },
        { label: "Rejected", value: "REJECTED" },
      ],
      defaultValue: "SUBMITTED",
      ui: {
        displayMode: "segmented-control",
      }
    }),
    user: relationship({ ref: 'User.vendor', many: false }),

  },
      ui: {
      listView: {
        initialColumns: ['organizationName', 'vendorEmail', 'user'],
      },
    },

})
