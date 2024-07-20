import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Guideline() {
    return (
        <div className="background">
            <Nav />
            <div
                style={{
                    width: '600px',
                    margin: '100px auto',
                    padding: '60px',
                    backgroundColor: '#C0E3F6',
                    borderRadius: '30px',
                }}
            >
                <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '60px' }}>
                    <img src="../img/slack.png" style={{ width: '75px' }} />
                    &nbsp;이용 가이드
                </div>
                <div className="guide_div">
                    <img src="../img/circle-1.png" width="16px" />
                    &nbsp; &nbsp;
                    <span>
                        <a href="./addiot">IoT 기기 추가</a> 메뉴에서 스마트 플러그의 고유번호와 연결장치를 입력합니다.
                    </span>
                </div>
                <img src="../img/guide1.png" width="500px" style={{ borderRadius: '20px' }} />
                <div className="guide_div">
                    <img src="../img/circle-2.png" width="16px" />
                    &nbsp; &nbsp;
                    <span>
                        Slack앱을 설치하거나 웹페이지에 접속한 후 회원가입을 진행합니다.
                        <br />
                        <a href="https://slack.com/" target="_blank">
                            (Slack 웹페이지)
                        </a>
                    </span>
                </div>
                <img src="../img/guide2.png" width="500px" style={{ borderRadius: '20px' }} />
                <div className="guide_div">
                    <img src="../img/circle-3.png" width="16px" />
                    &nbsp; &nbsp;
                    <span>
                        채팅창에 '/SlackPowerHub'를 입력 후 '꺼줘 OO번'이나 '켜줘 OO번'을 입력합니다.
                        <br />
                        (예: '/SlackPowerHub 꺼줘 1번')
                    </span>
                </div>
                <img src="../img/guide3.png" width="500px" style={{ borderRadius: '20px' }} />
            </div>
        </div>
    );
}
