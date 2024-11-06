import React from 'react'

const page = () => {
  return (
   
    <div className="bg-gray-50 text-white bg-[url('/about.gif')] bg-cover bg-center">
    {/* Your content here */}

      {/* Header */}
      <header className="bg-blue-900 text-white py-8">
        <h1 className="text-4xl font-bold text-center">Welcome to FanBoost</h1>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <section className="text-center mb-16">
    <div className="flex flex-col items-center">
      {/* Profile Image Wrapper (This container will have the hover effect) */}
      <div className="relative group">
        {/* Profile Image */}
        <img
          className="w-56 h-56 object-cover rounded-lg border-4 border-gray-300 shadow-lg mb-4 transition-all duration-500 group-hover:border-blue-500 group-hover:scale-110"
          src="profile.jpg"
          alt="Profile"
        />
        {/* Hover Effect Background - Colorful Border */}
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-gradient-to-r from-red-500 via-yellow-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
      </div>

      {/* Name */}
      <h2 className="text-3xl font-semibold text-white mt-4 transition-all duration-500 group-hover:text-yellow-400 group-hover:scale-110 group-hover:font-bold">
        Vijaypal Singh
      </h2>

      {/* Description */}
      <p className="text-lg text-white mt-2">
        Hey! I'm [Your Name], a passionate creator focused on [content you create]. I love connecting with my community and providing exclusive content just for you!
      </p>
    </div>
  </section>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-white mb-8">
            At FanBoost, our mission is simple: <strong>to help creators grow and connect with their audience.</strong>
            We believe in empowering creators to focus on what they love most, while providing a space where fans can directly support the content they cherish.
          </p>
        </section>

       {/* Cards Section */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-transparent hover:border-blue-500 transition-all duration-500 relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
    <img className="w-full h-48 object-cover rounded-lg mb-4 relative z-10" src="/chai.gif" alt="Feature 1" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">Feature 1</h3>
    <p className="text-gray-700 relative z-10">Learn how FanBoost can help you build and manage your fanbase with ease and creativity.</p>
    {/* Live Border Effect */}
    <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-lg"></div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-transparent hover:border-green-500 transition-all duration-500 relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 opacity-30 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
    <img className="w-full h-48 object-cover rounded-lg mb-4 relative z-10" src="/coin.webp" alt="Feature 2" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">Feature 2</h3>
    <p className="text-gray-700 relative z-10">Unlock advanced tools that allow you to analyze your growth and engagement directly on the platform.</p>
    {/* Live Border Effect */}
    <div className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 transition-all duration-500 rounded-lg"></div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-transparent hover:border-red-500 transition-all duration-500 relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-30 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
    <img className="w-full h-48 object-cover rounded-lg mb-4 relative z-10" src="/group.gif" alt="Feature 3" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">Feature 3</h3>
    <p className="text-gray-700 relative z-10">Exclusive content options for creators to monetize through tips, subscriptions, or even custom campaigns.</p>
    {/* Live Border Effect */}
    <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-500 transition-all duration-500 rounded-lg"></div>
  </div>
</section>


        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">How It Works</h2>
          <p className="text-lg leading-relaxed text-white mb-6">
            FanBoost is designed to make it easier for you to interact with your fans and for them to show their support. Here’s how it works:
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-white">
            <li><strong>Create Your Profile:</strong> Set up your personal or business page and start sharing your content with the world.</li>
            <li><strong>Engage Your Fans:</strong> Post exclusive updates, behind-the-scenes content, or simply interact with your audience.</li>
            <li><strong>Monetize Your Content:</strong> Turn your creativity into a sustainable income. Whether through one-time donations or monthly subscriptions.</li>
            <li><strong>Track Your Progress:</strong> Monitor the growth of your community and see where your support is coming from.</li>
          </ol>
        </section>

        {/* Why FanBoost? */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">Why FanBoost?</h2>
          <p className="text-lg leading-relaxed text-white mb-6">
            FanBoost is built for both creators and fans. Here’s why you should be a part of it:
          </p>
          <ul className="space-y-4">
            <li className="p-4 rounded-lg">
              <strong>For Creators:</strong> FanBoost gives you the freedom to create without worrying about monetization, marketing, or technical challenges.
            </li>
            <li className="p-4 rounded-lg">
              <strong>For Fans:</strong> Show your appreciation directly to the creators you love through tips, subscriptions, or sharing their content.
            </li>
            <li className="p-4 rounded-lg">
              <strong>Inclusive and Supportive Community:</strong> We foster a positive environment for everyone—no matter your background or experience.
            </li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
          <ul className="list-disc pl-6 space-y-4 text-white">
            <li><strong>Multiple Ways to Support:</strong> Choose how you want to show your appreciation, whether through one-time tips or monthly subscriptions.</li>
            <li><strong>Customizable Profiles:</strong> Creators can personalize their pages to reflect their unique style.</li>
            <li><strong>Seamless Payments:</strong> Get paid quickly and securely with various payment options.</li>
            <li><strong>Analytics Dashboard:</strong> Track your growth with real-time data on your community’s activity and donations.</li>
            <li><strong>Social Media Integrations:</strong> Easily link your FanBoost profile to your social media accounts for seamless promotion.</li>
          </ul>
        </section>

        {/* Join Us */}
        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Join Us</h2>
          <p className="text-lg leading-relaxed text-white mb-6">
            Ready to take your creativity to the next level? <strong>Sign up</strong> today and start building your community of supporters.
          </p>
          <a
            href="/signup"
            className="inline-block bg-blue-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up Now
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-16 text-center">
        <p>&copy; 2024 FanBoost. All Rights Reserved.</p>
      </footer>
    </div>

  )
}

export default page
export const metadata={
    title:"ABOUT-Get Me a Chai"
  }