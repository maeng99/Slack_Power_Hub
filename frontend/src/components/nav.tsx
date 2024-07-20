import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button.tsx';
import '../App.css';

export default function Nav(props) {
    return (
        <div className="nav">
            <Link to="/dashboard">
                <img src="../img/small_logo.png" style={{ width: '45px', marginTop: '5px' }} />
            </Link>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <span className="nav_text">대쉬보드</span>
            </Link>
            <Link to="/guideline" style={{ textDecoration: 'none' }}>
                <span className="nav_text">Slack 이용 가이드</span>
            </Link>
            <Link to="/addiot" style={{ textDecoration: 'none' }}>
                <span className="nav_text">IoT 기기 추가</span>
            </Link>
            <Button
                type="logout"
                size="small"
                title="로그아웃"
                onClick={() => {
                    window.location = '/';
                }}
            />
        </div>
    );
}
