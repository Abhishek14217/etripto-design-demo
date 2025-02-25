import { StaticImageData } from "next/image";

export type IndGroupedPackagesData = {
  image: StaticImageData;
  place: string;
  price: string;
  redirect: string;
};

export type GroupedPackagesData = IndGroupedPackagesData[];
