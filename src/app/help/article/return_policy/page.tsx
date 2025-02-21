import styles from "./returnPolicy.module.scss"

const ReturnPolicy = () => {
    return (
        <div className={'mt-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
            <div>Breadcrum</div>
            <h1 className={'text-center text-3xl'}>Help Center</h1>
            <div className={'grid grid-cols-3 gap-32'}>
                <div className={'col-span-2 p-4'}>
                    <div>
                        <h2 className={'text-xl'}>Return Policy</h2>
                        <p className={'mt-4 ml-2'}>
                            We accept returns for most items within 30 days of delivery.
                            The item(s) must be in its original, undamaged condition.
                            If the packaging is too damaged, use a similar-sized box or one no longer than 108 inches.
                            If the item was delivered disassembled, it should be returned disassembled.
                            If packaging was removed as part of the delivery process, no packaging will be needed.
                            If your returned item is not received at our Returns Center, we reserve the right to reverse the refund.
                            Please note that Wayfair does not accept returns at its warehouses.
                        </p>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>What’s the mattress return policy?</h2>
                        <p className={'ml-2 mt-4'}>
                            Every mattress comes with a 100-night free trial.
                            If you don't love your new mattress within the first 100 nights, you can arrange a return for free to store credit, or to your original payment method for a fee ranging from $49-$99.
                            This excludes Mattress Toppers, Crib Mattresses, Air Mattresses, and Open Box Mattresses.
                            Some payment methods (e.g. financing payment options) might not be eligible for store credit refunds - if Store Credit does not appear as an option when setting up the return, this is likely due to your original payment method.
                        </p>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>What’s the large appliance return policy?</h2>
                        <div className={'ml-2 mt-4'}>
                            <p>
                                You can return a large appliance within 48 hours of delivery as long as it has not been installed and is returned in the original packaging.
                                In some cases, you might have to pay the manufacturer's restocking fee.
                            </p>
                            <p>Please take the following steps before installing the appliance:</p>
                            <p>1) Scan the box for damage.</p>
                            <p>2) Make sure the product name and model number match your order confirmation.</p>
                            <p>3) Remove the packaging and inspect the appliance.</p>
                            <p>
                                If you receive the wrong item or it arrives damaged, don't accept the delivery.
                                Tell your delivery representative(s) and contact us so we can arrange for a replacement.
                                <span>
                                Once you have installed the appliance, it cannot be returned.
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>How do exchanges work?</h2>
                        <div className={'mt-4 ml-2'}>
                            <p>
                                We don't offer direct exchanges of items but you can certainly return an item for store credit, and then place a new order for the item you want.
                                We initiate a refund once the item has been received and checked at our warehouse.
                                For store credit, this takes 24 hours from initiation, and 3-5 business days for refunds to the original payment method.
                                You can either order your new item before returning the old one or wait until your refund has been received to place the new order.
                            </p>
                            <p>
                                Where applicable, your return ship fee will be automatically deducted from the refund amount.
                            </p>
                            <p>
                                Retailers selling mattresses in CT, RI, or CA must collect a state-mandated Mattress Recycling Fee from customers.
                                The fee is based on your shipping address or postal code and can range from $10-$25.
                                It applies to all mattress purchases in these states, regardless of whether you are recycling an old mattress.
                                The fee is non-refundable, as mandated by state law, and is not subject to sales tax.
                            </p>
                        </div>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>Is there an extended return policy for holiday purchases?</h2>
                        <p className={'mt-4 ml-2'}>
                            For all items purchased between November 1 and December 31 (except Appliances as described above), the deadline to return them is extended until January 31.
                        </p>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>How do I return an item?</h2>
                        <div className={'mt-4 ml-2'}>
                            <p>
                                You can set up a return easily via My Orders. For more information on how to do this, visit this article.
                            </p>
                            <p>
                                You may receive a special offer to accept a discount to keep the item instead of going through the hassle of returning it.
                                This is a special offer just for you and the amount cannot be changed.
                                If you do not wish to accept the discount, you can decline and proceed with setting up a return.
                            </p>
                        </div>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>How will I receive my refund?</h2>
                        <div className={'mt-4 ml-2'}>
                            <p>
                                You can choose to receive store credit for your return, or have the original payment method refunded.
                                Any associated return shipping costs will be deducted from the refund amount. More details can be found in our Refunds article.
                            </p>
                            <p>Any outbound shipping charges collected on the order will not be refunded. This includes:</p>
                            <ul style={{'listStyle': 'outside'}} className={'ml-[23px]'}>
                                <li>$4.99 shipping charge for orders under $35</li>
                                <li>Upgraded shipping charges (expedited, express, room of choice, etc.)</li>
                                <li>Assembly services included with delivery</li>
                            </ul>
                            <p>
                                However, if your item is damaged or defective, these exceptions do not apply.
                                In this case, we’ll take care of it and work with you to find the best solution.
                            </p>
                        </div>
                    </div>
                    <div className={'mt-8'}>
                        <h2 className={'text-xl'}>Which items can’t be returned?</h2>
                        <div className={'mt-4 ml-2'}>
                            <p>The following item categories cannot be returned:</p>
                            <ul style={{'listStyle': 'outside'}} className={'ml-[23px]'}>
                                <li>Open Box items</li>
                                <li>Clearance items</li>
                                <li>Gift cards</li>
                                <li>Made-to-order or personalized items</li>
                                <li>Items bundled at discounted rates (unless the entire bundle is returned)</li>
                                <li>Items marked as 'Non-Returnable' (if an item is non-returnable, a message will appear advising of this once the item has been added to your cart)</li>
                                <li>Live plants</li>
                                <li>Swatches</li>
                                <li>Certain Dangerous Goods items including flammable liquids, matches, compressed gas, propane tanks, lighters or damaged lithium batteries.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'col-span-1'}>
                    <h1 className={'text-xl'}>Related Articles</h1>
                    <ul className={styles.related_articles}>
                        <li>Payment Methods</li>
                        <li>Ordering Information</li>
                        <li>Returns and Exchanges</li>
                        <li>Refunds</li>
                        <li>Changing Account Information</li>
                        <li>Coupons, Promo Codes & Promotions</li>
                        <li>How do I make changes to an order?</li>
                        <li>Cancellations</li>
                        <li>Payment Authorization Holds</li>
                        <li>Gift Cards</li>
                        <li>Wayfair Rewards Program</li>
                    </ul>
                </div>
            </div>
            <div className={'h-[1px] mt-10'} style={{'background': '#e5e7eb'}}/>
            <div className={'text-center mt-10'}>
                <h1 className={'text-2xl'}>Need further assistance?</h1>
                <p>Our Virtual Assistant can help resolve any issues or connect you with an agent.</p>
                <button className={'border w-[150px] h-[50px]'}>Start a Chat</button>
            </div>
        </div>
    )
}

export default ReturnPolicy