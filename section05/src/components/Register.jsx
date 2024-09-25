// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

export const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const inputRef = useRef();

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소에 focus
            inputRef.current.focus();
        }
    };

    console.log(input);

    return (
        <div>
            <div>
                <input ref={inputRef} name="name" onChange={onChange} placeholder={"이름"} value={input.name} />
            </div>
            <div>
                <input name="birth" onChange={onChange} type="date" value={input.birth} />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value="">-</option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" onChange={onChange} value={input.bio} />
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};
