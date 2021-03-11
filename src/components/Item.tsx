import React, { FC } from 'react'

interface ItemProps {
    name: string;
}

const Item: FC<ItemProps> = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default Item;