import React, { useState } from 'react'

interface Props {
    children: string;
    maxChars?: number;
}
const ExapndableText = ({ children, maxChars = 100 }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExpanded ? children : children.substring(0, maxChars);
    return <p>{text}... <button onClick={() => setIsExpanded(!isExpanded)}> {isExpanded ? "Less" : "More"} </button> </p>

}

export default ExapndableText
