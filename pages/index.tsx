import React from 'react';
import Head from 'next/head';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-slate-200 text-gray-800">
      <Head>
        <title>BalayGoals PH | Find Your Dream Home</title>
        <meta name="description" content="BalayGoals PH is your gateway to affordable and premium real estate properties across the Philippines." />
        <meta name="keywords" content="real estate Philippines, BalayGoals, buy house PH, condo, property for sale PH, rent house" />
        <meta name="author" content="BalayGoals PH" />
      </Head>

      {/* 🎯 Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="/images/hero-real-estate.jpg"
          alt="BalayGoals Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="z-20 p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to <span className="text-indigo-300">BalayGoals PH</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 drop-shadow-md">
            Your trusted partner in real estate. Find your dream home today.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-3 rounded-xl shadow-lg">
            Browse Listings
          </Button>
        </div>
      </section>

      {/* 🏙️ Cities Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gradient-to-r from-indigo-100 via-sky-100 to-white">
        {['Metro Manila', 'Cebu City', 'Davao'].map((location) => (
          <Card
            key={location}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition"
          >
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Homes in {location}</h2>
              <p className="text-gray-700">Explore beautiful, affordable homes in {location} with modern amenities and great communities.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* 🌟 Featured Condo Project */}
      <section className="py-16 bg-gradient-to-br from-indigo-100 via-sky-200 to-blue-100 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10">
            🎉 Inviting Investors! – Preselling Stage 🎉
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/4.jpeg"
              alt="Downtowne Premier Residences"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full"
            />

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">Downtowne Premier Residences</h3>
              <p className="text-gray-700">📍 V. Mapa Street, Bajada, Davao City</p>
              <p className="text-gray-600">Own a unit in the newest condo development in the heart of Davao!</p>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>₱9,000/month</strong> equity</li>
                <li><strong>₱10,000.00</strong> reservation fee</li>
                <li>Smart Home Ready – Control lights & appliances remotely</li>
                <li>Prime Location:
                  <ul className="list-disc list-inside ml-4">
                    <li>Beside Davao Christian High School</li>
                    <li>Behind LANDERS Superstore</li>
                    <li>Near Gaisano Mall Bajada & Abreeza Mall</li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-semibold text-indigo-700">📞 0965-330-1739</p>
                <p className="text-gray-700">📧 <a href="mailto:dejosnuria@gmail.com" className="underline">dejosnuria@gmail.com</a></p>
              </div>
              <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">Reserve Now</Button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/images/downtowne-interior.jpg"
              alt="Unit Interior"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full"
            />
            <Image
              src="/images/downtowne-location-map.jpg"
              alt="Location Map"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* 🌐 Social Section */}
      <section className="text-center py-10 bg-slate-100">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Connect With Us</h3>
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com/BalayGoalsPH" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-8 h-8 text-indigo-600 hover:text-indigo-800" />
          </a>
          <a href="https://instagram.com/BalayGoalsPH" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-8 h-8 text-pink-600 hover:text-pink-800" />
          </a>
          <a href="https://twitter.com/BalayGoalsPH" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-8 h-8 text-blue-400 hover:text-blue-600" />
          </a>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="bg-indigo-600 text-white text-center py-6">
        <p>&copy; 2025 BalayGoals PH. All rights reserved. | <span className="text-sm">SEO by BalayTech</span></p>
      </footer>
    </main>
  );
}
