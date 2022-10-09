import "../../css/bag.css"
import Ipad_air from "./ipad_air"
import Apple_watch from "./apple_watch"
import Iphone13 from "./iphone13"
import Iphone13_pro from "./iphone13-pro"
import MacBookPro from "./macbook-pro"
import MacBookAir from "./macbook-air"
import Bag_empty from "./bag_empty"
import React, { useRef, useState, useEffect } from "react";
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';
// import DataItem from '../context/item';


const Bag_with_items =() =>{

    const navigate = useNavigate();


    // get memberinfo 
    const [data,setData] = useState([]);
    const getToken = window.sessionStorage.getItem('token');

    // console.log(DataItem)

    // get cart data
    async function  getCart(){
        await Axios.get(`http://localhost:3001/getCart?token=${getToken}`).then((res,req)=>{
            let response = res.data;
            // console.log(response)
            // console.log(response.status)
            // console.log(response.result.list)
            if(response.status==0){
                setData(response.result.list)
            }else{
                console.log(res.msg)
            }
        })
    }
    
    // getCart();

    useEffect(()=>{
        if(getToken){
            getCart();

        }
        
    },[])
    // console.log(data)
    // calculator total
        if (data.cartList ===undefined){
            return console.log('no cartList')
        }else{
            var total = 0;
            data.useritemdata.forEach((item,indexx)=>{
                var quantity = data.cartList[indexx].itemNum
                // console.log(quantity,'quan')
                var price = (item.salePrice) * quantity
                total = total + price
                console.log(total)
            })
        }
    // calculator APR 
    if (data.cartList ===undefined){
        return console.log('no cartList')
    }else{
        var APR = 0;
        data.useritemdata.forEach((item,indexx)=>{
            var quantity = data.cartList[indexx].itemNum
            // console.log(quantity,'quan')
            var price = roundUp(item.salePrice/12,2) * quantity
            APR = APR + price
            console.log(APR)
        })
    }
    
        
    console.log('total',total)
    // console.log(totalprice,'total')
    // console.log(itemNum)
    console.log('data',data)
    // console.log(typeof(data.useritemdata))
    // console.log(data.useritemdata[0].itemName)
    // console.log(data.useritemdata)
    // console.log(data.useritemdata[0])
    const handleAddrTypeChange = (e) =>{
        console.log((e.target.value))
        const ee = e.target.value
        const updateCart = async () =>{
            await Axios({
                method:'PUT',
                url:`http://localhost:3001/updateCart?token=${getToken}`,
                data:{
                    id:data._id,
                    itemName:(data.cartList).map((item,indexx)=>{
                        item.itemName
                    }),
                    itemNum:ee,
                }
            })
        }
    }
    // 小數點第二位無條件進位
     function roundUp ( num, decimal ){
        return Math.ceil(( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal ); 
    }


    if (data.cartList ===undefined){
        return(
            <>
        <div className="bag-Review">
            <div className="Review-modelus">
                {/* <div className="Review-title">
                    <h1>Review your bag.</h1>
                    <p>Free delivery and free returns.</p>
                </div>
    
                <div className="banner">
                    <div className="as-icondetails" data-autom="rs-installment-banner">
                        <div className="as-icondetails-icon">
                            <img width="82" height="82" alt="" src="images/icons/banner.jfif" aria-hidden="true"/>
                        </div>
                        <div className="rs-installment-banner-content as-icondetails-detail">
                            <div className="rs-installment-banner-description">
                                <span>Pay $427.85<span aria-hidden="true">/mo.</span>
                                at 0% APR for eligible items in your order when you choose Apple Card Monthly Installments</span><br/>
                                <span> at checkout.</span>
                            </div>
                        </div>
                    </div>
                </div> */}
    
            {/* bag with item */}
                <Bag_empty/>
                {/* <Ipad_air /> */}
                {/* <Apple_watch /> */}
                {/* <Iphone13 /> */}
                {/* <Iphone13_pro /> */}
                {/* <MacBookPro /> */}
                {/* <MacBookAir /> */}
                
    
    
                {/* <!-- 結帳明細 --> */}
                {/* <div className="rs-summary">
                    <div className="rs-summary-info">
                        <div className="rs-summary-subtal">
                            <div className="summary-container">
                                <div className="summary-lab">
                                    Subtotal
                                </div>
                                <div className="summary-value">
                                    <p>
                                        $7,762.00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rs-summary-shipping">
                            <div className="summary-container">
                                <div className="summary-lab">
                                    Shipping
                                </div>
                                <div className="summary-value">
                                    <p>
                                        FREE
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rs-summary-total">
                            <div className="summary-container">
                                <div className="summary-lab">
                                    Total
                                </div>
                                <div className="summary-value">
                                    <p>
                                        $7,762.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- 結帳按鈕 --> */}
                {/* <div className="checkout">
                    <div className="checkout-info">
                        <div>
                            <h2 className="checkout-title">
                                How would you like to check out?
                            </h2>
                            <div className="payment-way">
                                <div className="pay-monthly">
                                    <div className="pay-monthly-info">
                                        <div className="pay-monthly-title">
                                            <div>Pay Monthly <br/>
                                            with Apple Card</div>
                                            <div>$394.51/mo. at 0% APR◊</div>
                                        </div>
                                        <div className="checkout-btn">
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
                                <div className="pay-in-full">
                                    <div className="pay-in-full-info">
                                        <div className="pay-in-full-title">
                                            <div>Pay in Full</div>
                                            <div>$7,762.00</div>
                                        </div>
                                        <div className="rs-bag-actions-box-message"></div>
                                        <div className="checkout-btn">
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
                </div> */}
    
    
                {/* <div className="aidcaption">
                    <div className="aidcaption-modelus">
                        Need some help? Call 1‑800‑MY‑APPLE.
                    </div>
                </div>
    
                <div className="shop">
                    <div className="shop-modelus">
                        <div className="shop-icon">
                            <div className="shop-text">
                                <div className="shop-title">
                                    <h2>New Arrivals</h2>
                                </div>
                                <div className="shop-content">
                                    Check out the latest accessories.
                                </div>
                                <div className="shop-store-url">
                                    <a href="/store"><span>Shop</span></a>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    
        <div id="apple-footer">
            <div className="copyright">
                <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
            </div>
        </div>
        </>
    
        )
    }else {
        return(
            <>
        <div className="bag-Review">
            <div className="Review-modelus">
                <div className="Review-title">
                    <h1>Review your bag.</h1>
                    <p>Free delivery and free returns.</p>
                </div>
    
                <div className="banner">
                    <div className="as-icondetails" data-autom="rs-installment-banner">
                        <div className="as-icondetails-icon">
                            <img width="82" height="82" alt="" src="images/icons/banner.jfif" aria-hidden="true"/>
                        </div>
                        <div className="rs-installment-banner-content as-icondetails-detail">
                            <div className="rs-installment-banner-description">
                                <span>Pay $427.85<span aria-hidden="true">/mo.</span>
                                at 0% APR for eligible items in your order when you choose Apple Card Monthly Installments</span><br/>
                                <span> at checkout.</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                {(data.cartList).map((item,indexx)=>{
                    console.log(item.itemNum)
                    return(
                        <div className="bag-content" key={indexx}>
                <ol className="bag-items">
                    <li className="bag-item-info">
                        <div className="iteminfo-image">
                        <img width="400" height="400" alt="" src={data.useritemdata[indexx].image}  className="as-util-relatedlink" aria-hidden="true" data-autom="bag-item-image"/>
                        </div>
                        <div className="item-info-content">
                            <div className="iteminfo-details">
                                <div className="iteminfo-title-wrapper">
                                    <h2 className="iteminfo-title">{item.itemName}</h2>
                                </div>
                                <div className="iteminfo-quantity">
                                    <div className="quantity">
                                        <div className="quantity-wrapper">
                                            <select name="" id="" className="quantity-dropdown" defaultValue={item.itemNum}  onChange={e => handleAddrTypeChange(e)}>
                                                <option value="1" className="">1</option>
                                                <option value="2" className="">2</option>
                                                <option value="3" className="">3</option>
                                                <option value="4" className="">4</option>
                                                <option value="5" className="">5</option>
                                                <option value="6" className="">6</option>
                                                <option value="7" className="">7</option>
                                                <option value="8" className="">8</option>
                                                <option value="9" className="">9</option>
                                                <option value="10" className="">10</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="iteminfo-pricedetails">
                                    <div className="iteminfo-price">
                                        <p>${item.salePrice}.00</p>
                                    </div>
                                </div>
                                <div className="iteminfo-pricelinewrapper">
                                    <div className="summary-content">
                                        <div className="summary-container">
                                            <div className="summary-lab">
                                                Pay 0% APR for 12 months:
                                            </div>
                                            <div className="summary-value">
                                                <p>
                                                    ${roundUp(item.salePrice/12,2) }/mo.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="summary-container">
                                            <div className="summary-lab">
                                            </div>
                                            <div className="summary-value">
                                                <span>
                                                    <button type="button" className="rs-iteminfo-remove as-buttonlink" id="shoppingCart.items.item-611969e3-cdbf-4f1a-bc6a-02d9aec8f1a0.delete" data-autom="bag-item-remove-button">Remove</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </li>
                    
                </ol>
            </div>
                    )
                    
                //    console.log(item.itemName)
                //    console.log(data.useritemdata[indexx].image)
                })}
                </div>

                {/* <!-- 結帳明細 --> */}
                <div className="rs-summary">
                    <div className="rs-summary-info">
                        <div className="rs-summary-subtal">
                            <div className="summary-container">
                                <div className="summary-lab">
                                    Subtotal
                                </div>
                                <div className="summary-value">
                                    <p>
                                        ${total}.00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rs-summary-shipping">
                            <div className="summary-container">
                                <div className="summary-lab">
                                    Shipping
                                </div>
                                <div className="summary-value">
                                    <p>
                                        FREE
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rs-summary-total">
                            <div className="summary-container">
                                <div className="summary-lab">
                                    Total
                                </div>
                                <div className="summary-value">
                                    <p>
                                    ${total}.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 結帳按鈕 --> */}
                <div className="checkout">
                    <div className="checkout-info">
                        <div>
                            <h2 className="checkout-title">
                                How would you like to check out?
                            </h2>
                            <div className="payment-way">
                                <div className="pay-monthly">
                                    <div className="pay-monthly-info">
                                        <div className="pay-monthly-title">
                                            <div>Pay Monthly <br/>
                                            with Apple Card</div>
                                            <div>${roundUp(total/12,2) }/mo. at 0% APR◊</div>
                                        </div>
                                        <div className="checkout-btn">
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
                                <div className="pay-in-full">
                                    <div className="pay-in-full-info">
                                        <div className="pay-in-full-title">
                                            <div>Pay in Full</div>
                                            <div>${total}.00</div>
                                        </div>
                                        <div className="rs-bag-actions-box-message"></div>
                                        <div className="checkout-btn">
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
    
    
                <div className="aidcaption">
                    <div className="aidcaption-modelus">
                        Need some help? Call 1‑800‑MY‑APPLE.
                    </div>
                </div>
    
                <div className="shop">
                    <div className="shop-modelus">
                        <div className="shop-icon">
                            <div className="shop-text">
                                <div className="shop-title">
                                    <h2>New Arrivals</h2>
                                </div>
                                <div className="shop-content">
                                    Check out the latest accessories.
                                </div>
                                <div className="shop-store-url">
                                    <a href="/store"><span>Shop</span></a>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div id="apple-footer">
            <div className="copyright">
                <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
            </div>
        </div>
        </>
    
        )
    }
    

    // return(
    //     <>
    // <div className="bag-Review">
    //     <div className="Review-modelus">
    //         <div className="Review-title">
    //             <h1>Review your bag.</h1>
    //             <p>Free delivery and free returns.</p>
    //         </div>

    //         <div className="banner">
    //             <div className="as-icondetails" data-autom="rs-installment-banner">
    //                 <div className="as-icondetails-icon">
    //                     <img width="82" height="82" alt="" src="images/icons/banner.jfif" aria-hidden="true"/>
    //                 </div>
    //                 <div className="rs-installment-banner-content as-icondetails-detail">
    //                     <div className="rs-installment-banner-description">
    //                         <span>Pay $427.85<span aria-hidden="true">/mo.</span>
    //                         at 0% APR for eligible items in your order when you choose Apple Card Monthly Installments</span><br/>
    //                         <span> at checkout.</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //     {/* bag with item */}
    //         {/* <Bag_empty/> */}
    //         <Ipad_air />
    //         <Apple_watch />
    //         <Iphone13 />
    //         <Iphone13_pro />
    //         <MacBookPro />
    //         <MacBookAir />
            


    //         {/* <!-- 結帳明細 --> */}
    //         <div className="rs-summary">
    //             <div className="rs-summary-info">
    //                 <div className="rs-summary-subtal">
    //                     <div className="summary-container">
    //                         <div className="summary-lab">
    //                             Subtotal
    //                         </div>
    //                         <div className="summary-value">
    //                             <p>
    //                                 $7,762.00
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="rs-summary-shipping">
    //                     <div className="summary-container">
    //                         <div className="summary-lab">
    //                             Shipping
    //                         </div>
    //                         <div className="summary-value">
    //                             <p>
    //                                 FREE
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="rs-summary-total">
    //                     <div className="summary-container">
    //                         <div className="summary-lab">
    //                             Total
    //                         </div>
    //                         <div className="summary-value">
    //                             <p>
    //                                 $7,762.00
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- 結帳按鈕 --> */}
    //         <div className="checkout">
    //             <div className="checkout-info">
    //                 <div>
    //                     <h2 className="checkout-title">
    //                         How would you like to check out?
    //                     </h2>
    //                     <div className="payment-way">
    //                         <div className="pay-monthly">
    //                             <div className="pay-monthly-info">
    //                                 <div className="pay-monthly-title">
    //                                     <div>Pay Monthly <br/>
    //                                     with Apple Card</div>
    //                                     <div>$394.51/mo. at 0% APR◊</div>
    //                                 </div>
    //                                 <div className="checkout-btn">
    //                                     <button type="button">
    //                                         <span>
    //                                             Check Out with Apple Card
    //                                         </span>
    //                                         <span>
    //                                             Monthly Installments
    //                                         </span>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="pay-in-full">
    //                             <div className="pay-in-full-info">
    //                                 <div className="pay-in-full-title">
    //                                     <div>Pay in Full</div>
    //                                     <div>$7,762.00</div>
    //                                 </div>
    //                                 <div className="rs-bag-actions-box-message"></div>
    //                                 <div className="checkout-btn">
    //                                     <button type="button">
    //                                         <span>
    //                                             Check Out with Apple Card
    //                                         </span>
    //                                     </button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>


    //         <div className="aidcaption">
    //             <div className="aidcaption-modelus">
    //                 Need some help? Call 1‑800‑MY‑APPLE.
    //             </div>
    //         </div>

    //         <div className="shop">
    //             <div className="shop-modelus">
    //                 <div className="shop-icon">
    //                     <div className="shop-text">
    //                         <div className="shop-title">
    //                             <h2>New Arrivals</h2>
    //                         </div>
    //                         <div className="shop-content">
    //                             Check out the latest accessories.
    //                         </div>
    //                         <div className="shop-store-url">
    //                             <a href="/store"><span>Shop</span></a>  
    //                         </div>
                            
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // <div id="apple-footer">
    //     <div className="copyright">
    //         <span>Copyright © 2022 Apple Inc. All rights reserved.</span>
    //     </div>
    // </div>
    // </>

    // )
    

}

export default Bag_with_items