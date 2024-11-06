"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/app/db/connecdb"
import User from "@/models/user"

// export const initiate = async (amount, to_username, paymentform) => {
//     await connectDb()
//     var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })
//     // instance.orders.create({
//     //     amount:50000,
//     //     currency:'INR',
//     //     receipt:'receipt#1',
//     //     notes:{
//     //         key1:"value3",
//     //         key2:"value"
//     //     }
//     // })
//     let options = {
//         amount: Number.parseInt(amount),
//         currency: "INR",
//     }
//     let x = await instance.orders.create(options)
//     // create a payment object which show a pending payment in the database
//     await Payment.create({ oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })
//     return x;
// }
export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    // fetch the secret of the user who is getting the payment 
    const decodedUsername =decodeURIComponent(to_username);
    const usernameWithoutDomain = decodedUsername.split('@')[0];
    let user = await User.findOne({username: usernameWithoutDomain})
      // Check if the user is null
      if (!user) {
        console.error(`User with username "${usernameWithoutDomain}" not found.`);
        throw new Error(`User not found with username "${usernameWithoutDomain}"`);
    }
    const secret = user.razorpaysecret
    const key_id = user.razorpayid;

    console.log("Using Razorpay key_id:", key_id);  // Log the key_id to make sure it's correct
    console.log("Using Razorpay secret:", secret);

    var instance = new Razorpay({ key_id:key_id , key_secret: secret })





    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount/100, to_user: usernameWithoutDomain, name: paymentform.name, message: paymentform.message })

    return x

}

// export const fetchuser = async (username) => {
//     await connectDb()
//     let u = await User.findOne({ email:  username })
//     console.log(u)
//     let user = u.toObject({ flattenObjectIds: true })
//     return user
// }
export const fetchuser = async (username) => {
    await connectDb(); // Ensure the database is connected
    try {
        console.log("Fetching user with username:", username); // Log the email being fetched
    const usernameWithoutDomain = username.split('@')[0];

        let user = await User.findOne({ username: usernameWithoutDomain }); // Search by email
        console.log("in fetchuser user is ",user)
        if (!user) {
            console.error("User not found with username:", usernameWithoutDomain); // More detailed error log
            // throw new Error("User not found");
        }
        return user.toObject({ flattenObjectIds: true }); // Convert to a plain object
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error; // Re-throw the error for handling
    }
};



export const fetchpayments = async (username) => {
    // await connectDb()
    // // find all payments sorted by decreasing order of amount and flatten object ids
    // let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    // return p
    try {
        await connectDb();
        let payments = await Payment.find({ to_user: username, done: true })
            .sort({ amount: -1 })
            .limit(10)
            .lean();
            payments = payments.map(payment => {
                return {
                    _id: payment._id.toString(), // Convert ObjectId to string
                    name: payment.name,
                    to_user: payment.to_user,
                    oid: payment.oid,
                    message: payment.message,
                    amount: payment.amount,
                    createdAt: payment.createdAt.toISOString(), // Convert Date to ISO string
                    updatedAt: payment.updatedAt.toISOString(),
                    done: payment.done,
                };
            });
    
            // Return the sanitized payment data
            return payments;
        // return payments; // Should already be plain objects
    } catch (error) {
        console.error('Error fetching payments:', error);
        return { error: 'Error fetching payments' };
    }
}

export const updateProfile=async(data,oldusername)=>{
    await connectDb()
    let ndata = Object.fromEntries(data)
    if(oldusername!==ndata.username)
    {
        let u =await User.findOne({username:ndata.username})
        if(u)
        {
            return {error:"username alerady exist"}
        }
        await User.updateOne({email:ndata.email},ndata);
        await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})
    }
    else{
        await User.updateOne({email:ndata.email},ndata);

    }
}


// "use server"

// import Razorpay from "razorpay"
// import Payment from "@/models/Payment"
// import connectDb from "@/app/db/connecdb"
// import User from "@/models/user"


// export const initiate = async (amount, to_username, paymentform) => {
//     await connectDb()
//     // fetch the secret of the user who is getting the payment 
//     let user = await User.findOne({username: to_username})
//     const secret = user.razorpaysecret

//     var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })



//     let options = {
//         amount: Number.parseInt(amount),
//         currency: "INR",
//     }

//     let x = await instance.orders.create(options)

//     // create a payment object which shows a pending payment in the database
//     await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })

//     return x

// }


// export const fetchuser = async (username) => {
//     await connectDb()
//     let u = await User.findOne({ username: username })
//     let user = u.toObject({ flattenObjectIds: true })
//     return user
// }

// export const fetchpayments = async (username) => {
//     await connectDb()
//     // find all payments sorted by decreasing order of amount and flatten object ids
//     let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
//     return p
// }

// export const updateProfile = async (data, oldusername) => {
//     await connectDb()
//     let ndata = Object.fromEntries(data)

//     // If the username is being updated, check if username is available
//     if (oldusername !== ndata.username) {
//         let u = await User.findOne({ username: ndata.username })
//         if (u) {
//             return { error: "Username already exists" }
//         }   
//         await User.updateOne({email: ndata.email}, ndata)
//         // Now update all the usernames in the Payments table 
//         await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
//     }
//     else{

        
//         await User.updateOne({email: ndata.email}, ndata)
//     }


// }