import React from 'react';
import './Footer.css'; // Importing the CSS file in the same directory
// import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <span className="footer-text">© 2024 GoFood, Inc</span>
                    <span className="footer-text">Contact No. +918306216084</span>
                </div>
            </footer>
        </div>
    );
}