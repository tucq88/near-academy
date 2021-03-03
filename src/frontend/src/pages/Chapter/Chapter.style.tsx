import styled from 'styled-components/macro'
import { backgroundColorLight, borderColor, downColor, near4, near6, okColor, primaryColor, textColor } from 'styles'

export const ChapterStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  height: calc(100vh - 130px);
  margin: 70px 20px 0;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    height: initial;
    margin: 70px 10px;
  }
`

export const ChapterGrid = styled.div<{ hasTabs?: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.hasTabs ? '30px auto auto' : 'auto auto')};
  grid-gap: 0;
  overflow-y: scroll;

  @media (max-width: 900px) {
    overflow-y: initial;
    margin-bottom: 20px;
  }
`

export const ChapterQuestions = styled.div`
  padding: 20px;
  border: 1px solid ${near6};
  background: white;
  h2 {
    font-weight: 600;
  }
`

export const ChapterCourse = styled.div`
  background: ${backgroundColorLight};
  border: 1px solid ${near6};
  padding: 20px;
  font-size: 14px;
  white-space: pre-wrap;
  overflow: auto;
  position: relative;
  font-size: 22px;

  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  strong {
    color: #08658b;
  }

  a:visited {
    color: #0f9ba4;
  }
`

export const ChapterH1 = styled.div`
  font-size: 32px;
  line-height: 38px;
  font-weight: 600;

  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`

export const ChapterH2 = styled.div`
  font-size: 36px;
  line-height: 28px;
  margin-top: 20px;
  color: #ffb359;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 24px;
  }
`

export const ChapterH3 = styled.div`
  font-size: 24px;
  line-height: 28px;
  margin-top: 20px;
`
export const ChapterH4 = styled.div`
  font-size: 15px;
  line-height: 28px;
  margin: 0;
`

export const ChapterValidator = styled.div`
  background: ${backgroundColorLight};
  border: 1px solid ${near6};
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  &.ok {
    border-color: ${okColor};
  }

  .tryagain {
    color: ${downColor};
    animation: redtowhite 2s forwards;
  }

  @keyframes redtowhite {
    from {
      color: ${downColor};
    }
    to {
      color: ${textColor};
    }
  }
`

export const ChapterValidatorTitle = styled.div`
  font-size: 32px;
  color: #0072ce;
  font-weight: 600;
`

export const ChapterValidatorContent = styled.div`
  font-size: 12px;
`

export const ChapterValidatorContentWrapper = styled.div``

export const Button = styled.div`
  font-size: 14px;
  width: 220px;
  height: 40px;
  border: 1px solid white;
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 20px auto 10px auto;

  img {
    display: inline-block;
    margin: 10px 20px 10px -10px;
    vertical-align: bottom;
  }
`

export const ButtonBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border: 1px solid transparent;
  border-image-source: url('/elements/button-border.svg');
  border-image-slice: 24 28 fill;
  border-image-width: 100px;
  content: '';
  z-index: 0;
`

export const ButtonText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 40px;
  z-index: 1;
  color: ${textColor};
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 55px;
  font-weight: 600;
  &:hover {
    transform: scale(1.05);
    color: #0072ce;
  }

  > svg {
    stroke: ${textColor};
    width: 22px;
    height: 22px;
    margin-right: 17px;
    vertical-align: text-bottom;
  }
`

export const ChapterMonaco = styled.div`
  border: 1px solid ${primaryColor};
`

export const ChapterItalic = styled.em`
  font-style: italic;
`

export const ChapterTab = styled.div<{ isSelected?: boolean }>`
  height: 30px;
  line-height: 20px;
  margin-right: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
  border-top: 1px solid ${primaryColor};
  border-right: 1px solid ${primaryColor};
  border-left: 1px solid ${primaryColor};
  background-color: ${(props) => (props.isSelected ? '${primaryColor}' : 'initial')};
`

export const ChapterLocked = styled.div`
  height: calc(100vh - 130px);
  margin: 70px 20px 0;
`

export const ChapterTitle = styled.div`
  font-size: 50px;
  margin-top: 25px;
  color: #1174CB;
  line-height: 38px;
  font-weight: 600;
  text-align: center;

  /* @media (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  } */
`
export const Difficulty = styled.div`
  margin-top: 15px;
  text-align: center;
  
`
export const BackgroundContainer = styled.div`
  background-color: #0072ce;
  color: white;
  padding: 40px;
  h1 {
    color: #ffb359:
  }
  
`
export const Image = styled.div`
  
`

export const Spacer = styled.div`
    height: 30px;
`

export const narrativeText = styled.div`
    font-weight: 500;
    background-color: #f2f2f2;
    padding: 40px;
`

export const Quote = styled.div`
  color: #0072CE;
  font-size: 35px;
  font-weight: 900;
  padding-left: 40px;
`

export const quoteComma = styled.div`
  color: #0072CE;
  font-weight: 600;
  font-size: 88px;
  margin-bottom: -80px;

`

