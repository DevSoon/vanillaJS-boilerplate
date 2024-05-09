import { renderRoute } from '@/utils/Router';

const App = (): HTMLElement => {
    const appElement = document.createElement('div');

    const render = (path: string = '/') => {
        const pageElement: HTMLElement = renderRoute(path);
        appElement.innerHTML = '';
        appElement.appendChild(pageElement);
    };

    render(window.location.pathname);

    window.addEventListener('popstate', () => {
        render(window.location.pathname);
    });

    return appElement;
};
export default App;