import { useEffect, useRef, useState } from 'react';
import { Logos3 } from "@/components/blocks/logos3";

const partners = [
  {
    id: "company-1",
    description: "Company 1",
    image: "https://ik.imagekit.io/sharfi/Logo%20S%20Letter(traced).png?updatedAt=1739121550481",
    className: "h-12 w-auto"
  },
  {
    id: "company-2",
    description: "Company 2",
    image: "https://ik.imagekit.io/sharfi/sharfi_grey.png?updatedAt=1739120343098",
    className: "h-12 w-auto"
  },
  {
    id: "company-3",
    description: "Company 3",
    image: "https://via.placeholder.com/120x60?text=Partner+3",
    className: "h-12 w-auto"
  },
  {
    id: "company-4",
    description: "Company 4",
    image: "https://via.placeholder.com/120x60?text=Partner+4",
    className: "h-12 w-auto"
  },
  {
    id: "company-5",
    description: "Company 5",
    image: "https://via.placeholder.com/120x60?text=Partner+5",
    className: "h-12 w-auto"
  }
];

const PartnersSection = () => {
  return <Logos3 logos={partners} />;
};

export default PartnersSection;
