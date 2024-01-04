"use client";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import React, { useState } from "react";

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
    },
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
    },
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
    },
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
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {data &&
        data.map((item, idx) => (
          <div key={idx} className="w-5/6">
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
