import React from 'react'
import styled from 'styled-components'

import { Link } from '../../theme'
import LogoUnicorn from '../../assets/images/unicorn.svg'
import Web3Status from '../Web3Status'
import { darken } from 'polished'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const HeaderElement = styled.div`
  margin: 1.25rem;
  display: flex;
  min-width: 0;
  display: flex;
  align-items: center;
`

const Nod = styled.div`
  transform: rotate(0deg);
  transition: transform 150ms ease-out;

  :hover {
    transform: rotate(-10deg);
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  #link {
    text-decoration-color: ${({ theme }) => theme.UniswapBlue};
  }

  #title {
    display: inline;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.uniswapBlue};
    :hover {
      color: ${({ theme }) => theme.uniswapDarkblue};
    }
  }
`

export default function Header() {
  return (
    <HeaderFrame>
      <HeaderElement>
        <Title>
          <Nod>
            <Link id="link" href="https://uniswap.ch">
	      <img src={LogoUnicorn} alt="unicorn" height="70px" />
            </Link>
          </Nod>
          <Link id="link" href="https://uniswap.io">
            <h1 id="title">Uniswap</h1>
          </Link>
        </Title>
      </HeaderElement>
      <HeaderElement>
        <Web3Status />
      </HeaderElement>
    </HeaderFrame>
  )
}
