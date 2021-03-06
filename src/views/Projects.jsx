import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import HeaderPaper from '../components/HeaderPaper';
import ProjectCard from '../components/ProjectCard';
import bookCatalogue from '../media/bookCatalogue.png';
import githubFinder from '../media/githubFinder.png';
import guessWho from '../media/guessWho.png';

const Projects = (props) => {
    return (
        <Box
            sx={{
                backgroundColor: '#061324',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            id='projects'
        >
            <Container className='pageContainer'>
                <HeaderPaper header='Projects' />
                <Box sx={{ flexGrow: 1, marginTop: '2vh' }}>
                    <Grid container spacing={4}>
                        {projects.map((project) => (
                            <Grid item xs>
                                <ProjectCard
                                    className='abc'
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    builtWith={project.builtWith}
                                    demoLink={project.demoLink}
                                    githubLink={project.githubLink}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

const projects = [
    {
        title: 'GitHub Finder',
        description:
            'A user interface that allows you to search for Github users and view user data. It uses the GitHub API to access user data and Context API for state management.',
        image: githubFinder,
        builtWith: 'React, HTML, CSS',
        demoLink: 'https://github-finder-advait.netlify.app/',
        githubLink: 'https://github.com/advait-rao/github-finder',
    },
    {
        title: 'Guess Who',
        description:
            "Simulates thousands of games of the board game 'Guess Who?' and tests out different playing strategies by having them play against each other. I formulated strategies using Decision Theory, Greedy Algorithms and Dichotomic Searching.",
        image: guessWho,
        builtWith: 'Python (and math)',
        demoLink: null,
        githubLink: 'https://github.com/advait-rao/GuessWho',
    },
    {
        title: 'Book Catalogue',
        description:
            'A Book Catalogue similar to GoodReads. It allows the user to view books based on various filters, review them and add them to favourites. Book and author data are stored locally.',
        image: bookCatalogue,
        builtWith: 'Python (Flask, Jinja) HTML, Bootstrap',
        demoLink: null,
        githubLink: 'https://github.com/advait-rao/book-catalogue',
    },
];

Projects.propTypes = {};

export default Projects;
