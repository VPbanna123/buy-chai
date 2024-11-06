import React from 'react'
import PaymentPage from '../components/PaymentPage'

const Page = async ({ params }) => {
  // Destructure username from params directly
  const { username } = await params; // No need to await params directly

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}

export default Page;
// if our a server component then we use useeffect but it is not server component
export async function generateMetadata({params}) {
  const t=await params
  // const usernameWithoutDomain = t.split('@')[0];
  return {
    title:`support ${t.username}-GET me a Chai`
  }
}
