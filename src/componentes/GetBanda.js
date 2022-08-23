import React, { useEffect, useState } from "react";

export const GetBanda = () => {

    var banda = localStorage.getItem('banda');
    
    banda = JSON.parse(banda);

    return (
        <tr>
            <td>{banda.id}</td>
            <td>{banda.nombre}</td>
            <td>{banda.actividad}</td>
            <td>{banda.genero}</td>
            <td>{banda.pais}</td>
            <td>{banda.integrantes + " "}</td>
        </tr>
    )
};