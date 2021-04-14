import { Container } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={'username'} to={'/thlanza'}>
          thlanza
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/thlanza/youtube-content'}>
          youtube-content
        </Link>
      </BreadCrumb>

      <p>Contains all of my YouTube lessons code.</p>

      <Stats>
        
      </Stats>
    </Container>
  );
};

export default Repo;
