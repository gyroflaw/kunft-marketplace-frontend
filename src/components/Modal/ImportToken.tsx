import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import Modal from 'styled-react-modal'

import { Box } from '@/components/Box'
import { CardButton } from '@/components/Button'
import { ModalInput } from '@/components/Input'
import { Text } from '@/components/Text'
import { isValidHash } from '../../web3/utils'

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

const MyModal = Modal.styled``

const StyledModal = styled(MyModal)`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 10px 10px 0px 0px;
  margin: auto 10px;

  min-width: 350px;
  z-index: 20;

  padding: 30px 47px 38px 48px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 38px 57px 48px 64px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 44px 67px 56px 74px;
  }

  ${({ theme }) => theme.mediaQueries.xl2} {
    padding: 44px 77px 56px 84px;
  }
`

interface ImportTokenProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  onImport: any
}

interface SubmitProps {
  contractPackageHash: string
  contractHash: string
  tokenId: string
}

export default function ImportToken({
  show,
  setShow,
  onImport,
}: ImportTokenProps) {
  const [contractHash, setContractHash] = useState<string | undefined>()
  const [tokenId, setTokenId] = useState<string | undefined>()
  const [loading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitProps>()

  const closeModal = () => {
    setShow(false)
  }

  const onSubmit = handleSubmit(() => {
    if (isValidHash(contractHash!)) onImport(contractHash, tokenId)
    else toast.error('Invalid hash')
  })

  return (
    <StyledModal
      isOpen={show}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <form onSubmit={onSubmit}>
        <InputContainer>
          <Text fontSize="15px" color="background">
            CONTRACT HASH
          </Text>
          <ModalInput
            {...register('contractHash', { required: true })}
            placeholder="Input Contract Hash"
            backgroundColor="inputSecondary"
            value={contractHash || ''}
            onChange={(e) => setContractHash(e.target.value)}
          />
          {errors.contractHash && <span>This field is required</span>}
        </InputContainer>
        <InputContainer>
          <Text fontSize="15px" color="background">
            TOKEN ID
          </Text>
          <ModalInput
            {...register('tokenId', { required: true })}
            placeholder="Input Token ID"
            value={tokenId || ''}
            onChange={(e) => setTokenId(e.target.value)}
          />
          {errors.tokenId && <span>This field is required</span>}
        </InputContainer>
        <SaveButton
          type="submit"
          text="IMPORT"
          onClick={onSubmit}
          disabled={loading}
        />
      </form>
    </StyledModal>
  )
}
