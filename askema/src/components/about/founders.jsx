import React from 'react'

export default function Founders() {
  return (
    <div className='col text-center text-primary'>
      <h3 className='text-primary py-5'>Co-Founders</h3>

      <div className='col'>
        
        <div className="founder1 row ">

            <div className="founder1-text p-2 " style={{maxWidth: "450px"}}>
            <h2 className='my-3'>Bahailu Bekele</h2> 
            <p className='text-white'>Behailu Seboka <br /> Founder and CEO <br /> አስኬማ ሁሌም በስራ ላይ </p>
            </div>
            <div className="founder1-image blur-md">
                <img src="https://i.ibb.co/5K7GJ6M/Group-2.png" height={"500px"} width={"400px"} alt="" />
            </div>


        </div>

        <div className="founder2 row my-4">

            <div className="founder2-image blur-md">
                <img src="https://i.ibb.co/5K7GJ6M/Group-2.png" height={"500px"} width={"400px"} alt="" />

            </div>
            <div className="founder2-text p-2" style={{maxWidth: "450px"}}>
                <h2 className='my-3'>Yohannes Girma</h2> 
                <p className='text-white'>Meet the team behind Askema Engineering. Machanical Engineering </p>
            </div>
            </div>
        </div>


    </div>
  )
}
