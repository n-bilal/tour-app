"use client";

import {DarkThemeToggle, Dropdown, DropdownItem} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import {useState} from "react";

//const Logo = () => (
const Home = () => {

  const [selectedMonth, setSelectedMonth] = useState("Select month"); // Default label

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month); // Update the label when a month is selected
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const [selectedDestination, setSelectedDestination] = useState("Select destination"); // Default label

  const handleDestinationSelect = (destination: string) => {
    setSelectedDestination(destination); // Update the label when a destination is selected
  };

  const destinations = [
    "Pakistan", "Indonesia", "Bangladesh", "Saudi Arabia", "Turkey", "Iran",
    "Egypt", "Nigeria", "Algeria", "Morocco", "Iraq", "Sudan",
    "Uzbekistan", "Malaysia", "India"
  ];

  const cardDestinations = [
    {
      name: "Pakistan",
      image: {
        url: "/images/pakistan.jpg",
        alt: "Pakistan Image"
      }
    },
    {
      name: "Indonesia",
      image: {
        url: "/images/indonesia.jpg",
        alt: "Indonesia Image"
      }
    },
    {
      name: "Bangladesh",
      image: {
        url: "/images/bangladesh.jpg",
        alt: "Bangladesh Image"
      }
    },
    {
      name: "Saudi Arabia",
      image: {
        url: "/images/saudi-arabia.jpg",
        alt: "Saudi Arabia Image"
      }
    },
    {
      name: "Turkey",
      image: {
        url: "/images/turkey.jpg",
        alt: "Turkey Image"
      }
    },
    {
      name: "Iran",
      image: {
        url: "/images/iran.jpg",
        alt: "Iran Image"
      }
    },
    {
      name: "Egypt",
      image: {
        url: "/images/egypt.jpg",
        alt: "Egypt Image"
      }
    },
    {
      name: "Nigeria",
      image: {
        url: "/images/nigeria.jpg",
        alt: "Nigeria Image"
      }
    }
  ];

  return (
      <>
      <div className="bg-[url('/home-hero.jpg')] h-1/2 bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mt-10">Welcome to Our Website</h1>
        {/*//<div className="inset-0 bg-black bg-opacity-30 flex justify-center items-center">*/}
        <Card className=" bg-white w-3/5 bg-opacity-90 flex flex-row md:flex-col mt-20 mb-10 p-4">
          <form className="flex flex-row gap-4">
            <div>
              <Dropdown id="month" label={selectedMonth} inline>
                {months.map((month) => (
                    <DropdownItem key={month} onClick={() => handleMonthSelect(month)}>
                      {month}
                    </DropdownItem>
                ))}
              </Dropdown>
            </div>
            <div>
              <Dropdown id="destination" label={selectedDestination} inline>
                {destinations.map((destination) => (
                    <DropdownItem key={destination} onClick={() => handleDestinationSelect(destination)}>
                      {destination}
                    </DropdownItem>
                ))}
              </Dropdown>
            </div>
            <Button type="submit">Search Tours</Button>
          </form>
        </Card>
        {/*<h1 className="text-white text-4xl font-bold">Welcome to Our Website</h1>*/}
        {/*<h1 className="text-white text-4xl font-bold">Welcome to Our Website</h1>*/}
      </div>
      <div className="container mx-auto mt-12 px-4">
        <div className="grid grid-cols-4 gap-6">
          {cardDestinations.map((country) => (
              <div
                  key={country.name}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                    src={country.image.url}
                    alt={country.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-xl font-bold text-gray-900">
                    {country.name}
                  </h5>
                </div>
              </div>
          ))}
        </div>
      </div>
      </>
  );
}

export default Home;