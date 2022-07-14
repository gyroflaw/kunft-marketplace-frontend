import styled from 'styled-components'

import { Flex } from '@components/Box'
import { StyledButton } from '@components/Button'
import { Input } from '@components/Input'
import { Text } from '@components/Text'

const PriceText = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85px;
  font-family: 'Avenir';
  font-size: 16px;
  padding: 12px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const PriceContainer = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled(Flex)`
  justify-content: center;
`

const Container = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 26px 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export default function Offer() {
  return (
    <Container>
      <PriceContainer>
        <PriceText>
          KNFT
          <Text fontWeight={700}>v</Text>
        </PriceText>
        <Input placeholder="Input Amount" type="number" />
        <Flex flexDirection="column">
          <Text fontFamily="Avenir" fontSize="10px">
            Highest Offer
          </Text>
          <Text fontFamily="Avenir" fontSize="18px" fontWeight={700}>
            50,531 KNFT
          </Text>
        </Flex>
      </PriceContainer>
      <ButtonContainer>
        <StyledButton
          text="Make Offer"
          link={false}
          fontSize="20px"
          height={44}
        />
      </ButtonContainer>
    </Container>
  )
}