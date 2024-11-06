"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useraction'
// import { useSession } from 'next-auth/react'
// import { fetchuser } from '@/actions/useraction'
// import { fetchpayments } from '@/actions/useraction'
import { fetchuser } from '@/actions/useraction'
import { fetchpayments } from '@/actions/useraction'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const searchParams = useSearchParams()
    const router = useRouter()

    // useEffect(() => {
    //     document.title = "Update profile";  // Set the title dynamically on the client-side
    //   }, []);

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(searchParams.get("paymentdone") == "true"){
        toast('Thanks for your donation!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
        router.push(`/${username}`)
     
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    // const getData = async () => {
    //     // let u = await fetchuser(username)
    //     // setcurrentUser(u)
    //     // console.log("Fetched User Data:", u);
    //     const email = username; // assuming username is the full email
    // const user = email.split('@')[0]; // Get the username from the email
    //     try {
    //         let u = await fetchuser(user);
    //         setcurrentUser(u);
    //         console.log("Fetched User Data:", u);
    //         // Additional logic...
    //     } catch (error) {
    //         console.error("Error fetching user:", error);
    //     }
    //     let dbpayments = await fetchpayments(username)
    //     setPayments(dbpayments)
    // }
    const getData = async () => {
        // Decode the email to get the actual email format
        const email = decodeURIComponent(username); // Decode the URL-encoded username
    
        try {
            let u = await fetchuser(email); // Pass the decoded email to fetchuser
            setcurrentUser(u);
            console.log("Fetched User Data:", u);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    
        // Fetch payments
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    };
    

    const pay = async (amount) => {
        //get the orderid
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key":currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "BUY ME A CHAI", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);

        rzp1.open();

    }

    return (
        <>

<ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            {/* Same as */}
            <ToastContainer />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='relative'>
                <img className='object-cover w-full h-48 md:h-[350px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4638557/3660846bae0946caae90be5767245187/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/18.png?token-time=1733270400&token-hash=b8zI2-FAWHQ3PY8YaGAR7zcRoDwitBu_EezFGaGHf6U%3D" alt="" />
                <div className='absolute -bottom-20 right-[33%] md:right-[46%] '>
                    <img className='rounded-full' width={100} height={100} src={currentUser.profilepic}alt="" /> 
             </div>
            </div>
            {/* "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1731196800&token-hash=b0o9TwFvCMT4-y_JpHVEMAbUzymR-vJuasg0yYx51D8%3D" */}
            {/* <div className='relative'>
               

                <img
                    className='object-cover w-full h-[350px]'
                    src={currentUser.coverpic}
                    alt=""
                />
                <div className='absolute -bottom-20 right-[46%]'>
                {console.log("Profile name:",currentUser)}
                    <img
                        className='rounded-full'
                        width={100}
                        height={100}
                        // src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1731196800&token-hash=b0o9TwFvCMT4-y_JpHVEMAbUzymR-vJuasg0yYx51D8%3D"
                        src={currentUser.profilepic}
                        alt="Profile Picture"
                    />
                </div>
            </div> */}

            <div className='info flex my-20 flex-col gap-2 justify-center items-center'>
                <div className='font-bold text-lg'>
                    @ {decodeURIComponent(username)}
                </div>
                <div className='text-gray-400'>
                    lets help {decodeURIComponent(username)} to get a chai!
                </div>
                <div className='text-gray-400'>
                    {payments.length} Payments  ₹{payments.reduce((a,b)=>a+b.amount,0)}has raised.
                </div>
                <div className="flex gap-3 w-[80%] mx-auto my-5 flex-col md:flex-row"> {/* Center the flex container */}
                    <div className="supporters w-full md:w-1/2  bg-slate-900 rounded-lg text-white  px-2 md:p-10"> {/* Added padding */}
                        <h2 className="text-lg font-bold my-5">Supporters</h2>
                        <ul className='mx-2'>
                            {/* {payments.map((p, i) => {
                                //return <li key={i} className='my-2 flex  items-center'>
                                 //   <img width={35} src="icons8-customer.gif" alt="" /><span>{p.name} donated <span className="font-bold "> ${p.amount}</span> with a message "{p.message} ❤️"</span></li>
                             })} */}
                            {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={35} src="icons8-customer.gif" alt="" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}❤️&quot;
                                    </span>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="payment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10">
                        <h2 className="text-lg font-bold text-center">Payment Section</h2>
                        <div className='flex gap-2 flex-col'>
                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount * 100))} className='bg-slate-700 p-3 rounded-lg disabled:bg-slate-400' disabled={paymentform.name?.length<3||paymentform.message?.length<4|| paymentform.amount?.length<1}>Pay</button>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className='bg-slate-700 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-700 p-3 rounded-lg' onClick={() => pay(5000)}>Pay ₹50</button>
                            <button className='bg-slate-700 p-3 rounded-lg' onClick={() => pay(10000)}>Pay ₹100</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage

