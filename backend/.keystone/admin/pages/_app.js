import { getApp } from '@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App';

import * as view0 from "../../../node_modules/@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view";
import * as view1 from "../../../node_modules/@keystone-6/core/fields/types/text/views";
import * as view2 from "../../../node_modules/@keystone-6/core/fields/types/password/views";
import * as view3 from "../../../node_modules/@keystone-6/core/fields/types/relationship/views";
import * as view4 from "../../../node_modules/@keystone-6/core/fields/types/select/views";
import * as view5 from "../../../node_modules/@keystone-6/fields-document/views";
import * as view6 from "../../../node_modules/@keystone-6/core/fields/types/timestamp/views";

var adminConfig = {};

export default getApp({
  lazyMetadataQuery: {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"keystone","loc":{"start":22,"end":30}},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminMeta","loc":{"start":39,"end":48}},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lists","loc":{"start":59,"end":64}},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key","loc":{"start":77,"end":80}},"arguments":[],"directives":[],"loc":{"start":77,"end":80}},{"kind":"Field","name":{"kind":"Name","value":"isHidden","loc":{"start":91,"end":99}},"arguments":[],"directives":[],"loc":{"start":91,"end":99}},{"kind":"Field","name":{"kind":"Name","value":"fields","loc":{"start":110,"end":116}},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path","loc":{"start":131,"end":135}},"arguments":[],"directives":[],"loc":{"start":131,"end":135}},{"kind":"Field","name":{"kind":"Name","value":"createView","loc":{"start":148,"end":158}},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fieldMode","loc":{"start":175,"end":184}},"arguments":[],"directives":[],"loc":{"start":175,"end":184}}],"loc":{"start":159,"end":198}},"loc":{"start":148,"end":198}}],"loc":{"start":117,"end":210}},"loc":{"start":110,"end":210}}],"loc":{"start":65,"end":220}},"loc":{"start":59,"end":220}}],"loc":{"start":49,"end":228}},"loc":{"start":39,"end":228}}],"loc":{"start":31,"end":234}},"loc":{"start":22,"end":234}},{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]},
  fieldViews: [view0,view1,view2,view3,view4,view5,view6],
  adminMetaHash: "3qruwm",
  adminConfig: adminConfig,
  apiPath: "/api/graphql",
});
