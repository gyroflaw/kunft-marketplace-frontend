import React, { useCallback, useEffect, useMemo } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { useAuth, useFavoriteToken } from '@/hooks'
import { Token } from '@/types'

import { DefaultButton } from '../Button'
import { Text } from '../Text'

export const StarsButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-weight: 300;
  font-size: 20px;
`

interface FavoriteTokenProps {
  token: Token
  setToken: React.Dispatch<React.SetStateAction<Token>>
}

export default function FavoriteToken({ token, setToken }: FavoriteTokenProps) {
  const {
    favoriteTokenMutation,
    data: favoriteTokenMutationData,
    loading: favoriteTokenMutationLoading,
  } = useFavoriteToken()
  const { user } = useAuth()

  const handleStarClick = useCallback(async () => {
    if (!user) return
    await favoriteTokenMutation({
      variables: {
        slug: token.collection.slug,
        tokenId: token.id,
        publicKey: user.publicKey,
      },
    })
  }, [favoriteTokenMutation, token.id, token.collection.slug, user])

  useEffect(() => {
    if (favoriteTokenMutationLoading || !favoriteTokenMutationData) return
    setToken(favoriteTokenMutationData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteTokenMutationLoading])

  const userStarred = useMemo(() => {
    if (!user) return false
    return token.favoritedUsers.includes(user.id)
  }, [user, token.favoritedUsers])

  return (
    <StarsButton
      color="transparent"
      onClick={() =>
        toast.promise(handleStarClick, {
          pending: 'Saving...',
          success: 'Completed',
        })
      }
    >
      {userStarred ? <BsHeartFill /> : <BsHeart />}
      <Text color="primary">{token.favoritedUsers.length}</Text>
    </StarsButton>
  )
}
