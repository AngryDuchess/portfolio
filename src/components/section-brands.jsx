"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { logosData } from "../lib/utils/misc.data";

export default function BrandSection() {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    setLogos(logosData);
  }, []);

  return (
    <ul className="list-disc flex gap-4 xl:gap-2 flex-wrap">
      {logos.map((logo) => (
        <li key={logo.id} className="flex gap-2 items-center">
          <span className="flex items-center border px-3 py-1 border-gray-300 dark:border-zinc-800 rounded-full gap-2">
            <Image
              className={logo.classnames}
              src={logo.logoUrl}
              width={32}
              height={32}
              alt={logo.alt}
            />
            {logo.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
