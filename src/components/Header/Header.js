import React from 'react'
import styles from './Header.module.css'

const header = (props)=>(
    <h1>
        {props.children}
    </h1>
)

export default header;