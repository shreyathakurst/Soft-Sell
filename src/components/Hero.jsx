const Hero = () => {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock the Value of Your Unused Software Licenses</h1>
            <p className="text-xl mb-8">Turn your idle software licenses into cash. Fast, secure, and hassle-free.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors text-center"
              >
                Get a Quote
              </a>
              <a
                href="#how-it-works"
                className="bg-transparent hover:bg-blue-700 border border-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Software License Marketplace"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
  