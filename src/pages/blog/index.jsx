import React from 'react'
import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function index({data}) {
  return (
        <Layout 
                title="Blog | NextJs"
                description="Aqui va la descripcion del Blog">
        <h1>Lista de post</h1>
          {
            data.map(({id , body , title})=>(
            <div key={id}>
                <h3>
                  <Link href={`/blog/${id}`}>
                  {id} - {title}
                  </Link>
                </h3>
                <p>{body}</p>
            </div>
            
            ))
          }
        </Layout>

  )
}
//Obteniendo Data mediante una Api

 export async function getStaticProps(){
    try {
      const res=await fetch ('https://jsonplaceholder.typicode.com/posts')
      const data=await res.json()
        return{
          props:{
            data
          }
        }
    } catch (error) {
      
    }
 }