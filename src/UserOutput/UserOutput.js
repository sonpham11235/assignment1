import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <UserInput changed={props.changed} name={props.userName} index={props.index} />
            <p className='UserNameDisplay'>{props.userName}</p>
            <p>
                paragraph 1
            </p>
            <p>
                paragraph 2
            </p>
        </div>
    )
}

export default userOutput;