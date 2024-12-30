type ButtonPropsType = {
    onClick?: () => void,
    title: string,
    className?: string
    isDisabled?: boolean
}


export const Button = ({title, onClick, className, isDisabled}: ButtonPropsType) => {
    return (
        <button
            onClick={onClick}
            className={className}
            disabled={isDisabled}>
            {title}
        </button>
    );
};