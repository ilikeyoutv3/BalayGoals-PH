import React from 'react';
import Head from 'next/head';
import { Button } from '/components/ui/button';
import { Card, CardContent } from '/components/ui/card';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-sky-50 to-indigo-100 text-gray-800">
      <Head>
        <title>BalayGoals PH | Find Your Dream Home</title>
        <meta name="description" content="BalayGoals PH is your gateway to affordable and premium real estate properties across the Philippines." />
        <meta name="keywords" content="real estate Philippines, BalayGoals, buy house PH, condo, property for sale PH, rent house" />
        <meta name="author" content="BalayGoals PH" />
      </Head>

      <section className="flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className="text-indigo-600">BalayGoals PH</span></h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">Your modern and trusted real estate partner in the Philippines. Discover your dream home today.</p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-3 rounded-xl shadow-lg">Browse Listings</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        {['Metro Manila', 'Cebu City', 'Davao'].map((location) => (
          <Card key={location} className="hover:shadow-2xl transition duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Homes in {location}</h2>
              <p className="text-gray-600">Explore beautiful and affordable properties in {location} with prime amenities and peaceful communities.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center py-10 bg-white">
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

      <footer className="bg-indigo-600 text-white text-center py-6">
        <p>&copy; 2025 BalayGoals PH. All rights reserved. | <span className="text-sm">SEO by BalayTech</span></p>
      </footer>
    </main>
  );
}
