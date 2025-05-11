const Testimonials = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "IT Director",
        company: "TechGrowth Inc.",
        image: "/placeholder.svg?height=80&width=80",
        quote:
          "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The process was smooth, and we received payment faster than expected.",
      },
      {
        name: "Michael Chen",
        role: "CTO",
        company: "Innovate Solutions",
        image: "/placeholder.svg?height=80&width=80",
        quote:
          "After downsizing our team, we had several premium software licenses sitting idle. SoftSell helped us convert these assets into capital that we could reinvest in our business.",
      },
    ]
  
    return (
      <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
  