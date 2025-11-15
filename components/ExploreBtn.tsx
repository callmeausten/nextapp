'use client'
import Link from "next/link"
import Image from "next/image"

export default function ExploreBtn(){
    return (
        <button onClick={() => console.log("You clicked")}
                className="mt-7 mx-auto"
                type="button"
                id="explore-btn"
        >
            <Link href="/">
                Explore Events
                <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
            </Link>
        </button>
    )
}