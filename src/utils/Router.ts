import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFoundPage from '@/pages/NotFoundPage';


type RouteParams = {
    [key: string]: string;
}

export const routes: { [key: string]: (params?: RouteParams) => HTMLElement } = {
    '/': Home,
    '/about': About,
    '/:userId': About,
};


export function renderRoute(path: string) {
    const pathSegments = path.split('/').filter(p => p);
    const matchedEntry = Object.keys(routes).find(route => {
        const routeSegments = route.split('/').filter(p => p);
        if (routeSegments.length !== pathSegments.length) return false;
        return routeSegments.every((segment, index) => segment.startsWith(':') || segment === pathSegments[index]);
    });

    if (matchedEntry) {
        const routeParams: RouteParams = {};
        const routeSegments = matchedEntry.split('/').filter(p => p);
        routeSegments.forEach((segment, index) => {
            if (segment.startsWith(':')) {
                const paramName = segment.slice(1);
                routeParams[paramName] = pathSegments[index];
            }
        });

        return routes[matchedEntry](routeParams);
    }
    return NotFoundPage();
}

export function navigateTo(path: string) {
    history.pushState({}, '', path);
    const pageElement = renderRoute(path);
    const rootElement = document.getElementById('root');
    rootElement!.innerHTML = '';
    rootElement!.appendChild(pageElement);
}