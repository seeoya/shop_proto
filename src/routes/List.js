import { useParams } from "react-router-dom";

function List() {
    let { cate } = useParams();

    return (
        <div>
            리스트 <br />
            카테 : {cate}
        </div>
    );
}

export default List;
