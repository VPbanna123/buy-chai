import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center flex-col items-center h-[44vh] px-5 md:px-0 text-xs md:text-base gap-2">
        <div className="  font-bold md:text-5xl flex items-center gap-3  md:gap-5">BUY me a chai <span><img src="/chai.gif" width={38} alt="" srcSet="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators. Got funded by your fans and followers .start now!
        </p>
        <div>

         <Link  href={"/login"}><button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button></Link>
         <Link  href={"/about"}> <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more!</button></Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-28">
        <h1 className="text-2xl font-bold text-center mb-14">your fans can buy you a chai</h1>
        <div className="flex gap-4 justify-center items-center">
  <div className="item space-y-2 flex flex-col justify-center items-center">
    <img className="rounded-full p-2" width={98} src="/man.gif" alt="fund yourself" />
    <p className="font-bold text-center">Fund yourself</p>
    <p className="text-center px-4 sm:px-0">Your fans are available for you to help you</p>
  </div>
  <div className="item space-y-2 flex flex-col justify-center items-center">
    <img className="rounded-full p-2" width={88} src="/coin.webp" alt="fund yourself" />
    <p className="font-bold text-center">Fund yourself</p>
    <p className="text-center px-4 sm:px-0">Your fans are available for you to help you</p>
  </div>
  <div className="item space-y-2 flex flex-col justify-center items-center">
    <img className="rounded-full p-2" width={78} src="/group.gif" alt="fans help" />
    <p className="font-bold text-center">Fans want to help</p>
    <p className="text-center px-4 sm:px-0">Your fans are available for you to help you</p>
  </div>
</div>

      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto py-9 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center mb-14">Learn More About Us</h1>
        <div className="w-full max-w-4xl mx-auto">
        <div className="w-full max-w-3xl mx-auto">
  <div className="relative pb-[56.25%] w-full h-0 overflow-hidden">
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/fwt-Dzq_xjE?si=ZAk4yaFiVpkbDIko" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen 
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  </div>
</div>
</div>
      </div>
    </>
  );
}

export const metadata={
  title:"GET ME A CHAI"
}