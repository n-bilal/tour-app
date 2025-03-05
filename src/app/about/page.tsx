"use client";

import Link from "next/link";
// import Layout from "../../components/Layout";
import RootLayout from "@/app/layout";
import {DarkThemeToggle} from "flowbite-react";
import {useEffect, useState} from "react";

// export const dynamic = "force-dynamic";

// Define the expected type of a user object
interface User {
  id: string; // 'id' is a string
  name: string; // 'name' is a string
}


const AboutPage = () => {

  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<User[]>([]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const callUserApi = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users"); // API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data : User[] = await response.json(); // Parse the response as JSON
      setUser(data); // Set user state with the fetched data

    } catch (error) {
      console.log("Error fetching user data", error);
    }
  }

  // useEffect(() => {
  //   console.log("About Page Mounted>>>>>>>>");
  // }, []);

  return (
      <>
        {/*<p>This is About Page</p>*/}
        <p>This is About Page: {counter}</p>
        <button onClick={incrementCounter} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Increment Counter
        </button>
        <button onClick={callUserApi} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Call Users API
        </button>
        {/* Render fetched user data in table */}
        <div className="mt-4">
          {user && user.length > 0 ? (
              <table className="table-auto border-collapse border border-gray-400 w-full">
                <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">ID</th>
                  <th className="border border-gray-400 px-4 py-2">Name</th>
                </tr>
                </thead>
                <tbody>
                {user.map((u:any) => (
                    <tr key={u.id}>
                      <td className="border border-gray-400 px-4 py-2">{u.id}</td>
                      <td className="border border-gray-400 px-4 py-2">{u.name}</td>
                    </tr>
                ))}
                </tbody>
              </table>
          ) : (
              <p>No users fetched yet.</p>
          )}
        </div>
      </>
  );
}

export default AboutPage;
