import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';
import { HeaderOnly } from '~/layouts';
import configs from '~/configs';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.live, component: Live },
    { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
    { path: configs.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
