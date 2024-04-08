import { renderRoute } from '@/utils/Router';

const App = (): HTMLElement => {
    const appElement = document.createElement('div');

    const render = (): void => {
        const pageElement: HTMLElement = renderRoute();
        appElement.innerHTML = '';
        appElement.appendChild(pageElement);
    };

    render();
    window.addEventListener('hashchange', render);

    return appElement;
};
export default App;