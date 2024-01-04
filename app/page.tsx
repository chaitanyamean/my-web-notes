"use client";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import React, { useState } from "react";
import { Button } from "flowbite-react";
import SelectDropdown from "./components/Select";

export default function Home() {
  const [language, changeLanguage] = useState("jsx");
  const [data, setData] = useState([
    {
      problemName: "Two Sum",
      code: `var twoSum = function(nums, target) {
    let map = new Map()

    for(let i =0; i< nums.length; i++) {
        let diff = target - nums[i]
        if(map.has(diff)) {
            return [i, map.get(diff)]
        } else {
            map.set(nums[i], i)
        }
    }  
};`,
      type: "DSA",
    },
    {
      problemName: `A memoize function is a higher-order function that takes in a function and returns a
      memoized version of it. The memoized function caches the results of expensive function
       calls and returns the cached result when it receives the same inputs again.`,
      code: `function memoize(fn) {
        let cache = {};
        return function (...args) {
          let key = JSON.stringify(args);
          if (cache[key]) {
            console.log(cache);
            return cache[key];
          } else {
            let result = fn.apply(this, args);
            cache[key] = result;
            console.log(cache);
            return result;
          }
        };
      }`,
      type: "JS",
    },
    {
      problemName: "Object 1",
      code: `// Define an object with some properties
      const myObject = {
        name: "John",
        age: 30,
        job: "Developer",
      };
      
      // Define a new property with certain attributes using defineProperty method
      Object.defineProperty(myObject, "salary", {
        value: 50000, // Value of the property
        writable: false, // Whether the property can be changed or not
        enumerable: false, // Whether the property should be included when iterating over the object's keys
      });
      
      // Define a prototype object with a property
      const myProto = {
        hobby: "Reading",
      };
      
      // Create a new object with the specified prototype object and properties
      const myObject2 = Object.create(myProto, {
        name: {
          value: "Alice", // Value of the property
          enumerable: true, // Whether the property should be included when iterating over the object's keys
        },
        age: {
          value: 25, // Value of the property
          enumerable: true, // Whether the property should be included when iterating over the object's keys
        },
      });
      
      // Prevent any new properties from being added to an object and marks all existing properties as non-configurable
      Object.seal(myObject2);
      
      // Merge the properties of two or more objects into a target object
      const mergedObject = Object.assign({}, myObject, myObject2);
      
      // Returns an array of a given object's own enumerable property names
      console.log(Object.keys(myObject)); // Output: ["name", "age", "job"]
      
      // Returns an array of a given object's own enumerable property values
      console.log(Object.values(myObject)); // Output: ["John", 30, "Developer"]
      
      // Returns an array of a given object's own enumerable property [key, value] pairs
      console.log(Object.entries(myObject)); // Output: [["name", "John"], ["age", 30], ["job", "Developer"]]
      
      // Returns an array of all properties (enumerable or not) found directly upon a given object
      console.log(Object.getOwnPropertyNames(myObject)); // Output: ["name", "age", "job", "salary"]
      
      // Returns an object containing all own property descriptors of a given object
      console.log(Object.getOwnPropertyDescriptors(myObject));
      /* Output:
        {
          name: {value: "John", writable: true, enumerable: true, configurable: true},
          age: {value: 30, writable: true, enumerable: true, configurable: true},
          job: {value: "Developer", writable: true, enumerable: true, configurable: true},
          salary: {value: 50000, writable: false, enumerable: false, configurable: false}
        }
        */
      
      // Prevents any changes to an object and its properties
      Object.freeze(myObject);
      
      // Attempt to change a frozen property (no change made)
      myObject.name = "Peter";
      
      // Access the frozen object (no changes made)
      console.log(myObject.name); // Output: "John"
      
      // Display the objects
      console.log(myObject); // Output: {name: "John", age: 30, job: "Developer", salary: 50000}
      console.log(myObject2); // Output: {name: "Alice", age: 25, hobby: "Reading"}
      console.log(mergedObject);
      /* Output:
        {
          name: "Alice",
          age: 25,
          job: "Developer",
          salary: 50000,
          hobby: "Reading"
        }
        */
      `,
      type: "JS",
    },
    {
      problemName: "Closure",
      code: `function counter() {
        let count = 0;
      
        // This is the inner function that increments and logs the private variable
        function innerFunc() {
          return ++count; // Holds the reference of count even if the context is lost
        }
      
        return innerFunc;
      }
      
      let countIncrement = counter();
      
      //closure in settimeout
      let message = "Hello world";
      setTimeout(() => {
        console.log(message);
      }, 1000);
      
      //Closures with loops with VAR and IIFE
      for (var i = 1; i < 6; i++) {
        (function (j) {
          setTimeout(() => {
            console.log(j);
          }, 1000 * j);
        })(i);
      }
      
      // with let
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          console.log("let", i);
        }, 1000 * i);
      }
      
      //Partial Applications
      function outer1(a) {
        return function (b) {
          return a * b;
        };
      }
      
      // partial application with multiple ()
      let sum = function (a) {
        return function (b) {
          if (b) {
            return sum(a + b);
          } else {
            return a;
          }
        };
      };
      
      console.log(sum(1)(2)(4)());
      `,
      type: "JS",
    },
  ]);
  const [type, setType] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SelectDropdown
        title="Flavours"
        options={[
          { id: 0, type: "DSA" },
          { id: 1, type: "JS" },
        ]}
        keys={["id", "type"]}
        value={type}
        handleOnChange={(e: string) => {
          console.log(e);
          setType(e);
          let dataArr = data.filter((item) => item.type === e);
          setData(dataArr);
        }}
      />

      {data &&
        data.map((item, idx) => (
          <div key={idx} className="w-5/6 mt-4">
            <p>{item.problemName}</p>
            <CopyBlock
              language="js"
              text={item.code}
              codeBlock
              theme={dracula}
              showLineNumbers={true}
              key={idx}
            />
          </div>
        ))}
    </main>
  );
}
