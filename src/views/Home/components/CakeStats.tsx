import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledPrimoStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-bottom: 5px; 
  border: 3px solid green;
`
//margin-bottom was 8 font 14 border added


const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledPrimoStats>
      <CardBody>
        <Heading scale="xl" mb="26px">
          {t('Primo Stats')}
        </Heading>
        <Row>
          <Text fontSize="15px">{t('Total Primo Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="15px">{t('Total Primo Burned')}</Text>
          <CardValue fontSize="15px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="15px">{t('New Primo/block')}</Text>
          <CardValue fontSize="15px" decimals={0} value={20} />
        </Row>
      </CardBody>
    </StyledPrimoStats>
  )
}

export default CakeStats
