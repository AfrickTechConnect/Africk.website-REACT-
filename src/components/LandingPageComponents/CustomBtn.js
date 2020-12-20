import React from 'react';

function CustomBtn({ buttonType, buttonName, buttonAction }) {
    if(buttonType === 'primary'){
        return <button onClick={buttonAction} className="transform hover:ease-out hover:scale-105 w-50 bg-afrkgreen text-white rounded px-10 py-5 font-semibold">{buttonName}</button>
    }else if(buttonType === 'secondary'){
        return <button onClick={buttonAction} className="transform  hover:bg-afrkblue hover:text-white hover:ease-out hover:scale-105 w-50 border border-afrkblue text-afrkblue rounded px-10 py-5 font-semibold">{buttonName}</button>
    }
    else if(buttonType=== 'tetriary') {
        return <button onClick={buttonAction} className="border-afrkgreen border text-afrkgreen rounded-full px-16 py-3 font-semibold hover:ease-out w-100 hover:text-white hover:bg-afrkgreen transform hover:scale-105">{buttonName}</button>
    }
}

export default CustomBtn;