import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div>
			{
				robots.map((user, i) => {
				return (
					<Card
					 key={i}
					 id={user.id}
					 name={user.course}
					 email={user.des}
					 />
					 );
				})
			}
		</div>
	);
}

export default CardList;