import Card from "./Card";

export default function Cards() {
  return (
    <div className="w-full bg-gray-900" style={{ paddingLeft: "5px" }}>
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        {/* First Card */}
        <Card width="basis-full md:basis-1/3" start={false} para={true}>
          {/* Additional Content for First Card */}
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Empowering Your Digital Transformation
            </h2>
            <p className="text-sm text-gray-400">
              At the forefront of innovation, we specialize in crafting cutting-edge solutions tailored to your business needs. From ideation to execution, we ensure every step of your digital journey is seamless and impactful.
            </p>

            <h2 className="text-xl font-semibold text-white">Why Choose Us:</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>Industry-Leading Expertise</li>
              <li>Proven Track Record of Success</li>
              <li>Focus on Innovation and Excellence</li>
              <li>Dedicated to Client Satisfaction</li>
            </ul>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <button className="py-3 px-6 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="py-3 px-6 border border-white text-white rounded-full hover:bg-white hover:text-zinc-800 transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>

          {/* New Footer Section for First Card */}
          <div className="mt-6">
            <h3 className="text-lg text-white font-semibold">
              Your Success is Our Priority
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Collaborate with us to unlock the true potential of technology and drive unprecedented growth. Together, we shape the future.
            </p>
          </div>
        </Card>

        {/* Second Card */}
        <Card
          width="basis-full md:basis-2/3"
          start={true}
          para={false}
          hover="hover:bg-violet-700"
        >
          {/* Additional Content for Second Card */}
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Transforming Ideas into Reality
            </h2>
            <p className="text-sm text-gray-400">
              Our mission is to empower businesses with state-of-the-art
              technology that drives growth, fosters innovation, and creates
              sustainable impact. Partner with us to redefine the future.
            </p>

            <h2 className="text-xl font-bold text-white">Our Core Principles:</h2>
            <ul className="list-disc list-inside text-gray-400">
              <li>Customer-Centric Design and Innovation</li>
              <li>End-to-End Scalable Solutions</li>
              <li>Commitment to Sustainability and Ethics</li>
              <li>Unmatched Support and Expertise</li>
            </ul>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <button className="py-3 px-6 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-all duration-300">
                Explore Our Solutions
              </button>
              <button className="py-3 px-6 border border-white text-white rounded-full hover:bg-white hover:text-zinc-800 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
