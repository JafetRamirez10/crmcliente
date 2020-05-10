import React from 'react';
import { useQuery,gql } from '@apollo/client';
 
const OBTENER_USUARIO = gql`
	
	query obtenerUsuario{
		obtenerUsuario{
			id
			nombre

		}
	}
	
`;


 const Header=()=>{

 	const {data,loading,error} = useQuery(OBTENER_USUARIO);

 	if(loading) return null;

 	const {nombre} = data.obtenerUsuario;
 	

 	console.log(data);


 	return (
 		    <div className="flex justify-between mb-6">
 			<p className="mr-2">Hola: {nombre}</p>
 			<button type="button">
 				Cerrar Sesión
 			</button> 
 			</div>

 		);
 }


 export default Header;