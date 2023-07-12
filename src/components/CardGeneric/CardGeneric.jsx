import { Card } from "@nextui-org/react"
import React, { useState } from "react"

const CardGeneric = ({ movie }) => {

    return (
        <Card

            css={{
                backgroundSize: "cover",
                height: "150px",
                width: "300px",

            }}>

            <Card.Header
                css={{
                    bgBlur: "10px",
                }}
            >
                {movie}
            </Card.Header>
            <Card.Body>
            </Card.Body>
        </Card>
    )
}

export default CardGeneric

