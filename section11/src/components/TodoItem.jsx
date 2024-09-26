import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteBtn = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteBtn}>삭제</button>
        </div>
    );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // true -> Props가 바뀌지 않음 -> 리렌더링 x
//     // false -> Props가 변경됨 -> 리렌더링 o

//     if (prevProps.id !== nextProps.id) {
//         return false;
//     }

//     if (prevProps.isDone !== nextProps.isDone) {
//         return false;
//     }

//     if (prevProps.content !== nextProps.content) {
//         return false;
//     }

//     if (prevProps.date !== nextProps.date) {
//         return false;
//     }

//     return true;
// });

export default memo(TodoItem);
