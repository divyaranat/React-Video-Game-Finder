import { type FC, useState, useContext, useEffect } from 'react';
import { Form, Accordion } from 'react-bootstrap';
import {AllVideoGameContext} from '../App';
import {SwitchFilter} from "./SwitchFilter"

interface FilterAccordionProps {
    optionArray: Array<string>,
    index: number,
    setCurrentEventKey: React.Dispatch<React.SetStateAction<string>>,
    currentEventKey: string,
    sortSelectedSwitch: string | null,
    setSortSelectedSwitch: React.Dispatch<React.SetStateAction<string | null>>,
    platformSelectedSwitch: string | null,
    setPlatformSelectedSwitch: React.Dispatch<React.SetStateAction<string | null>>,
    categorySelectedSwitch: string | null,
    setCategorySelectedSwitch: React.Dispatch<React.SetStateAction<string | null>>
}

interface FilterMap {
    [key: string]: [string | null | undefined, React.Dispatch<React.SetStateAction<string | null>>];
  }

export const FilterAccordion: FC<FilterAccordionProps> = (props: FilterAccordionProps) => {
    const {allGames, setAllGames, gameUrl, fetchAllGames} = useContext(AllVideoGameContext);
    const {
        optionArray, 
        index, 
        setCurrentEventKey, 
        currentEventKey, 
        sortSelectedSwitch, 
        setSortSelectedSwitch,
        platformSelectedSwitch,
        setPlatformSelectedSwitch,
        categorySelectedSwitch,
        setCategorySelectedSwitch
    } = props;
    const optionHeaders = ["Sort", "Platform", "Category"];
    

    const filterMap: FilterMap = {
        "Sort": [sortSelectedSwitch, setSortSelectedSwitch],
        "Platform": [platformSelectedSwitch, setPlatformSelectedSwitch],
        "Category": [categorySelectedSwitch, setCategorySelectedSwitch],
      };
      
      const defaultQueryParams = {
        "sort-by": "",
        "platform": "",
        "category": "",
      };
      
    const fetchSortedData = async (option: string | null, optionHeadersString: string) => {
        let queryParam = ""
        if(optionHeadersString === "Sort") {
            queryParam += "sort-by"

        }

        if(optionHeadersString === "Platform") {
            queryParam += "platform"

        }

        if(optionHeadersString === "Category") {
            queryParam += "category"

        }
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "2546214f87msh678cb2c0305a97ep10e9ebjsna8b738d860b8",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
    
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
        const url = `${gameUrl}?${queryParam}=${option}`
        console.log(url)
        const response = await fetch(url, options);
        const data = await response.json();
        setAllGames(data)
    };
    
    const handleSwitchChange = (option: string | null, optionHeadersString: string) => {
        const [selectedSwitch, setSelectedSwitch] = filterMap[optionHeadersString];
    
        if (selectedSwitch === option) {
            setSelectedSwitch(null)
            fetchAllGames()
        } else {
            setSelectedSwitch(option)
            fetchSortedData(option, optionHeadersString)
        }
      }
      
      
      

    const isSelected = (option: string, optionHeadersString: string) => {
        if (optionHeadersString === "Category") {
            return option === categorySelectedSwitch
        }

        if (optionHeadersString === "Platform") {
            return option === platformSelectedSwitch
        }

        if (optionHeadersString === "Sort") {
            return option === sortSelectedSwitch
        }
    }

    
    return (
        <>
            <Accordion.Item eventKey={String(index)}>
                <Accordion.Header 
                    onClick={() => currentEventKey === String(index) ? 
                        setCurrentEventKey('') 
                        : 
                        setCurrentEventKey(String(index))}
                    >
                        {optionHeaders[index]}
                </Accordion.Header>
                <Accordion.Body>
                <Form>
                {optionArray.map( (option) => {

                    return (
                    <SwitchFilter 
                        optionHeadersIndex={optionHeaders[index]} 
                        option={option}
                        isSelected={isSelected(option, optionHeaders[index])}
                        onSelect={() => handleSwitchChange(option, optionHeaders[index])}
                    />
                    )
                    
                } )}
                </Form>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}