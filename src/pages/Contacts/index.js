import { useContacts } from '../../hooks/use-contacts'

export const Contacts = () => {
	const { data: contacts, isLoading, isError } = useContacts()

	if (isLoading) {
		return <div>loading...</div>
	}

	if (isError) {
		return <div>error</div>
	}

	return <div>Contacts {contacts[0].name.first}</div>
}
