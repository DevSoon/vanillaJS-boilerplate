type State = {
    currentState: string;
};

class Store {
    private state: State;
    private listeners: { [key: string]: (() => void)[] } = {};

    constructor(initialState: State) {
        this.state = initialState;
    }

    getState(): State {
        return this.state;
    }

    setState(newState: Partial<State>) {
        const stateChanged: Array<keyof State> = [];
        Object.keys(newState).forEach((key) => {
            const stateKey = key as keyof State;
            if (this.state[stateKey] !== newState[stateKey]) {
                this.state[stateKey] = newState[stateKey] as State[keyof State];
                stateChanged.push(stateKey);
            }
        });

        if (stateChanged.length > 0) {
            stateChanged.forEach((key) => {
                this.notifyListeners(key);
            });
        }
    }

    subscribe(key: string, listener: () => void): () => void {
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(listener);
        return () => {
            this.listeners[key] = this.listeners[key].filter(l => l !== listener);
        };
    }

    private notifyListeners(key: string) {
        if (this.listeners[key]) {
            this.listeners[key].forEach(listener => listener());
        }
    }
}


export const store = new Store({ currentState: '' });