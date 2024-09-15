import { TailSpin } from "react-loader-spinner"

export default function SpinCarregando() {
    return (
        <TailSpin
            visible={true}
            height="40"
            width="40"
            color="white"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}