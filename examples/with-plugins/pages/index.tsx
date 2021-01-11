import React from 'https://esm.sh/react?target=deno'
import wasm from './42.wasm'
import './style.sass'

export default function Home() {
    return (
        <h1>{wasm.main()}</h1>
    )
}
