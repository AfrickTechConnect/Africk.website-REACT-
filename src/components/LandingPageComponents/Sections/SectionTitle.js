import React from 'react';

function SectionTitle({title}) {
    return (
        <div className="flex flex-col items-start text-2xl font-bold mb-7">
                {title}<br/>
                <div className="h-2 rounded-lg w-10 mt-2 mr-16 bg-afrkgreen"></div>
        </div>
    );
}

export default SectionTitle;