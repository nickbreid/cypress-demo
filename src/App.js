import React from "react";
import { Input, Confirmation } from "./Components";

function App() {
    const [state, dispatch] = React.useReducer(
        (state, newProperty) => {
            return { ...state, ...newProperty };
        },
        {
            firstName: "",
            lastName: "",
            email: "",
            disabled: false,
            showMessage: false
        }
    );

    const clickFn = e => {
        // e.preventDefault();

        // dispatch({ disabled: true });
        // dispatch({ showMessage: true });
    };

    return (
        <div className="App">
            <form>
                <Input
                    state={state}
                    dispatch={dispatch}
                    id="firstName"
                    label="First Name"
                />
                <Input
                    state={state}
                    dispatch={dispatch}
                    id="lastName"
                    label="Last Name"
                />
                <Input
                    state={state}
                    dispatch={dispatch}
                    id="email"
                    label="Email"
                />
                <button type="submit" onClick={clickFn}>
                    Submit
                </button>
            </form>
            {state.showMessage ? <Confirmation state={state} /> : null}
        </div>
    );
}

export default App;
