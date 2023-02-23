'use client';
import {Provider} from "react-redux";
import store from "../store";
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function Home() {
    return (
        <main className="text-3xl font-bold underline">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <h1>hola</h1>
                </PersistGate>
            </Provider>
        </main>
    );
}
