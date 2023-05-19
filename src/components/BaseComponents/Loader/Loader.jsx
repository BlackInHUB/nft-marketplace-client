import {ThreeDots} from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ThreeDots
            height = "200"
            width = "200"
            radius="20"
            color = '#A259FF'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'}}
            // wrapperClass
        />
    )
}