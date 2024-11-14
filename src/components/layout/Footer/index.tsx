import {
  FacebookFilled,
  InstagramFilled,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
  PinterestFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Amex from "../../../assets/images/amex.png";
import ApplePay from "../../../assets/images/apple_pay.png";
import Bitcoin from "../../../assets/images/bitcoin.png";
import DinersClub from "../../../assets/images/diners_club.jpg";
import Discover from "../../../assets/images/discover.png";
import MasterCard from "../../../assets/images/mastercard.png";
import Visa from "../../../assets/images/visa.jpg";
import Logo from "../../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-teal-900 pb-5 pt-10 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-start space-x-4">
            <div className="flex items-center space-x-1 text-2xl font-bold">
              <Image
                src={Logo}
                alt="logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span>Lan Huong</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-white p-3">
                <PhoneOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">Hotline Order</p>
                <p className="text-lg font-bold">(877) 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-white p-4">
                <MailOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">Email us</p>
                <p className="text-lg font-bold">support@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-white p-3">
                <LinkOutlined className="text-2xl text-teal-900" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">Follow us</p>
                <div className="mt-1 flex space-x-2">
                  <button
                    type="button"
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    <FacebookFilled />
                  </button>
                  <button
                    type="button"
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    <TwitterCircleFilled />
                  </button>
                  <button
                    type="button"
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    <InstagramFilled />
                  </button>
                  <button
                    type="button"
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    <PinterestFilled />
                  </button>
                  <button
                    type="button"
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    <YoutubeFilled />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 border-t border-gray-600"></div>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-5">
          <div>
            <h5 className="mb-4 text-center font-semibold">DOG FOOD</h5>
            <ul className="text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Dry Dog Food
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Wet Dog Food
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Biscuits
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Chewy Treats
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Dental Treats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-center font-semibold">DOG SUPPLIES</h5>
            <ul className="text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Toys
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Carriers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Harnesses & Leads
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Flea & Tick
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Grooming & Shampoo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-center font-semibold">CAT FOOD</h5>
            <ul className="text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  Dry Dog Food
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Wet Dog Food
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cat Treats
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cat Food Topper
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-center font-semibold">USEFUL LINKS</h5>
            <ul className="text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  New Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-center font-semibold">OUR COMPANY</h5>
            <ul className="text-center">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-10 rounded-lg bg-red-600 p-5 text-center text-white">
          <h5 className="mb-2 text-lg font-semibold">Our Newsletter</h5>
          <p className="mb-4">
            Be the first to know about new collections and exclusive offers.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email..."
              className="rounded-l-lg px-4 py-2 text-gray-700"
            />
            <button className="rounded-r-lg bg-white px-4 py-2 text-red-600">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>

        {/* Bottom Section with Payment Methods and Legal Links */}
        <div className="flex w-full flex-col items-center border-t border-gray-600 pt-5 text-sm md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; 2024 <span className="font-semibold">Footpaw</span>. All
            rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="my-4 flex space-x-2">
            <Image src={MasterCard} alt="MasterCard" width={40} height={40} />
            <Image src={Visa} alt="Visa" width={40} height={40} />
            <Image src={Amex} alt="American Express" width={40} height={40} />
            <Image src={Discover} alt="Discover" width={40} height={40} />
            <Image src={DinersClub} alt="Diners Club" width={40} height={40} />
            <Image src={ApplePay} alt="Apple Pay" width={40} height={40} />
            <Image src={Bitcoin} alt="Bitcoin" width={40} height={40} />
          </div>
          <div className="mt-4 space-x-4 md:mt-0">
            <button type="button" className="hover:text-white">
              Privacy Policy
            </button>
            <button type="button" className="hover:text-white">
              Contact
            </button>
            <button type="button" className="hover:text-white">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
