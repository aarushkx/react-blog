import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

function App() {

    /**
     * useState hook to manage the loading state of the application.
     * This state is used to show a loading spinner while the application is loading.
     */
    const [loading, setLoading] = useState(false);

    /**
     * useDispatch hook from react-redux to dispatch actions to the redux store.
     * This hook is used to dispatch actions for authentication and user data.
     */
    const dispatch = useDispatch();

    return (
        <>
            <h1>Blog App with Appwrite</h1>
        </>
    );
}

export default App;
