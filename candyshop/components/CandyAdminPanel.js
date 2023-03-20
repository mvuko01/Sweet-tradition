import Image from "next/image";

const CandyAdminPanel = () => {
    return (
        <>
        <Image
                width={196}
                height={220}
                src="/productPics/berlingots.svg"
                alt="next page arrow"
            />
        <p>NAME</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>CATEGORY</p>
        <button>EDIT</button>
        <button>DELETE</button>
        </>
    );
}
export default CandyAdminPanel;
