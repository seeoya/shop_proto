import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import itemData from "../data/itemData";

function List() {
    let { cate } = useParams();

    return (
        <div id="list" className="item-list">
            {itemData.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
    );
}

function Item(props) {
    let { item } = props;

    return (
        <Link to={"/detail/" + item.id} className="item" data-id={item.id}>
            <div className="item-img">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="item-name">{item.name}</div>
            <div className="item-content">{item.content}</div>
            <div className="item-price">{item.price}</div>
        </Link>
    );
}

export default List;
