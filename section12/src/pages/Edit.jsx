import { useParams } from "react-router-dom";

const Edit = () => {
    const parmas = useParams();

    return <div>{parmas.id}번 일기입니다.</div>;
};

export default Edit;
