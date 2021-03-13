import './MainPage.scss';

import * as React from 'react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTER_PATH} from '@src/constrants/ROUTER_PATH';

interface IBoard {
    boardSn: number;
    title: string;
    writer: string;
    createdAt: string;
}

const MAX_BOARD_ROW_LENGTH = 5;

export const MainPage = (): JSX.Element => {
    // 하이퍼 링크 ReactRouter 처리
    const history = useHistory();

    const goToBoardMore = () => {
        history.push(ROUTER_PATH.LINKS);
    };

    const goToFaqMore = () => {
        history.push(ROUTER_PATH.LINKS);
    };

    //게시판 Data
    const [BoardData, setBoardData] = useState<Array<IBoard>>([]);
    // FAQ Data
    const [FAQData, setFAQData] = useState<Array<IBoard>>([]);

    useEffect(() => {
        //ComponentDidMount
        const fetch = async () => {
            setBoardData([
                {boardSn: 1, title: '[공지] VR 스포츠 통합런처 사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법사용방법', writer: '운영자', createdAt: '2020.07.22'},
                {boardSn: 2, title: '[공지] VR 스포츠 통합런처 업데이트', writer: '운영자', createdAt: '2020.07.29'},
                {boardSn: 3, title: '[이벤트] 콘텐츠 최고점수를 달성하라!!', writer: '운영자', createdAt: '2020.08.05'},
                {boardSn: 4, title: '콘텐츠 수업  후기', writer: '한빛 초등학교', createdAt: '2020.08.22'},
            ]);
            setFAQData([
                {boardSn: 1, title: '[공지] VR 스포츠 통합런처 사용방법', writer: '운영자', createdAt: '2020.07.22'},
                {boardSn: 2, title: '[공지] VR 스포츠 통합런처 업데이트', writer: '운영자', createdAt: '2020.07.29'},
                {boardSn: 3, title: '[이벤트] 콘텐츠 최고점수를 달성하라!!', writer: '운영자', createdAt: '2020.08.05'},
                {boardSn: 4, title: '콘텐츠 수업  후기', writer: '한빛 초등학교', createdAt: '2020.08.22'},
            ]);
        };
        fetch();
        return () => {
            //ComponentDidUnMount
        };
    }, []);

    const BoardRows = () => {
        const bdLen = BoardData.length;
        const result = [];
        let tmpRow;
        for (let i = 0; i < MAX_BOARD_ROW_LENGTH; i++) {
            if (i >= bdLen) {
                tmpRow = (
                    <tr key={i}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                );
            } else {
                tmpRow = (
                    <tr key={'key_' + BoardData[i].boardSn}>
                        <td>
                            <span className="Txt2-D">{BoardData[i].boardSn}</span>
                        </td>
                        <td>
                            <span className="Txt2-E">{BoardData[i].title}</span>
                        </td>
                        <td>
                            <span className="Txt2-D">{BoardData[i].writer}</span>
                        </td>
                        <td>
                            <span className="Txt2-D">{BoardData[i].createdAt}</span>
                        </td>
                    </tr>
                );
            }
            result.push(tmpRow);
        }
        return result;
    };

    const FaqRows = () => {
        const bdLen = FAQData.length;
        const result = [];
        let tmpRow;
        for (let i = 0; i < MAX_BOARD_ROW_LENGTH; i++) {
            if (i >= bdLen) {
                tmpRow = (
                    <tr key={i}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                );
            } else {
                tmpRow = (
                    <tr key={'key_' + BoardData[i].boardSn}>
                        <td>
                            <span className="Txt2-D">{FAQData[i].boardSn}</span>
                        </td>
                        <td>
                            <span className="Txt2-E">{FAQData[i].title}</span>
                        </td>
                        <td>
                            <span className="Txt2-D">{FAQData[i].writer}</span>
                        </td>
                        <td>
                            <span className="Txt2-D">{FAQData[i].createdAt}</span>
                        </td>
                    </tr>
                );
            }
            result.push(tmpRow);
        }
        return result;
    };

    return (
        <>
            <div className="MainPageWrapper divCenter">
                {/* 메인컨텐츠 & 우측 메뉴 */}
                <div className="mainWrapper">
                    {/* 메인 컨텐츠 게시판, FAQ */}
                    <div className="boardFaqWrapper divCenter">
                        {/* 게시판 */}
                        <div>
                            <div className="boardTopWrapper">
                                <div className="leftTitleWapper">
                                    <span className="Txt2-A">게시판</span>
                                </div>
                                <button className="BtnRightMore">
                                    <span className="Txt2-B">더보기</span>
                                </button>
                            </div>
                            <div>
                                <table className="boardTable">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="Txt2-C">번호</span>
                                            </th>
                                            <th>
                                                <span className="Txt2-C">제목</span>
                                            </th>
                                            <th>
                                                <span className="Txt2-C">이름</span>
                                            </th>
                                            <th>
                                                <span className="Txt2-C">작성일시</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{BoardRows()}</tbody>
                                </table>
                            </div>
                        </div>
                        {/* FAQ */}
                        <div>
                            <div className="boardTopWrapper">
                                <div className="leftTitleWapper">
                                    <span className="Txt2-A">FAQ</span>
                                </div>
                                <button className="BtnRightMore">
                                    <span className="Txt2-B">더보기</span>
                                </button>
                            </div>
                            <div>
                                <table className="boardTable">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="Txt2-C">번호</span>
                                            </th>
                                            <th>
                                                <span className="Txt2-C">제목</span>
                                            </th>
                                            <th>
                                                <span className="Txt2-C">이름</span>
                                            </th>
                                            <th>
                                                <span className="Txt2-C">작성일시</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{FaqRows()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
