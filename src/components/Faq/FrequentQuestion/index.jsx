import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FrequentQuestion.css'

export default function FrequentQuestion(props) {
    return (
        <Accordion className='faq__element' >
            <AccordionSummary className='faq__'
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                  {props.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}