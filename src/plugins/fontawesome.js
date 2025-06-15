import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faPaw,
    faBrush,
    faCalendarDays,
    faDatabase,
    faNetworkWired,
    faCloud
} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faDiscord,
    faJava,
    faSquareJs,
    faNode,
    faVuejs,
    faGit
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faPaw, faBrush, faCalendarDays, faDatabase, faNetworkWired, faCloud,

    faGithub, faDiscord, faJava, faSquareJs, faNode, faVuejs, faGit
);

export { FontAwesomeIcon };