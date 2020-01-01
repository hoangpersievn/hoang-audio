import React from 'react';

import * as Pages from './components/Pages/index';
import * as Containers from './containers/index';

export const publicRoutes = [
    { path : "/", exact : true, main : () => <Containers.HomePageContainer/> },
    { path : "/artists", exact : false, main : () => <Pages.ArtistPage/>},
    { path : "/albums", exact : false, main : () => <Pages.AlbumPage/> },
    { path : "/charts", exact : false, main : () => <Pages.ChartPage/> },
    { path: '/song/:name/:id', exact: false, main: (match) => <Containers.SongPageContainer match={match.match.params}/> },
    { path: '/login', exact: false, main: () => <Containers.AuthenPageContainer/> }
];

export const privateRoutes = [
    { path: '/mymusic', exact: false, main: () => <Containers.UserContainer/> }
];
