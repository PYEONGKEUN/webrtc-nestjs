import './LinksPage.scss';

import * as React from 'react';
import {Link} from 'react-router-dom';

import {ROUTER_PATH} from '@src/constrants/ROUTER_PATH';

export const LinksPage = (): JSX.Element => {
    return (
        <>
            <div className="linksPageWrapper">
                <Link to={ROUTER_PATH.MAIN}>
                    <span className="link">메인 페이지</span>
                </Link>
                <br />
            </div>
        </>
    );
};
