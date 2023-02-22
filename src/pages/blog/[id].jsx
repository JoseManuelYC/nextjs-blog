import Layout from '../../../components/Layout';
import React from 'react'

export default function primerPost({data}) {
  return (
    <Layout>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
    </Layout>
  )
}

//Toma los id y genera las paginas del blog de manera dinamica
export async function getStaticPaths(){
  try {
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await res.json();
    const paths=data.map(({id})=>({params:{id:`${id}`}}))

    return{
      paths,
      fallback:false
    }
  } catch (error) {
    console.log(error)
  }
}

//Se debe volver a usar el get props para pintar los articles
export async function getStaticProps({params}){
  try {
    const res=await fetch ('https://jsonplaceholder.typicode.com/posts/'+ params.id)
    const data=await res.json()
      return{
        props:{
          data
        }
      }
  } catch (error) {
    console.log(error)
  }
}
