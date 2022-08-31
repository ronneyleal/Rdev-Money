import styled from 'styled-components'

export const Container = styled.header`
  background: var(--bgcolor);
`

export const Content = styled.div `
  max-width: 1100px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 13rem;
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;
    background: var(--sccolor);
    border: 0;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    height: 2.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`