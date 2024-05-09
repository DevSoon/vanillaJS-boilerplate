import Home from '@/pages/Home';
import About from '@/pages/About';

export const routes: { [key: string]: () => HTMLElement } = {
    '/': Home,
    '/about': About,
    // '/contact': Contact,
};

export function renderRoute(path: string) {
    const PageComponent = routes[path] || Home;
    return PageComponent();
}

export function navigateTo(path: string) {
    history.pushState({}, '', path);
    const pageElement = renderRoute(path);
    const rootElement = document.getElementById('root');
    rootElement!.innerHTML = '';
    rootElement!.appendChild(pageElement);
}