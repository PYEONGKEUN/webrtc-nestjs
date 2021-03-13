import autoprefixer from 'autoprefixer';
import flexbugsFixes from 'postcss-flexbugs-fixes';

/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 * @see https://github.com/postcss/postcss
 */
import {isProd} from '../utils/env';
import {arrayFilterEmpty} from '../utils/helpers';

module.exports = () => {
    const plugins = arrayFilterEmpty([autoprefixer({grid: true}), flexbugsFixes(), isProd ? 'cssnano' : null]);
    return {
        plugins,
    };
};
