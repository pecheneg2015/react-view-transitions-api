import React from "react";

export const Paragraph:React.FC<{children:React.ReactNode}> = ({children})=>{
    return   <p className='indent-4 text-lg leading-6'>
        {children}
    </p>
}