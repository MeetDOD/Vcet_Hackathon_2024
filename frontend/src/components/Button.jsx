import { Link } from "react-router-dom"

export const Button = () => {
    return (
        <Link to="/register" className='relative py-3 px-4 md:px-8 lg:px-6 rounded-lg font-medium text-sm md:text-lg lg:text-xl bg-gradient-to-br from-customOrange to-customOrange/90  text-white shadow-[0px_0px_12px_#8c45ff] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div className='absolute inset-0'>
                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
            </div>
            Register Now
        </Link>
    )
}