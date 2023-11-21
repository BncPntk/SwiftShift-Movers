import {
  FaFacebookSquare,
  FaPhoneSquareAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-100 mx-auto grid gap-4 bg-violet-900 px-4 py-8 lg:grid-cols-3 lg:px-16 2xl:px-96"
    >
      <div className="">
        <h1>
          {" "}
          <img
            src={require("../assets/icon_and_logo/ssm_logo_white.png")}
            alt="SwiftShift Movers"
            className="mx-auto w-36 px-4 pt-4 md:mx-0"
          />
        </h1>
        <p className="py-4 text-xl text-white">
          Your trusted partner for stress-free relocations. From small
          apartments to big homes, we provide tailored moving solutions for a
          smooth transition.
        </p>
        <div className="mb-8 mt-2 flex justify-around hover:cursor-pointer lg:justify-normal">
          <FaFacebookSquare
            size={34}
            fill="white"
            className="mr-4 hover:fill-violet-300"
          />
          <FaInstagram
            size={34}
            fill="white"
            className="hover:fill-violet-300"
          />
        </div>
        <div className="pl:px-4 text-xl text-white">
          <div className="flex items-center pb-2 hover:cursor-pointer hover:text-violet-300">
            <FaPhoneSquareAlt className="" size={32} fill="white" />
            <p className="px-4">(+36) 10-000-000</p>
          </div>
          <div className="flex items-center hover:cursor-pointer hover:text-violet-300">
            <FaEnvelope className="" size={32} fill="white" />
            <p className="px-4">swiftshift@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex text-white lg:ml-auto">
        <div>
          <h3 className="py-2 text-3xl font-bold uppercase lg:py-4">Company</h3>
          <ul>
            <li className="py-1 text-lg hover:cursor-pointer hover:text-violet-300">
              Blog
            </li>
            <li className="py-1 text-lg hover:cursor-pointer hover:text-violet-300">
              How we work
            </li>
            <li className="py-1 text-lg hover:cursor-pointer hover:text-violet-300">
              Marketing
            </li>
            <li className="py-1 text-lg hover:cursor-pointer hover:text-violet-300">
              Analytics
            </li>
            <li className="py-1 text-lg hover:cursor-pointer hover:text-violet-300">
              Careers
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white lg:ml-auto">
        <div>
          <h3 className="py-2 text-3xl font-bold uppercase lg:py-4">
            Working Hours
          </h3>
          <ul>
            <li className="py-1 text-lg">Mon - Fri: 7:00AM - 22:00PM</li>
            <li className="py-1 text-lg">Sat: 10:00AM - 22:00PM</li>
            <li className="py-1 text-lg">Sun: Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
