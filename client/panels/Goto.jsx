import React from 'react';
import Link from 'next/link'

const Goto = () => <>
    <div className="container">
        <div className="wrapper">
            <Link href="/app"> Add Addendum now! </Link>
        </div>
    </div>
    <style jsx>{`
        .container {

        }
        .wrapper {
            display: flex;
            justify-content: center;
        }
    `}</style>
</>

export default Goto;