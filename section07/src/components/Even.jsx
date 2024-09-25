import { useEffect } from "react";

export const Even = () => {
    useEffect(() => {
        // cleanup 함수
        return () => {
            console.log("unmount");
        };
    }, []);

    return <div>짝수입니다.</div>;
};
