import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const location = useLocation();
  
  return (
    <Disclosure as="nav" className="bg-white shadow-md fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex-shrink-0 flex items-center group"
                >
                  <span className="text-2xl md:text-3xl font-serif font-bold text-primary-600 group-hover:text-primary-500 transition-colors">
                    SHREE VINAYAK
                  </span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center">
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`py-2 px-3 rounded-md text-base md:text-lg font-medium transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-primary-600 hover:bg-neutral-100 transition-colors focus:outline-none">
                  {open ? (
                    <FaTimes className="block h-6 w-6" />
                  ) : (
                    <FaBars className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-white border-t border-neutral-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}