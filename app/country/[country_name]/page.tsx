import { CountryDetails } from "@/types/types";
import { log } from "console";
import Link from "next/link";





export default function CountryName({params}:{params:{country_name:string} })
 {console.log("params:",params);//log params for debugging

   const CountryDetails: CountryDetails[]=[
    {name:"Pakistan", population:252278632, capital:"Islamabad"},
    {name:"India", population:1376139881, capital:"New Delhi"},
    {name:"China", population:1439323776, capital:"Beijing"},
    {name:"England",population:14200000, capital:"london"},
    {name:"Australia",population:26713205,capital:"Canberra"}
    
   ];
   const countryName=params.country_name?.toLowerCase();
   const country=countryName
   ?CountryDetails.find((c) =>c.name.toLowerCase()===countryName):undefined;
   if (country){
    return(
        <div>
            <h1>Country Name : {country.name}</h1>
            <h2>country population:{country.population}</h2>
            <h2>country capital:{country.capital}</h2>
            <Link href="/country" className="text-center bg-pink-600">Back To Country List</Link>

        </div>
    )
   }else{
    return(
        <div>
            <h1 className="text center bg-emerald-300"> {params.country_name || "country"} not found</h1>
            <Link href="/country" className="text center bg-purple-300">Back To Country List</Link>
        </div>
    )
   }
}