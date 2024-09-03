import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../utils"

const buttonsVariants = cva(
    "py-[14px] h-[48px] min-w-fit bg-none border-2 border-[#c4c4c4] font-[Rubik] font-light text-[14px] leading-[143%] disabled:text-[#c4c4c4]",
    {
        variants: {
            variant: {
                small: 'w-[100px]',
                default: 'w-[150px]',
                big: 'w-[200px]'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)


interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonsVariants> {disabled?: boolean}

const Button: React.FC<ButtonProps> = ({className, variant, ...props}) => {
    return <button className={cn(buttonsVariants({variant, className}))} {...props} />
}

export { Button, buttonsVariants}