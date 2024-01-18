import { type FC, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface SortComponentProps {

}

export const SortComponent: FC<SortComponentProps> = () => {
    
return(
    <>
        <DropdownButton className='w-100' id='dropdown-basic-button' title='Sort'>

        </DropdownButton>

    </>
    )
}