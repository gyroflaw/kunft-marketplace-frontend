import Image from 'next/image'
import styled from 'styled-components'

import { Box, Flex } from '@components/Box'
import { CardButton } from '@components/Button'
import { ModalInput } from '@components/Input'
import { Text } from '@components/Text'

const StyledImage = styled(Image)`
  border-radius: 100%;
`

const InputContainer = styled(Box)`
  margin-top: 12px;
  font-family: 'Avenir';
`

const SaveButton = styled(CardButton)`
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
  transform: translateY(100%);
`

const Container = styled(Box)`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px 10px 0px 0px;
  padding: 44px 77px 56px 84px;
  max-width: 700px;
`

interface ProfileProps {
  name?: string
  walletAddress?: string
  emailAddress?: string
  NFTurl?: string
  description?: string
  avatar?: string
}

export default function Profile({
  name = '',
  walletAddress = '',
  emailAddress = '',
  NFTurl = '',
  description = '',
  avatar,
}: ProfileProps) {
  const profileAvatar = avatar || '/assets/images/Avatar/Default.svg'

  return (
    <Container>
      <Flex flexDirection="row" alignItems="center" mb="9px">
        <StyledImage src={profileAvatar} alt="" width={100} height={100} />
        <Text ml="19px" fontSize="30px" color="background">
          PROFILE SETTINGS
        </Text>
      </Flex>
      <InputContainer>
        <Text fontSize="15px" color="background">
          USERNAME
        </Text>
        <ModalInput placeholder="Input Username" />
      </InputContainer>
      <InputContainer>
        <Text fontSize="15px" color="background">
          WALLET ADDRESS
        </Text>
        <ModalInput
          placeholder="Wallet Address"
          readOnly
          backgroundColor="inputSecondary"
        />
      </InputContainer>
      <InputContainer>
        <Text fontSize="15px" color="background">
          EMAIL ADDRESS
        </Text>
        <ModalInput placeholder="Input Email Address" />
      </InputContainer>
      <InputContainer>
        <Flex flexDirection="row" alignItems="end">
          <Text fontSize="15px" color="background">
            DISPLAY PICTURE NFT
          </Text>
          <Text fontSize="8px" color="background">
            Optional
          </Text>
        </Flex>
        <ModalInput placeholder="Input NFT URL" />
      </InputContainer>
      <InputContainer>
        <Flex flexDirection="row" alignItems="end">
          <Text fontSize="15px" color="background">
            PROFILE BIO
          </Text>
          <Text fontSize="8px" color="background">
            Optional
          </Text>
        </Flex>
        <ModalInput placeholder="Tell the world something about yourself" />
      </InputContainer>
      <SaveButton text="SAVE" />
    </Container>
  )
}