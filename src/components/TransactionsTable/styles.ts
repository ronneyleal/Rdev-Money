import styled from 'styled-components'

export const Container = styled.div `
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0.5rem;

    th{
      color: var(--bgcolor);
      font-weight: 500;
      padding: 1rem 1.5rem;
      text-align: left;
      line-height: 2rem;
    }

    td {
      padding: 1rem 1.5rem;
      border: 0;
      background: #FFF;
      color: var(--sccolor);
      border-radius: 0.25rem;

      &:first-child{
        color: #000;
      }

      &.deposit{
        color: var(--ent)
      }

      &.withdraw{
        color: var(--sai);
      }
    }
  }
`