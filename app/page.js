"use client"; // This directive indicates that we're using this file in a client-side environment.

import React, { useState, useEffect } from "react"; // Importing necessary modules from React library.

export default function Home() {
  // Defining a default React component named Home.
  const [randomDog, setRandomDog] = useState(""); // Initializing state for a random dog image URL.
  const [breedList, setBreeedList] = useState([]); // Initializing state for a list of dog breeds.

  async function fetchDog() {
    // Defining an asynchronous function to fetch a random dog image.
    const response = await fetch("https://dog.ceo/api/breeds/image/random"); // Fetching data from the Dog CEO API.
    const data = await response.json(); // Parsing the response data as JSON.
    return data.message; // Returning the URL of the random dog image.
  }

  async function loadRandomDog() {
    // Defining an asynchronous function to load a random dog image.
    const dog = await fetchDog(); // Fetching a random dog image.
    setRandomDog(dog); // Setting the state with the URL of the fetched random dog image.
  }

  async function fetchBreedList() {
    // Defining an asynchronous function to fetch a list of dog breeds.
    const response = await fetch("https://dog.ceo/api/breeds/list/all"); // Fetching data from the Dog CEO API.
    const data = await response.json(); // Parsing the response data as JSON.
    return data.message; // Returning the list of dog breeds.
  }

  async function loadBreedList() {
    // Defining an asynchronous function to load the list of dog breeds.
    const blist = await fetchBreedList(); // Fetching the list of dog breeds.
    setBreeedList(blist); // Setting the state with the fetched list of dog breeds.
  }

  useEffect(() => {
    // Using the useEffect hook to perform side effects in the component.
    loadRandomDog(); // Invoking the function to load a random dog image.
    loadBreedList(); // Invoking the function to load the list of dog breeds.
  }, []); // Passing an empty dependency array to execute the effect only once after the initial render.

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {" "}
      {/* Main container for the component */}
      <h1>Dogs</h1> {/* Heading displaying "Dogs" */}
      <div className="avatar">
        {/* Container for the random dog image */}
        <div className="w-80 rounded-full">
          <img src={randomDog}></img> {/* Displaying the random dog image */}
        </div>
      </div>
      <div>
        {" "}
        {/* Container for the breed selection dropdown */}
        <select name="breed">
          {" "}
          {/* Dropdown menu for selecting dog breeds */}
          {breedList &&
            Object.keys(breedList).map(
              (
                breed,
                index // Mapping over the list of dog breeds to create options
              ) => (
                <option key={index} value={breed}>
                  {breed}
                </option> // Each option represents a dog breed choice, with its value and display text being set to the breed name.
              )
            )}
        </select>
      </div>
    </main>
  );
}
