import React from 'react'
//import styles from './Text.module.css'

type Props = {
    variant? : String,
    children : React.ReactNode,
    style? : React.CSSProperties
}

export const Text : React.FC<Props> = ({variant , children , style}) => {
  
    if(variant === 'h1') return <h1>{children}</h1>
    if(variant === 'h2') return <h2>{children}</h2>
    if(variant === 'p') return <p>{children}</p>
    if(variant === 'span') return <span>{children}</span>

    return (
        <div style = {style}>{children}</div>
  )
}
