import styled from 'styled-components'
import { Flex, Text } from '@/components'
import { Token } from '@/types'
import { shortenHash } from '@/utils/hash'
import {
  Container as DefaultContainer,
  StyledText,
  DataContainer,
  NameContainer,
  ValueContainer,
} from './styles'

const Container = styled(DefaultContainer)`
  border-bottom: 0;
`

interface DescriptionProps {
  token: Token
}

export default function Detail({ token }: DescriptionProps) {
  return (
    <Container>
      <StyledText>Details</StyledText>
      <DataContainer>
        <Flex alignItems="center" justifyContent="space-between">
          <NameContainer>
            <Text>Contract Address</Text>
          </NameContainer>
          <ValueContainer>
            <Text color="primary">
              {shortenHash(token.collection.contractPackageHash)}
            </Text>
          </ValueContainer>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between">
          <NameContainer>
            <Text>Token ID</Text>
          </NameContainer>
          <ValueContainer>
            <Text color="detail">{token.id}</Text>
          </ValueContainer>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between">
          <NameContainer>
            <Text>Creator Fees</Text>
          </NameContainer>
          <ValueContainer>
            <Text color="detail">5%</Text>
          </ValueContainer>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <NameContainer>
            <Text>Token Standard</Text>
          </NameContainer>
          <ValueContainer>
            <Text color="detail">CEP-47</Text>
          </ValueContainer>
        </Flex>
      </DataContainer>
    </Container>
  )
}
