import makeFAIcon from "utils/makeFAIcon";

import { faLock, faEdit } from "@fortawesome/free-solid-svg-icons";

export const LockIcon = makeFAIcon(faLock);
export const UpdateIcon = makeFAIcon(faEdit);

/* 
Strange error to process. Tried to remove unnecessary icons. 
Found if you I have one export from this page, I get an error that breaks the website.
 ERROR #98123  WEBPACK
I have tried to trace it, but am unfamiliar with webpack config. 
Help boards give a wide variety of solutions, but would require more research into what we specifically need. 
For now I am leaving LockIcon, even though it is currently uncessesary. 
*/
