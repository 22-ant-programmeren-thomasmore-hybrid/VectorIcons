import {HomeScreen} from "./screens/HomeScreen";

function ProvidedApp() {
    return (
        <>
            <HomeScreen/>
        </>
    );
}

export default function App() {
    return (
        <ProvidedApp/>
    );
}
