import Spinner from "../Spinner/spinner.components"

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
    return (
        isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner