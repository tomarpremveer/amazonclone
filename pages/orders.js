import Header from "../components/Header";
import Layout from "../components/layout";

export default function Orders(){
    return (
        <div>this is the orders page</div>
    )
}
Orders.getLayout = function getLayout(page){
    return (
        <>
        <Header />
        <div>{page}</div>
        </>
    )
}