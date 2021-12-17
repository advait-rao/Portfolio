import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import ArrowDown from '../components/ArrowDown';

const Resume = (props) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#061324',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            id='resume'
        >
            <Box
                sx={{
                    marginTop: '5vh',
                    fontSize: 64,
                    fontWeight: 'bold',
                    color: '#061324',
                    backgroundColor: '#950740',
                    borderRadius: 1,
                    justifyContent: 'Center',
                }}
            >
                Resume
            </Box>
            <Box
                sx={{
                    marginTop: '2vh',
                    padding: '2rem',
                    display: 'flex',
                    fontSize: 24,
                    height: 'auto',
                    fontWeight: 'regular',
                    width: '50%',
                    backgroundColor: '#101B2B',
                    borderRadius: 2,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                Resume go brr...
            </Box>
            <ArrowDown link='#contact' />
        </Box>
    );
};

Resume.propTypes = {};

export default Resume;