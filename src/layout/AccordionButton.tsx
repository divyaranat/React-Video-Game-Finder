import { type FC, useState, PropsWithChildren } from 'react';
import { useAccordionButton, Accordion } from 'react-bootstrap';

interface AccordionButtonProps {
   eventKey: String
}

export const AccordionButton: FC<PropsWithChildren<AccordionButtonProps>> = ({children, eventKey}) => {

    return (
        <>
            <Accordion.Header>
                    {children}
                </Accordion.Header>
        </>
    )
}