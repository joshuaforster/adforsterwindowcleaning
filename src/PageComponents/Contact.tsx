import React from 'react';


export default function Contact() {
  return (
      <div className="relative bg-white dark:bg-gray-900">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full lg:top-0"
            src="images/about.jpg"
            alt=""
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Let's work together</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.
              </p>
              <form action="#" method="POST" className="mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                      Name <span className="text-customRed">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset dark:focus:ring-customRed focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                      Email <span className="text-customRed">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset dark:focus:ring-customRed focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="postcode" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                      Postcode <span className="text-customRed">*</span>
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="postcode"
                        name="postcode"
                        type="postcode"
                        autoComplete="postcode"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset dark:focus:ring-customRed focus:ring-customRed sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-gray-900 dark:text-white">
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400 dark:text-gray-500">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset dark:focus:ring-customRed focus:ring-customRed sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        How can we help you? <span className="text-customRed">*</span>
                      </label>
                      <p id="message-description" className="text-gray-400 dark:text-gray-500">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset dark:focus:ring-customRed focus:ring-customRed sm:text-sm sm:leading-6"
                        defaultValue={''}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-start border-t border-gray-900/10 dark:border-gray-700 pt-8">
                  <button
                    type="submit"
                    className="rounded-md px-3.5 py-2.5 bg-customBlue text-center text-sm font-semibold text-white shadow-sm hover:bg-customRed dark:focus:ring-customRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customRed"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
