import {css} from '@emotion/css'

export interface AlertProps {
    message:string
}

export default function Alert({message}:AlertProps){
    return(
        <>
        <div className={alertWrapper}>
            <h3>Heh hem!</h3>
            <p>{message}</p>
        </div>
        </>
    )
}

const alertWrapper = css({
    margin:"1rem",
    padding:"1rem",
    border:"1px solid black",
})