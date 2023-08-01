import React from 'react'
import Card from './Card'

function Rowcards() {
    return (
        <div>
            <div class="container text-center row-cols">
                <div class="row align-items-center">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rowcards