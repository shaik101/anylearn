import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div>
			{
				robots.map((user, i) => {
				return (
				<a href="https://www.udemy.com/" >
					<Card
					 key={i}
					 id={user.id}
					 name={user.course}
					 email={user.des}
					 /> 
				</a>
					 );
				})
			}
		</div>
	);
}

export default CardList;
