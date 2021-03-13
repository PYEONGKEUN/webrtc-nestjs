export const BOARD_TYPE = {
    BOARD: {type: 1, name: '게시판'},
    FAQ: {type: 2, name: 'FAQ'},
    getNameByType: (type) => {
        for (const key in BOARD_TYPE) {
            if (BOARD_TYPE[key].type != undefined && BOARD_TYPE[key].type == type) {
                return BOARD_TYPE[key].name;
            } else {
                console.log('NO MATCHES');
                return '';
            }
        }
    },
};
