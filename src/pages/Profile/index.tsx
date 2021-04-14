import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
