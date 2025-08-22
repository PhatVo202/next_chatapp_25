import ItemList from '@/components/shared/item-list/ItemList'
import SidebarWrapper from '@/components/shared/sidebar/SidebarWrapper'
import React from 'react'

type Props = React.PropsWithChildren<{

}>

const ConversationLayout = ({ children }: Props) => {
    return (
        <>
            <ItemList title='Conversations'>
                Conversation pages
            </ItemList>
            {children}
        </>
    )
}

export default ConversationLayout