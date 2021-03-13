/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import RobotstxtPlugin from 'robotstxt-webpack-plugin';

const config = {
    policy: [
        {
            //네이버와 동일하게 설정 나중에 바꾸려면 바꾸기
            userAgent: '*',
            allow: '/$',
            disallow: '/',
        },
    ],
};

export const robotstxtPlugin = new RobotstxtPlugin(config);
