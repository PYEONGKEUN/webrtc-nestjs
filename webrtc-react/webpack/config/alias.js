/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
    '@src': join(rootDir, '/src'),
    '@assets': join(rootDir, '/src/assets'),
    '@components': join(rootDir, '/src/components'),
    '@pages': join(rootDir, '/src/pages'),
    '@constrants': join(rootDir, '/src/constrants'),
};
