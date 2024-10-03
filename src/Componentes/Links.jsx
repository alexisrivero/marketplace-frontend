import "./Links.css"
import { MdMenu } from "react-icons/md";

const Links = () => {
    return (
        <section className="links"> 
            <nav>
                <ul>
                    <li>
                        <a href="/categories"><MdMenu size={23}/></a>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/Signup">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Links