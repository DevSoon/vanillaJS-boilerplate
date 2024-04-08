import Home from '@/pages/Home';
import About from '@/pages/About';

export const routes: { [key: string]: () => HTMLElement } = {
    '/': Home,
    '/about': About,
    // '/contact': Contact,
};

export function renderRoute() {
    const path: string = window.location.hash.split('#')[1] || '/';
    const PageComponent = routes[path] || Home;
    return PageComponent();
}