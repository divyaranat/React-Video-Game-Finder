import { type FC, useState, useEffect } from 'react';
import { Button, Offcanvas, Accordion } from 'react-bootstrap';
import { categoryOptions, platformOptions, sortOptions } from '../utils/FilterOptions';
import { FilterAccordion } from './FilterAccordion';



interface FilterComponentProps {
   
}


export const FilterComponent: FC<FilterComponentProps> = () => {

    const [showFilter, setShowFilter] = useState(false);
    const [currentEventKey, setCurrentEventKey] = useState('');
    const [sortSelectedSwitch, setSortSelectedSwitch] = useState<string | null>(null);
    const [platformSelectedSwitch, setPlatformSelectedSwitch] = useState<string | null>(null);
    const [categorySelectedSwitch, setCategorySelectedSwitch] = useState<string | null>(null);
   
    const optionArrays = [sortOptions, platformOptions, categoryOptions];
    

    const handleClose = () => setShowFilter(false);
    const handleShow = () => setShowFilter(true);

    console.log("sort", sortSelectedSwitch)
        console.log("platform", platformSelectedSwitch)
        console.log("category", categorySelectedSwitch)

return (
     <>
        <Button onClick={handleShow}>Filter</Button>
        <Offcanvas show={showFilter} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Filter
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Accordion activeKey={currentEventKey} >
            {optionArrays.map((optionArray, index) => { 
                return (
                    <FilterAccordion 
                    optionArray={optionArray} 
                    index={index} 
                    setCurrentEventKey={setCurrentEventKey}
                    currentEventKey={currentEventKey}
                    sortSelectedSwitch={sortSelectedSwitch}
                    setSortSelectedSwitch={setSortSelectedSwitch}
                    platformSelectedSwitch={platformSelectedSwitch}
                    setPlatformSelectedSwitch={setPlatformSelectedSwitch}
                    categorySelectedSwitch={categorySelectedSwitch}
                    setCategorySelectedSwitch={setCategorySelectedSwitch}
                    /> 
                )
            } )}
            </Accordion>
        </Offcanvas.Body>
     </Offcanvas>
    </>
    )
}