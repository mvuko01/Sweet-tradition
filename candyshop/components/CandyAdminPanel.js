import Image from "next/image";

const CandyAdminPanel = ({product}) => {
    return (
        <>
        <Image
                width={196}
                height={220}
                src={`/productPics/${product.picture_paths[0]}`}
                alt="next page arrow"
            />
        <p>NAME</p>
            <p>{product.name}</p>
        <p>PRICE</p>
            <p>{product.price}</p>
        <p>QUANTITY</p>
            <p>{product.quantity}</p>
        <p>CATEGORY</p>
            <p>{product.category.name}</p>
        <button>EDIT</button>
        <button>DELETE</button>
        </>
    );
}
export default CandyAdminPanel;
