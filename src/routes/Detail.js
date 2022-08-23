import { useParams, Link } from "react-router-dom";
import itemData from "../data/itemData";

function Detail() {
    let { id } = useParams();
    let item = itemData.find((item) => {
        return item.id == id;
    });

    return (
        <div id="detail" className="detail-list">
            <ItemInfo item={item} />
            <ItemContent item={item} />
        </div>
    );
}

function ItemInfo(props) {
    let { item } = props;

    return (
        <div className="item-info">
            <div className="item-img">
                <img src={item.img} alt={item.name} />
            </div>

            <div className="item-name">{item.name}</div>
            <div className="item-price">{item.price}</div>

            <button type="button">장바구니</button>
            <Link to="">바로구매</Link>
            <button type="button">찜하기</button>
            <button type="button">공유하기</button>
        </div>
    );
}

function ItemContent(props) {
    let { item } = props;

    return (
        <div className="item-info">
            {item.content}
            여기 본문이 막 들어갑니다.
        </div>
    );
}

export default Detail;



/**
 * a랑 b랑 c를 적으면 합쳐서 리턴해줍니다
 * @param {*} a  에이
 * @param {*} b  비
 * @param {*} c  씨
 * @returns  a + b + c를 줘요
 * 
 * @deprecated 이걸 쓰면 구버전이라는 뜻... 알아서 함수에 가로줄을 넣어줍니다 쓰지 말라고
 */
function abc (a, b, c) {
    return a + b + c;
}

abc();
