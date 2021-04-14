import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  RepoIcon,
  Tab,
  CalendarHeading } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData 
             username={'thlanza'}
             name={'Thiago Lanza'}
             avatarUrl={'https://avatars.githubusercontent.com/u/38446286?v=4'}
             followers={887}
             following={7}
             company={'Seplag MG'}
             location={'Belo Horizonte, Brazil'}
             email={'thlanza@hotmail.com'}
             blog={'linkedin.com/in/thlanza'}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'thlanza'}
                  reponame={'youtube-content'}
                  description={'Contains all of my YouTube lessons code'}
                  language={n % 3 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
