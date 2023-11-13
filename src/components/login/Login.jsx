import styles from "./Login.module.scss"

function Login({onClose}) {
    return (
        <div className={styles.login}>
            <div className={styles.container}>
            <span onClick={onClose}>X</span>
            </div>
        </div>
    )
}

export default Login