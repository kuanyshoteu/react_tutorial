

import React from 'react';
export default function Modal(){
    function hide_modal(event){
        if(event.target.id === "modalScreen" || event.target.id === "closeIcon"){
            let modal = document.getElementById('modalScreen')
            let main = document.getElementById('mainScreen')
            modal.classList.add('hidden')
            main.classList.remove('blur-in')
        }
    }
    return (
        <div id='modalScreen' onClick={hide_modal} className='modalScreen hidden'>
            <div className='modalBox'>
                <a id='closeIcon' onClick={hide_modal} className='closeIcon'>x</a>
                <button className='btn btn-primary'>It works</button>
            </div>
        </div>
    )
}
