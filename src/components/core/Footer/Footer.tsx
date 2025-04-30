import { NavbarLogo } from "@/components/ui/resizable-navbar";
import {  Mail } from "lucide-react";
import Link from 'next/link'

import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white rounded-t-3xl px-8 py-12 md:flex md:justify-between md:items-start">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <div>
          <NavbarLogo />
        </div>
        <p className="text-sm max-w-md">
          As India’s leading Influencer Marketing Agency, we operate a vast
          network across 11 states, partnering with over 100 top brands to
          deliver content-driven influencer strategies that elevate brand
          presence across major social media platforms.
        </p>
        <div className="flex space-x-4">
          <Link href='https://www.instagram.com/the_real_technologies?igsh=MXFtanloYnRjaGl2eA==' target='_blank'>
          <Image
            src="/assets/instagram.png"
            alt="Facebook"
            className="h-8 w-8"
            width={40}
            height={40}
          />
          </Link>  
          <Image
            src="/assets/facebook.png"
            alt="Instagram"
            className="h-8 w-8"
            width={40}
            height={40}
          />
          <Image
            src="/assets/twitter.png"
            alt="X"
            className="h-8 w-8"
            width={40}
            height={40}
          />
          <Image
            src="/assets/youtube.png"
            alt="YouTube"
            className="h-8 w-8"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 space-y-4">
        <h2 className="text-2xl font-semibold">Marketing Solutions</h2>
        <ul className="space-y-2 text-md">
          <li>PR Marketing</li>
          <li>Influencer Marketing</li>
          <li>Meme Marketing</li>
          <li>Website Development</li>
          <li>Movie Promotion</li>
        </ul>
        <div className="flex items-center space-x-3 pt-4">
          <Mail />
          <span>info@therealtechnologies.com</span>
        </div>
      </div>
    </div>
  );
}
