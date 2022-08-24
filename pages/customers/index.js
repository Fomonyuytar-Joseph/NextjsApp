import Link from 'next/link';
import React from 'react'
import styles from '../../styles/Customers.module.css'

export const getStaticProps = async ()=>{

     const res = await fetch('https://jsonplaceholder.typicode.com/users');
     const data= await res.json()

     return {
      props:{customers:data}
     }
}



function Customers({customers}) {
  return (
    <div>
        <h1>All Customers</h1>
        {
          customers.map((customer)=>(
            <Link href={'/customers/' + customer.id} key={customer.id}>
              <a className={styles.single} >
                <h3>{customer.name}</h3>
              </a>

            </Link>
          ))
        }


    </div>
  )
}

export default Customers