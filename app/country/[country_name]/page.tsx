import { CountryDetails } from "@/types/types";

import Link from "next/link";

export default function CountryName({ params } :{ params: { country_name: string } }) {
 console.log("params:",params);//log params for debugging

   const CountryDetails: CountryDetails[] = [
    { name: "Pakistan", population:252278632, capital:"Islamabad" },
    { name: "India", population:1376139881, capital:"New Delhi" },
    { name: "England",population:14200000, capital:"london" },
    { name: "China", population:1439323776, capital:"Beijing" },
    { name: "Australia",population:26713205, capital:"Canberra" }
 ];

   //ensure params.country_name exists before trying to use it.
   const countryName = params.country_name?.toLowerCase();
   const country = countryName
       ?CountryDetails.find((c) =>c.name.toLowerCase()===countryName)
       :undefined;

   if (country) {
    return(
        <div className="text-center text-31 font-bold">
            <h1> name:{country.name}</h1>
            <h2> capital:{country.capital}</h2>
            <h2> population:{country.population}</h2>
             <Link href="/country" className="text-center bg-pink-600">Back To Country List</Link>

        </div>
    )
   }else{
    return(
        <div className="text-center text-3l font-bold;">
            <h1>  {params.country_name || "Country"} Not Found</h1>
            <Link href="/country" className="text center bg-purple-300">Back To Country List</Link>
        </div>
    )
   }
}