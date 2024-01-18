import { type FC} from 'react';
import { Form } from 'react-bootstrap';

interface SwitchFilterProps {
    option: string,
    optionHeadersIndex: string,
    isSelected:  boolean | undefined,
    onSelect: () => void
}

export const SwitchFilter: FC<SwitchFilterProps> = (props: SwitchFilterProps) => {
    const {option, isSelected, onSelect} = props;
    // console.log(`${option}:`,isSelected)
  
    return (
        <>
            <div className="mb-3" key={option} >
                <Form.Check
                checked={isSelected}
                onChange={onSelect}
                type="switch"
                id={option}
                label={option} 
                value={option}
                />
            </div>
        </>
    )
}