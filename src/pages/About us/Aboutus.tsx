// src/pages/AboutUs/AboutUs.jsx
import teamImage1 from "../../assets/about/aboutimg1.png"; // Adjust the path to your image
import teamImage2 from "../../assets/about/aboutimg2.png"; // Adjust the path to your image
import teamImage3 from "../../assets/about/wahid.png"; // Adjust the path to your image
import missionImage from "../../assets/SliderImg/sliderimg1.jpg"; // Adjust the path to your image
import { FaShippingFast, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4 mt-10">
        {/* Mission Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Mission</h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={missionImage}
                alt="Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-6">
              <h2 className="text-2xl font-semibold mb-4">
                Empowering Adventures
              </h2>
              <p className="text-lg leading-relaxed">
                At Campers Shop BD, we are dedicated to providing top-quality
                camping gear and accessories to make your adventures memorable.
                Our mission is to empower outdoor enthusiasts with the best
                equipment, ensuring you have everything you need to explore the
                great outdoors with confidence and comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-100 text-gray-800 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
            <div className="flex flex-col lg:flex-row items-start lg:items-center mb-12">
              {/* Contact Details */}
              <div className="lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-4 text-blue-500 text-lg">📞</span>
                    <a
                      href="tel:+18005678900"
                      className="text-lg hover:underline"
                    >
                      +880181-4290-528
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 text-green-500 text-lg">📧</span>
                    <a
                      href="mailto:support@campershopbd.com"
                      className="text-lg hover:underline"
                    >
                      support@campershopbd.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-4 text-red-500 text-lg">🏠</span>
                    <span className="text-lg">
                      489 5th Avenue, Dhanmondi, BD
                    </span>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="w-full h-80 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.64157380673475!2d90.4266158127796!3d23.808899499899198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c740f299e919%3A0xfe009ba75e6b84f8!2z4KaV4KeD4Ka34KeN4Kaj4Kaa4KeC4Kah4Ka84Ka-LTM!5e0!3m2!1sbn!2sbd!4v1724481401244!5m2!1sbn!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className=" text-black-900 py-6">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                className="text-black-500 hover:text-blue-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-black-500 hover:text-blue-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-black-500 hover:text-pink-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                className="text-black-500 hover:text-red-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </section>

        <hr />

        {/* Feature Cards Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Features</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free and Fast Delivery */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4 text-blue-500 ">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Free and Fast Delivery
              </h3>
              <p className="text-gray-600">
                Enjoy free and fast delivery on all orders. We ensure that your
                products reach you quickly and efficiently.
              </p>
            </div>

            {/* 24/7 Customer Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4 text-green-500">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                24/7 Customer Service
              </h3>
              <p className="text-gray-600">
                Our customer service team is available 24/7 to assist you with
                any inquiries or issues. We are here to help whenever you need
                us.
              </p>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="text-4xl mb-4 text-red-500">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Money Back Guarantee
              </h3>
              <p className="text-gray-600">
                We offer a money-back guarantee on all purchases. If you're not
                satisfied with your product, we'll refund your money.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Meet Our Team</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <img
                  src={teamImage1}
                  alt="Team Member"
                  className="w-50 h-50 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <img
                  src={teamImage3}
                  alt="Team Member"
                  className="w-50 h-50 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">MD WAHID</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <img
                  src={teamImage2}
                  alt="Team Member"
                  className="w-50 h-50 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">David Doe</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>
            {/* Add more team members here */}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h1 className="text-4xl font-bold mb-6 text-center">Our Values</h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">
                Customer Satisfaction
              </h2>
              <p className="text-lg leading-relaxed">
                We prioritize our customers and strive to exceed their
                expectations with exceptional service and high-quality products.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-6">
              <h2 className="text-2xl font-semibold mb-4">Sustainability</h2>
              <p className="text-lg leading-relaxed">
                We are committed to environmentally friendly practices and
                sustainable sourcing to protect our planet for future
                generations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
