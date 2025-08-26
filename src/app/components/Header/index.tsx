import Link from "next/link";
import style from "./Header.module.scss"

function Header() {
    return ( 
    <header className={style.head}>
        <Link href={"/"}>Время</Link>
        <Link href={"/IloveYOUsasha<3"}>Творчество</Link>
    </header> );
}

export default Header;