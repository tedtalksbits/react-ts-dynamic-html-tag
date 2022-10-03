import React from 'react';
import { StyledCard } from './styled-components/StyledCard';
interface CardProps {
    title?: string;
    titleElement?: keyof React.ReactHTML;
    body?: string;
}
const Card = ({
    title = 'Example Title',
    titleElement,
    body = 'Example body',
}: CardProps) => {
    const Title = titleElement || 'h1';
    return (
        <StyledCard>
            <Title>{title}</Title>
            <div>{body}</div>
        </StyledCard>
    );
};

export default Card;
