import styled from 'styled-components'

export const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    background: #FFF;
    padding: 1rem;
    border-radius: 0.25rem;
    color: var(--bgcolor);

    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    }

  &.div-total{
    background: var(--bgcolor);
    color: #FFF;
  }

}

`