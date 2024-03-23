import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

export const Notas = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    
    const calcularNota = () => {
        if(n1 === '' || n2 === '' || n3 === '') {
            Swal.fire({
                title: "Cuidado!",
                text: "Ingrese todas las notas en los campos",
                icon: "info"
            });
            return;
        }

        const nF = parseInt(n1)+parseInt(n2)+parseInt(n3)
        let message = document.getElementById('card');

        if (nF >= 0 && nF < 60) {
            message.innerHTML = '<p>Usted está Reprobado</p>';
        } else if (nF >= 60 && nF < 80) {
            message.innerHTML = '<p>Ustes es Bueno</p>';
        } else if (nF >= 80 && nF < 90) {
            message.innerHTML = '<p>Ustes es Muy Bueno</p>';
        } else if (nF >= 90 && nF <= 100) {
            message.innerHTML = '<p>Ustes es Sobresaliente</p>';
        } else {
            message.innerHTML = '<p>Por favor, ingrese notas válidas</p>';
        }
    };

    const limpiar = () => {
        Swal.fire({
            title: "Estas Seguro?",
            text: "no habra marcha atras!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Seguro!"
          }).then((result) => {
            if (result.isConfirmed) {
                setN1('');
                setN2('');
                setN3('');
              Swal.fire({
                title: "Eliminado!",
                text: "Los campos han sido limpiados",
                icon: "success"
              });
            }
          });
    }

    return (
        <>
            <div className="container mt-5">
                <p className="fs-1 text-center">Ingrese sus notas</p>
                <input 
                    className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Ingrese nota (máximo 30)" 
                    aria-label=".form-control-lg example" 
                    value={n1} 
                    onChange={(e) => setN1(e.target.value)}
                />
                <input 
                    className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Ingrese nota (máximo 30)" 
                    aria-label=".form-control-lg example" 
                    value={n2} 
                    onChange={(e) => setN2(e.target.value)}
                />
                <input 
                    className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Ingrese nota (máximo 40)" 
                    aria-label=".form-control-lg example" 
                    value={n3} 
                    onChange={(e) => setN3(e.target.value)}
                />
                <button type="button" className="btn btn-info" onClick={() => calcularNota()}>Calcular</button>
                <button type="button" className="btn btn-danger mx-3" onClick={() => limpiar()}>Eliminar</button>
                <div className="card">
                    <div className="card-body" id='card'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Notas;
