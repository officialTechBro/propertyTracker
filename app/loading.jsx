'use client'
import ClipLoader from "react-spinners/ClipLoader"

const override = {
    display: 'block',
    margin: '100px auto',
}

const LoadingPage = ({loading}) => {
  return (
    <ClipLoader
        color= '#9f1239'
        loading = {loading}
        cssOverride = {override}
        size = {150}
        aria-label = 'Loader Spinner'
    />
  )
}
export default LoadingPage