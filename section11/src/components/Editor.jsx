import { useState, useContext } from "react";
import "./Editor.css";
import { useRef } from "react";
import { TodoDispatchContext } from "../App";

export const Editor = () => {
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                onKeyDown={onKeyDown}
                value={content}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};
