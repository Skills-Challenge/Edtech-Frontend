import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-primary">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Fill out the form, and we'll get back to you as soon as possible.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-primary">Our Location</h3>
              <p className="text-gray-600">1234 Your Street, City, Country</p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <form className="space-y-8 bg-white p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button type="submit" className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
