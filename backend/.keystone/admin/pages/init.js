import { getInitPage } from '@keystone-6/auth/pages/InitPage';

const fieldPaths = ["name","company","email","password"];

export default getInitPage({"listKey":"User","fieldPaths":["name","company","email","password"],"enableWelcome":true});
