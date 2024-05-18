import { useState, useEffect } from 'react'
import BackArrow from "../assets/back-arrow.png"
import useCountries from './API';
import { useNavigate, useParams } from 'react-router-dom';



export const Detail = () => {
  
  let {paramsName} = useParams()
  const countries = useCountries()
  const [country, setCountry] = useState(null);
  const navigate = useNavigate()
  
  
  useEffect(() => {
      if (countries) {
        const foundCountry = countries?.find(country => country.name.common === paramsName);
        setCountry(foundCountry);
      }
   
  }, [paramsName, countries]);


  const [currencyName, setCurrencyName] = useState();
  const [languageName, setLanguageName] = useState();

  
  useEffect(() => {
      function getCurrencyName(data) {
        
       // Loop through each currency in the 'currencies' object
        for (let currencyCode in data?.currencies) {
            // Access the currency name for the current currency code
            const currencyName = data?.currencies[currencyCode].name;
            // You can return or do something with the currency name here
            setCurrencyName(currencyName)
            
        }
      }
      getCurrencyName(country);
  }, [country])


    
  useEffect(() => {
    function getLanguages(data) {
     
      // Initialize an empty array to store language names
      const languageNames = [];
      // Loop through each language in the 'languages' object
      for (let languageCode in data?.languages) {
          // Access the language name for the current language code
          const languageName = data?.languages[languageCode];
          // Add the language name to the array
          languageNames.push(languageName);
      }
      // Return the array of language names
      return languageNames;
    }

    const lang = getLanguages(country);
    setLanguageName(lang)
  },[country]);




  if (!country) { 
    return <div className='relative top-11 left-5'>Loading...</div>;
  }

  const back = () => {
    navigate("/")
  }

    
  return (
    

    <div className="px-6 md:px-11 pt-11 md:pt-14 pb-10">
      <button onClick={() => back()} className="Backarrow rounded items-center justify-center flex gap-3 w-[135px] h-[42px]">
          <img className="h-6 " style={{transform: "rotatey(161deg)"}} src={BackArrow} alt="back-arrow" /> 
          <span>Back</span>
      </button>

      <div className='lg:flex md:mt-20 gap-[150px] '>

        <div className='mt-16 md:mt-0 w-full max-w-[800px] '>
            <img className='w-full' src={country.flags.svg} alt='flags'  />
        </div>

        <div className='mt-10 md:mt-10'>
            <h3 className='text-xl md:text-3xl md:mb-7 font-bold mb-[20px]'>{country.name.common}</h3>
            <div className='md:flex gap-10 '>
              <div className='text-sm md:text-base flex flex-col gap-[10px] '>
                  <p><span className='font-semibold'>Native Name: </span> {country.name.official}</p>
                  <p><span className='font-semibold'>Population: </span>  {country.population.toLocaleString()} </p>
                  <p> <span  className='font-semibold'>Region: </span> {country.region} </p>
                  <p> <span  className='font-semibold'>Sub Region: </span> {country.subregion} </p>
                  <p><span  className='font-semibold'>Capital: </span> {country.capital} </p>
              </div>
              <div className='mt-7 md:text-base md:mt-0 text-sm flex flex-col gap-[8px] '>
                  <p><span  className='font-semibold'>Top Level Domain: </span> {country.tld} </p>
                  <p><span  className='font-semibold'>Currencies: </span> {currencyName} </p>
                  <p><span  className='font-semibold'>Languages: </span> {languageName} </p>
              </div>    
            </div>
        </div>
      </div>
    </div>

  )
}

