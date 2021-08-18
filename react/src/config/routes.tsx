import { Link } from "react-router-dom";

export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <h2>Home</h2>,
    },
    {
        path: '/games',
        exact: true,
        main: () => (
            <>
                <h2>Games catalog</h2>
                <ul>
                    <li>
                        <Link to="/games/categorisk">Categorisk</Link>
                    </li>
                </ul>
            </>
        ),
    },
    {
        path: '/games/categorisk',
        main: () => (
            <>
                <iframe
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '0',
                    }}
                    src="http://localhost:3000/lobby"
                ></iframe>
            </>
        ),
    },
];