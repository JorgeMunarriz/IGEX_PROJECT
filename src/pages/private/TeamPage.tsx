
import { TeamPageStyles } from '.'

const TeamPage = () => {
  return (
    <TeamPageStyles>
        <div className='teamPageContainer'>
        <h2 className='teamPageContainer__title'>Our Team</h2>
        <video className="teamPageContainer__video" src={import.meta.env.VITE_VIDEO_TEAM} autoPlay={true} controls></video>
        </div>
    </TeamPageStyles>
  )
}

export default TeamPage