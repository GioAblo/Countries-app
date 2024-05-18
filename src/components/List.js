import { useNavigate } from "react-router-dom";
import "../App.css"



export const List = (props) => {
  const {name, flags, population, region, capital} = props.data;

  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate(`/detail/${name.common}`)
  }


  return (
    <li onClick={() => handleClick()} >

            <div className='List rounded text-lg max-w-80 cursor-pointer '>
              <div className='Img w-[320px]  h-[200px]'>
                <img className='w-full h-full object-cover' src={flags.svg} alt='flags'  />
              </div>
              <div className='pt-5 pl-5 pb-9'>
                <h3 className='text-md font-bold mb-[13px]'>{name.common}</h3>
                <div className='text-sm flex flex-col gap-[5px] '>
                  <p><span className='font-semibold'>Population: </span>  {population.toLocaleString()} </p>
                  <p> <span  className='font-semibold'>Region: </span> {region} </p>
                  <p><span  className='font-semibold'>Capital: </span> {capital} </p>
                </div>
              </div>
            </div>

         
    </li>
  )
}
