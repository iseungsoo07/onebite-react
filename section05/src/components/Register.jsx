// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

export const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    console.log(input);

    return (
        <div>
            <div>
                <input name="name" onChange={onChange} placeholder={"이름"} value={input.name} />
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
        </div>
    );
};
