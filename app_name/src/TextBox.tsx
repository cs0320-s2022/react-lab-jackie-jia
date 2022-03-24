import React from "react";

function TextBox(props: {label : string, change : React.Dispatch<string>}) {
    return (
        <div className="TextBox">
            <form>
                {props.label}
                <input type={'text'} id={props.label} onChange={e => props.change(e.target.value)}/>
            </form>
        </div>
    );
}
export default TextBox;