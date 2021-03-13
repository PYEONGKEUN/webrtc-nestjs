import * as React from 'react';
import Helmet from 'react-helmet';
import {hot} from 'react-hot-loader';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {ROUTER_PATH} from './constrants/ROUTER_PATH';
import {LinksPage} from './pages/Links/LinksPage';
import {MainPage} from './pages/Main/MainPage';
import {NotFoundContainer} from './pages/NotFoundPage/NotFoundPage';

const RootRouter = () => {
    return (
        <>
            {/* 헤더에 추가할 내용 */}
            <Helmet>
                <title>VRSPORTS </title>
                <meta name="viewport" content="width=1920, initial-scale=1.0" />
            </Helmet>
            {/* HASH ROUTER 사용 -> 서버에서 설정 따로 필요 없음, http://localhost:8080/#/~ 으로 url 형성 */}
            <HashRouter>
                <Switch>
                    <Route exact path={ROUTER_PATH.LINKS} component={LinksPage} />
                    <Route path={ROUTER_PATH.MAIN} component={MainPage} />
                    {/* OTHER는 가장 마지막 줄로*/}
                    <Route path={ROUTER_PATH.OTHERS} component={NotFoundContainer} />
                </Switch>
            </HashRouter>
        </>
    );
};

export default hot(module)(RootRouter);
