import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage.js'
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import Header from 'components/headers/light.js'
import Footer from 'components/footers/FiveColumnWithInputForm.js'
import { SectionHeading } from 'components/misc/Headings'

const HeadingRow = tw.div`flex`
const Heading = tw(SectionHeading)`text-gray-900 mb-10`
const Text = styled.div`
	${tw`text-lg  text-gray-800`}
	p {
		${tw`mt-2 leading-loose`}
	}
	h1 {
		${tw`text-3xl font-bold mt-10`}
	}
	h2 {
		${tw`text-2xl font-bold mt-8`}
	}
	h3 {
		${tw`text-xl font-bold mt-6`}
	}
	ul {
		${tw`list-disc list-inside`}
		li {
			${tw`ml-2 mb-3`}
			p {
				${tw`mt-0 inline leading-normal`}
			}
		}
	}
`
export default ({ headingText = 'Internship' }) => {
	return (
		<AnimationRevealPage>
			<Header />
			<Container>
				{/* <ContentWithPaddingXl> */}
				{/* <HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow> */}
				<Text>
					<h1>Interpretation and Definitions</h1>

					<h2>Sprint Planning Meeting</h2>
					<ul>
						<li>Duration: 2-4 hours (for a 2-week sprint)</li>
						<li>Purpose: Define what will be delivered in the sprint.</li>
						<li>Activities: Development team discusses the work and assign to team members. </li>
					</ul>

					<h2>Daily Standup Meeting</h2>
					<ul>
						<li>Duration: 15 minutes(Every Day)</li>
						<li>Purpose: Share updates, synchronize work, and identify any impediments.</li>
						<li>
							Activities: Each team member answers three questions: What did I do yesterday? What will I
							do today? What obstacles are impeding my progress?
						</li>
					</ul>

					<h2>Development Work</h2>
					<ul>
						<li>Duration: Varies based on tasks and capacity.(Every Day)</li>
						<li>Activities: Development team members work on the sprint backlog items.</li>
					</ul>

					<h3>Refinement Meeting</h3>
					<ul>
						<li>Duration: Duration: 1-2 hours.(Every Day)</li>
						<li>Purpose: Review and revise the product backlog.</li>
						<li>Activities: Review the work.</li>
					</ul>
				</Text>
				{/* </ContentWithPaddingXl> */}
			</Container>
		</AnimationRevealPage>
	)
}
