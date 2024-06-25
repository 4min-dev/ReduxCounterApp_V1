import React from 'react'
import '../../../style/css/sections/usersSection/userSection.css'
import { useDispatch, useSelector } from 'react-redux'
import List from '../../UI/lists/List'
import { UserList } from '../../UI/lists/userList/UserList'
import { IUser } from '../../../ts/interfaces/users/IUser'
import { ContentLoader } from '../../UI/loaders/ContentLoader'
import { ErrorInterface } from '../../UI/errors/ErrorInterface'
import { GreenStyleButton } from '../../UI/buttons/GreenStyleButton'
import { IUserState } from '../../../ts/interfaces/states/IUserState'

export const HomePageUsersSection:React.FC = () => {

  const selector = useSelector((state:IUserState) => state.userReducer)
  const dispatch = useDispatch()

  const loadUsers = () => dispatch({type:'ADD_USERS_FROM_BASE'})

  return (
    <section className='homePageUsersSection'>
      {
        selector.isLoading 
        ? <ContentLoader/> : selector.error 
          ? <ErrorInterface error={selector.error}/> : selector.users.length > 0 
            ? <List listContainerName={'userListContainer'} items={selector.users} renderItem={(user:IUser) => <UserList user={user} key={user.id}/>}/> 
            : <GreenStyleButton handleClick={loadUsers} buttonText='Load clients'/>
      }
    </section>
  )
}