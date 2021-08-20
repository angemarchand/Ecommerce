import SearchBar from "../components/SearchBar";
import CarouselProducts from "../components/CarouselProducts";
import CartProduct from "../components/cart/CartProducts";

function Cart() {

    return (
        <div id="products-background">
            <div className="container-fluid container-lg pt-3 pb-4">
                <SearchBar />
                <CartProduct />
                <div className="mt-4 d-none d-lg-block">
                    <CarouselProducts />
                </div>
            </div>
        </div>
    );
}
export default Cart;