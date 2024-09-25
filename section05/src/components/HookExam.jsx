// 훅 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 커스텀 훅을 직접 만들 수 있다.

import useInput from "../hooks/useInput";

export const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
            {input}
        </div>
    );
};
