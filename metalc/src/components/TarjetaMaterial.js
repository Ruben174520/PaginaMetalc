import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
export const TarjetaMaterial = ({material}) =>{
    return (
        <div>
            <div>
                <Image src={material.icono} width={50} height={50}/>
            </div>
        </div>
    )
}