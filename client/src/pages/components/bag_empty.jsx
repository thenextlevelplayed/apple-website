import "../../css/bag.css"

const Bag_empty = () =>{
    return(
        <>
        {/* <!-- when bag is empty --> */}
        <div class="bag-empty">
            <div class="empty-modelus">
                <div class="empty-title">
                    <h1>Your bag is empty.</h1>
                    <p>Sign in to see if you have any saved items. Or continue shopping.</p>
                    <div class="row">
                        <div class="form-btn">
                            <div class="btn sign-in">
                                <a href="/sign-in">Sign In</a>
                            </div>
                        </div>
                        <div class="form-btn">
                            <div class="btn store">
                                <a href="/store">Continue Shopping</a>
                            </div>
                        </div>
                    </div>                
                </div>

                <div class="aidcaption">
                    <div class="aidcaption-modelus">
                        Need some help? Call 1‑800‑MY‑APPLE.
                    </div>
                </div>

                <div class="shop">
                    <div class="shop-modelus">
                        <div class="shop-icon">
                            <div class="shop-text">
                                <div class="shop-title">
                                    <h2>New Arrivals</h2>
                                </div>
                                <div class="shop-content">
                                    Check out the latest accessories.
                                </div>
                                <div class="shop-store-url">
                                    <a href="/Store"><span>Shop</span></a>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Bag_empty