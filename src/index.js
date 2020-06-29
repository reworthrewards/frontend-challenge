import ReactDOM from "react-dom";
import App from "./App";
import env from "settings/env";

function ReactRoot() {

    return <App />;
}

ReactDOM.render(
	<ReactRoot />,
    document.getElementById("root"),
);
