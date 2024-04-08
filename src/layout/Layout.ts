function Layout(): HTMLElement {
    const layout = document.createElement('div');
    const headerMenu = `
        <header>
            <nav>
                <ul>
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;

    const sideMenu = `
        <aside>
            <ul>
                <li><a href="#/dashboard">Dashboard</a></li>
                <li><a href="#/settings">Settings</a></li>
                <li><a href="#/profile">Profile</a></li>
            </ul>
        </aside>
    `;

    layout.innerHTML = headerMenu + sideMenu;
    return layout;

}

export default Layout;