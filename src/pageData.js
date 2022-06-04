import darkEarth from 'media/images/darkEarth.jpg'
import hotFire from 'media/images/hotFire.jpg'
import landing from 'media/images/landing.jpg'
import launch from 'media/images/launch.jpg'

const pageData = [
	{
		title: 'NEW SHEPARD',
		boldTitle: 'MISSION NS-20',
		subtitle:
			'On March 31, Blue Origin successfully completed its fourth human spaceflight and 20th overall flight for New Shepard.',
		tag: 'RECENT MISSION',
		button: 'Learn More',
		image: landing,
	},
	{
		title: 'Introducing ',
		boldTitle: 'Orbital reef',
		subtitle:
			'Orbital Reef will be the premier mixed-use space station in low Earth orbit. Blue Origin, Sierra Space, Boeing, Redwire Space, Genesis Engineering Solutions, and Arizona State University form the powerful industry and academic team to deliver Orbital Reef in this decade.',
		button: 'Meet Orbital Reef',
		image: darkEarth,
		centeredText: true,
	},
	{
		tag: 'Gradatim Ferociter',
		boldTitle: 'New Glenn',
		title: 'Orbital Rocket',
		subtitle:
			'Meet the reusable launch vehicle that will build the road to space.',
		button: 'Explore New Glenn',
		image: launch,
		boldFirst: true,
	},
	{
		title: 'REUSABLE',
		boldTitle: 'ROCKET ENGINES',
		subtitle:
			"Blue Origin's engines are powering the next generation of rockets for commercial, civil, national security and human spaceflight.",
		button: 'Explore ENGINES',
		image: hotFire,
	},
]

export default pageData
