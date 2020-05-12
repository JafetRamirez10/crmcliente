import React from 'react';
import { useQuery,gql } from '@apollo/client';
import  { useRouter } from 'next/router';

const OBTENER_USUARIO = gql`
	
	query obtenerUsuario{
		obtenerUsuario{
			id
			nombre

		}
	}
	
`;


 const Header=()=>{

   const router = useRouter();	
 	const {data,loading,error} = useQuery(OBTENER_USUARIO);

 	if(loading) return null;

 	if(!data){

 		return router.push('/login');
 	}

 	const {nombre} = data.obtenerUsuario;
 	
 	const CerrarSesion=()=>{
 		localStorage.removeItem('token');
 		router.push('/');

 	}
 	console.log(data);


 	return (
 		    <div className="flex justify-between mb-6">
 			<p className="mr-2">Hola: {nombre}</p>
 			<button 
 			onClick={()=>CerrarSesion() }
 			type="button"
			className="bg-blue-800 w-full sm:auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md"

 			>
 				Cerrar Sesión
 			</button> 
 			</div>

 		);
 }


 export default Header;