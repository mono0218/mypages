import Navbar from "./components/Navbar";
import {NextUIProvider} from '@nextui-org/react';

export default function App({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <div className="App">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </NextUIProvider>
    )
}
