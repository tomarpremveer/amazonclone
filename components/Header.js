import Link from "next/link";

const setDarkMode = function(){
    if(localStorage.theme === 'dark' || (!('theme' in localStorage))){
        localStorage.setItem('theme','white')
        document.documentElement.classList.add('dark')
    }else{
        localStorage.setItem('theme','dark')
        document.documentElement.classList.remove('dark')
    }
}


export default function Header(){
    return (
            <ul className="flex flex-row justify-between basis-1 h-12  items-center bg-black text-white">
                <li>
                <div className="inline-flex mx-4">
                    <Link href="/">Home</Link>
                </div>
                </li>
                <li>
                <div className="inline-flex mx-4 ">
                    <ul className="flex  flex-row justify-start gap-12 ">
                        <li className="flex-auto"><Link  href="/sign">Sign In</Link></li>
                        <li className="flex-auto"><Link href="/orders">Orders</Link></li>
                        <li className="flex-auto"><Link href="/cart">Cart</Link></li>
                        <li className="flex-auto"><button onClick={setDarkMode}>Dark Mode</button></li>
                    </ul>
                </div>
                </li>
                
            </ul>
    )
}