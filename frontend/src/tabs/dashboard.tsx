import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav.tsx';
import '../App.css';

export default function Dashboard() {
    return (
        <div className="background">
            <Nav />
            <div style={{ fontSize: '20px', fontWeight: '600', marginTop: '100px' }}>전력 사용량</div>
            <iframe
                src="http://43.200.254.151:3000/d-solo/ads9ioiskh0cga/new-dashboard?orgId=1&from=1721428116518&to=1721428416518&panelId=1"
                frameBorder="0"
                style={{ width: '700px', height: '500px', marginTop: '50px' }}
            ></iframe>
        </div>
    );
}
