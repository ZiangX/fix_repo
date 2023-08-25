import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as SvgDotPatternIcon } from '../../images/dot-pattern.svg'
import { ReactComponent as LocationIcon } from 'feather-icons/dist/icons/map-pin.svg'
import { ReactComponent as TimeIcon } from 'feather-icons/dist/icons/clock.svg'
import { ReactComponent as TrendingIcon } from 'feather-icons/dist/icons/trending-up.svg'
import { SectionHeading as HeadingTitle } from '../misc/Headings.js'

import paintwithnumber from '../../images/paintwithnumber.png'
import simplifyresto from '../../images/simplifyresto.png'

const Container = tw.div`relative`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`

const Content = tw.div`mt-16`

const Card = styled.div(props => [
	tw`mt-24 md:flex justify-center items-center`,
	props.reversed ? tw`flex-row-reverse` : 'flex-row',
])
const Image = styled.div(props => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
])
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`
const Title = tw.h4`text-3xl font-bold text-gray-900`
const Description = tw.p`mt-2 text-sm leading-loose`
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

const SvgDotPattern1 = tw(
	SvgDotPatternIcon,
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern2 = tw(
	SvgDotPatternIcon,
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern3 = tw(
	SvgDotPatternIcon,
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern4 = tw(
	SvgDotPatternIcon,
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`

const CardImage = styled.div(props => [
	`background-image: url("${props.imageSrc}");`,
	tw`h-80 bg-cover bg-center rounded`,
])

const CardText = tw.div`my-4`
const CardMeta = styled.div`
	${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`
const CardMetaFeature = styled.div`
	${tw`flex items-center mt-4`}
	svg {
		${tw`w-5 h-5 mr-1`}
	}
`
const CardTitle = tw.h5`text-sm mt-4 font-bold`

export default () => {
	const cards = [
		{
			imageSrc: paintwithnumber,
			subtitle: '',
			title: 'Paint with Number',
			description:
				'One of the top 20 painting websites in the US, it generated over $1 million in revenue in 2022, selling its products worldwide.',
			url: 'https://paintwithnumber.com/en-ca',
			projects: [
				{
					name: 'User Management System',
					tech: 'Full Stack',
					time: '11/2023 - 01/2024',
					// url: 'https://paintwithnumber.com/en-ca'
				},
			],
		},

		{
			imageSrc: simplifyresto,
			subtitle: '',
			title: 'Simplify Resto',
			description:
				'A Quebec-based domestic startup provides restaurant ordering and delivery apps. It has won second place in the McGill Accelerator Competition.',
			url: 'https://www.simplifyresto.com/',
			projects: [
				{
					name: 'UniECook',
					tech: 'Mobile App',
					time: '06/2023 - 08/2023',
					// url: 'https://paintwithnumber.com/en-ca'
				},
			],
		},
	]

	return (
		<Container>
			<SingleColumn>
				<HeadingInfoContainer>
					<HeadingTitle>Partner company</HeadingTitle>
					<HeadingDescription>
						We are constantly assisting our partner companies in enhancing their services to provide better
						experiences for their users and drive increased sales. Together, we strive for success!
					</HeadingDescription>
				</HeadingInfoContainer>

				<Content>
					{cards.map((card, i) => (
						<Card key={i} reversed={i % 2 === 1}>
							{/* <Image imageSrc={card.imageSrc} /> */}
							<img
								src={card.imageSrc}
								alt='img'
								style={{
									width: '100%',
									height: '100%',
									maxHeight: '300px',
									maxWidth: '400px',
								}}
							/>
							<Details>
								{/* <Subtitle>{card.subtitle}</Subtitle> */}
								<Title>{card.title}</Title>
								<Description>{card.description}</Description>
								<CardText>
									<CardTitle>{card.projects[0].name}</CardTitle>
									<CardMeta>
										{/* <CardMetaFeature>
										<TrendingIcon /> {card.projects[0].tech}
									</CardMetaFeature> */}
										<CardMetaFeature>
											<TimeIcon /> {card.projects[0].time}
										</CardMetaFeature>
										<CardMetaFeature>
											<LocationIcon /> Montreal
										</CardMetaFeature>
									</CardMeta>
								</CardText>
								<Link href={card.url}>See Company Details</Link>
							</Details>
						</Card>
					))}
				</Content>
			</SingleColumn>
			<SvgDotPattern1 />
			<SvgDotPattern2 />
			<SvgDotPattern3 />
			<SvgDotPattern4 />
		</Container>
	)
}
