import React from "react";

export const Input = ({ id, label, dispatch, state }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                onChange={e => {
                    e.persist();
                    dispatch({ [id]: e.target?.value || "" });
                }}
                value={state[id]}
                disabled={state.disabled}
                type="text"
            />
        </>
    );
};

export const Confirmation = ({ state }) => (
    <div className="confirmation">
        <h2>Congrats, {state.firstName}!</h2>
        <p>You're registered! Check your inbox to confirm your email.</p>
    </div>
);
