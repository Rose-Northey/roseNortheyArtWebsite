import { css } from '@emotion/css'
import { colors, Spacing } from '../styles/stylingVariables'
export default function Header (){
    return(
        <>
        <header className={styles.header}>
        <img className={styles.logo} src="../../Public/logo.png" />
        <h1>Rose Northey Art</h1>
        </header>
        </>
    )
}

const styles = {
    logo: css({
        width : "3rem",
    }),
    header: css({
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        zIndex: 10,
        width: "100%",
        height: Spacing.headerHeight,
        backgroundColor: colors.primaryBackground
    })
}