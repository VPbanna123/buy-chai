import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";

import connectDb from "@/app/db/connecdb";
import User from "@/models/user";

export const POST = async (req) => {
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // Check if razorpayOrderId is present on the server
    let p = await Payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false, message:"Order Id not found"})
    }

    // fetch the secret of the user who is getting the payment 
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    // Verify the payment
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if(xx){
        // Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: "true" },
            { new: true }
        );
        // const updatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done: "true"}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)  
    }

    else{
        return NextResponse.json({success: false, message:"Payment Verification Failed"})
    }

}
// console.log("Received payment verification request:", body);

// let p = await Payment.findOne({ oid: body.razorpay_order_id });
// if (!p) {
//     console.error("Order ID not found in database:", body.razorpay_order_id);
//     return NextResponse.json({ success: false, message: "Order Id not found" });
// }

// let user = await User.findOne({ username: p.to_user });
// if (!user) {
//     console.error("User not found for payment:", p.to_user);
//     return NextResponse.json({ success: false, message: "User not found" });
// }

// const secret = user.razorpaysecret;
// console.log("Secret for user:", secret);

// // Verify the payment
// let isValid = validatePaymentVerification(
//     {
//         order_id: body.razorpay_order_id,
//         payment_id: body.razorpay_payment_id
//     },
//     body.razorpay_signature,
//     secret
// );

// if (isValid) {
//     console.log("Payment verification successful, updating status...");
//     const updatedPayment = await Payment.findOneAndUpdate(
//         { oid: body.razorpay_order_id },
//         { done: "true" },
//         { new: true }
//     );

//     if (updatedPayment) {
//         console.log("Payment status updated successfully:", updatedPayment);
//         return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`);
//     } else {
//         console.error("Failed to update payment status in database.");
//     }
// } else {
//     console.error("Payment verification failed for:", body);
//     return NextResponse.json({ success: false, message: "Payment Verification Failed" });
// }
// }