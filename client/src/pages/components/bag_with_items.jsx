import "../../css/bag.css"
import Ipad_air from "./ipad_air"
import Apple_watch from "./apple_watch"
import Iphone13 from "./iphone13"
import Iphone13_pro from "./iphone13-pro"
import MacBookPro from "./macbook-pro"
import MacBookAir from "./macbook-air"








const Bag_with_items =() =>{

    return(
        <>
    <div class="bag-Review">
        <div class="Review-modelus">
            <div class="Review-title">
                <h1>Review your bag.</h1>
                <p>Free delivery and free returns.</p>
            </div>

            <div class="banner">
                <div class="as-icondetails" data-autom="rs-installment-banner">
                    <div class="as-icondetails-icon">
                        <img width="82" height="82" alt="" src="images/icons/banner.jfif" aria-hidden="true"/>
                    </div>
                    <div class="rs-installment-banner-content as-icondetails-detail">
                        <div class="rs-installment-banner-description">
                            <span>Pay $427.85<span aria-hidden="true">/mo.</span>
                            at 0% APR for eligible items in your order when you choose Apple Card Monthly Installments</span><br/>
                            <span> at checkout.</span>
                        </div>
                    </div>
                </div>
            </div>

        {/* bag with item */}
            <Ipad_air />
            <Apple_watch />
            <Iphone13 />
            <Iphone13_pro />
            <MacBookPro />
            <MacBookAir />


            {/* <!-- 結帳明細 --> */}
            <div class="rs-summary">
                <div class="rs-summary-info">
                    <div class="rs-summary-subtal">
                        <div class="summary-container">
                            <div class="summary-lab">
                                Subtotal
                            </div>
                            <div class="summary-value">
                                <p>
                                    $7,762.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rs-summary-shipping">
                        <div class="summary-container">
                            <div class="summary-lab">
                                Shipping
                            </div>
                            <div class="summary-value">
                                <p>
                                    FREE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="rs-summary-total">
                        <div class="summary-container">
                            <div class="summary-lab">
                                Total
                            </div>
                            <div class="summary-value">
                                <p>
                                    $7,762.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 結帳按鈕 --> */}
            <div class="checkout">
                <div class="checkout-info">
                    <div>
                        <h2 class="checkout-title">
                            How would you like to check out?
                        </h2>
                        <div class="payment-way">
                            <div class="pay-monthly">
                                <div class="pay-monthly-info">
                                    <div class="pay-monthly-title">
                                        <div>Pay Monthly <br/>
                                        with Apple Card</div>
                                        <div>$394.51/mo. at 0% APR◊</div>
                                    </div>
                                    <div class="checkout-btn">
                                        <button type="button">
                                            <span>
                                                Check Out with Apple Card
                                            </span>
                                            <span>
                                                Monthly Installments
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="pay-in-full">
                                <div class="pay-in-full-info">
                                    <div class="pay-in-full-title">
                                        <div>Pay in Full</div>
                                        <div>$7,762.00</div>
                                    </div>
                                    <div class="rs-bag-actions-box-message"></div>
                                    <div class="checkout-btn">
                                        <button type="button">
                                            <span>
                                                Check Out with Apple Card
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                                <a href="/store"><span>Shop</span></a>  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="apple-footer">
        <div class="copyright">
            <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
        </div>
    </div>
    </>

    )
    

}

export default Bag_with_items