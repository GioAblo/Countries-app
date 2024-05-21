import { useContext, useState } from "react";
import { List } from "./List";
import arrow from "../assets/arrow.png"
import { AppContext } from "../App";
import useCountries from "./API";

export const Home = () => {
  const [drop, setDrop] = useState(false)
  const style = !drop ? {display: "none"} : {};
  const styleDrop = !drop ? {transform: "rotate(0deg)"} : {transform: "rotate(180deg)"};

  const {error, setSearch } = useContext(AppContext)
  const countries = useCountries()


 

  return (
    <>
        <main className='pb-8 pt-8 md:py-12'>

            <div className='Bot-cont mx-4 md:mx-16  md:flex md:justify-between' >

                <div className="group mb-9 rounded">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input placeholder="Search for a country..." type="text" className="input py-0 px-[60px] md:pr-[200px]" onChange={(e) => setSearch(e.target.value)} />
                </div>

                {/* <input type='text' placeholder='Search for a country...' onChange={(e) => setSearch(e.target.value)} /> */}
                <div onClick={() => setDrop(!drop)} className='Filter relative flex items-center justify-around  rounded-md cursor-pointer' >
                    <label>Filter by Region</label>
                    <img style={styleDrop}  className='Droparrow w-[12px] h-3  transition-all' src={arrow} alt='arrow' />
                    <div style={style} className='absolute transition-all  rounded-md' >
                        <button onClick={() => setSearch("americas")}>Americas</button>
                        <button onClick={() => setSearch("asia")}>Asia</button>
                        <button onClick={() => setSearch("africa")}>Africa</button>
                        <button onClick={() => setSearch("europe")}>Europe</button>
                        <button onClick={() => setSearch("oceania")}>Oceania</button>
                    </div>
                </div>

            </div>

            <div className='absolute top-[45vh] left-[30%] sm:left-[40%]'>
            {error && <p>{error}</p>}
            </div>

            <ul className='mt-10 grid justify-center md:flex md:mx-16 md:flex-wrap gap-10 mx-7 '>
                {countries.map((country, index) => (
                    <List key={index} data={country} />
                ))}
            </ul>
        </main>
    </>
  )
}
