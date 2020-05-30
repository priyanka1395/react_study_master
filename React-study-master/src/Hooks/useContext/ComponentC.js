import React from 'react';
import { UserContext,ChannelContext,myOwnContext} from '../../App';
function ComponentC(){
    return(
        <div>
            <UserContext.Consumer>
				{user => {
					return (
						<ChannelContext.Consumer>
							{channel => {
                return <div>User context value {user}, channel context value {channel}</div>
							}}
						</ChannelContext.Consumer>
					)
				}}
			</UserContext.Consumer>
			<myOwnContext.Consumer>
				{
					msg=>(
					<h1>{msg}</h1>
					)
				}
			</myOwnContext.Consumer>
        </div>
    )
}
export default ComponentC