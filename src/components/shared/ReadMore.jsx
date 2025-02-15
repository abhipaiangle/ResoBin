import { useState } from 'react'
import styled from 'styled-components/macro'

const ReadMoreText = styled.span`
  display: inline-block;
  margin: 0;
  font-size: 85%;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  color: gray;
  cursor: pointer;
`

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true)
  if (!children) return children

  const toggleReadMore = () => setIsReadMore(!isReadMore)
  const maxChars = 199
  const text = children

  return text.length < maxChars ? (
    <>{text}</>
  ) : (
    <>
      {isReadMore ? text.slice(0, maxChars) : text}
      <ReadMoreText onClick={toggleReadMore}>
        {isReadMore ? '...show more' : ' show less'.replace(/ /g, '\u00a0')}
      </ReadMoreText>
    </>
  )
}

export default ReadMore
