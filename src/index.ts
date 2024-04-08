import App from "@/App"
import Layout from '@/layout/Layout';
import './styles/global.css';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (root) {
        root.appendChild(Layout());
        root.appendChild(App());
    }
});