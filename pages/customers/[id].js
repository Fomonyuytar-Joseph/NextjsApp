import React from 'react'

export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await res.json()

    const paths = data.map(user=> { //getting the numeber of pages we need
        return {
            params:{ id: user.id.toString()}
        }
    })

    return{
        paths,  //tells next how many html pages to creeate for this
        fallback:false
    } 

}

export const getStaticProps = async (context)=>{
    const id= context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return{
        props:{customer: data}
    }
}

function Details({customer}) {

  return (
    <div >
        <h1>{customer.name}</h1>
        <p>{customer.email}</p>
        <p>{customer.website}</p>
        <p>{customer.address.city}</p>
    </div>
  )
}

export default Details